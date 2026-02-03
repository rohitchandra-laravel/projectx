# Single Database Tenancy Setup Guide (Stancl/Tenancy)

This guide explains how to set up the `stancl/tenancy` package so that all your tenants share **one single database**, instead of creating a new database for each tenant.

## 1. The Concept

In this setup:
*   **One Database:** You have one main database (e.g., `projectx_db`) that holds everything.
*   **Shared Tables:** Tenants share the same tables (like `users`, `posts`, `products`).
*   **Isolation:** We add a `tenant_id` column to these tables. The package automatically filters data so tenants only see what belongs to them.

---

## 2. Configure the Database Connection

Even though we use one database, the package needs a connection named `tenant` to switch to when a user visits a tenant domain. We will make this `tenant` connection a "mirror" (copy) of your main connection.

1.  Open `config/database.php`.
2.  Find your `connections` array.
3.  Add a new connection named `tenant` that copies your main connection (e.g., `pgsql` or `mysql`).

**Example:**

```php
'connections' => [

    // Your main central connection
    'pgsql' => [
        'driver' => 'pgsql',
        'database' => env('DB_DATABASE', 'laravel'),
        // ... other settings
    ],

    // ADD THIS: The tenant connection (pointing to the SAME database)
    'tenant' => [
        'driver' => 'pgsql', // Same driver as above
        'database' => env('DB_DATABASE', 'laravel'), // Same database
        'username' => env('DB_USERNAME', 'root'), // Same user
        'password' => env('DB_PASSWORD', ''), // Same password
        'host' => env('DB_HOST', '127.0.0.1'),
        'port' => env('DB_PORT', '5432'),
        'charset' => 'utf8',
        'prefix' => '',
        'prefix_indexes' => true,
        'search_path' => 'public',
        'sslmode' => 'prefer',
    ],
],
```

---

## 3. Disable Automatic Database Creation

By default, the package tries to create a completely new database when you create a tenant. We must stop this.

1.  Open `app/Providers/TenancyServiceProvider.php`.
2.  Scroll down to the `events()` method.
3.  Look for `Events\TenantCreated`.
4.  **Comment out** or remove the jobs that create database files.

**Code:**

```php
Events\TenantCreated::class => [
    JobPipeline::make([
        // Jobs\CreateDatabase::class,  <-- COMMENT THIS OUT
        // Jobs\MigrateDatabase::class, <-- COMMENT THIS OUT
        // Jobs\SeedDatabase::class,    <-- COMMENT THIS OUT

        // Your other jobs can stay
    ])->send(function (Events\TenantCreated $event) {
        return $event->tenant;
    })->shouldBeQueued(false),
],
```

---

## 4. Update Your Migrations (Add `tenant_id`)

Any table that belongs to a specific tenant must have a `tenant_id` column. This is how we know who owns the data.

1.  Open your migration file (e.g., `create_projects_table.php`).
2.  Add a foreign key to the `tenants` table.

**Example:**

```php
Schema::create('projects', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    
    // Add this line to link data to a tenant
    $table->foreignUuid('tenant_id')->constrained('tenants')->onDelete('cascade');
    
    $table->timestamps();
});
```

*Note: You do not need this for tables that are "Central" only (like the `tenants` table itself or `domains`).*

---

## 5. Update Your Models (Apply the Trait)

This is the magic step. You must tell Laravel to automatically filter queries by `tenant_id`.

1.  Open a model that belongs to a tenant (e.g., `app/Models/Project.php`).
2.  Import `Stancl\Tenancy\Database\Concerns\BelongsToTenant`.
3.  Use the trait inside the class.

**Example:**

```php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Stancl\Tenancy\Database\Concerns\BelongsToTenant; // <-- Import

class Project extends Model
{
    use BelongsToTenant; // <-- Use Trait

    // ...
}
```

**What this does:**
*   **Reading:** When you run `Project::all()`, it secretly runs `Project::where('tenant_id', 'current-tenant-id')->all()`.
*   **Writing:** When you run `Project::create(...)`, it automatically fills in the `tenant_id`.

---

## 6. Define Tenant Routes

Routes defined in `routes/web.php` are "Central" (public). Routes for tenants must go in `routes/tenant.php`.

1.  Open `routes/tenant.php`.
2.  Define your application routes here.

**Example:**

```php
Route::middleware([
    'web',
    \Stancl\Tenancy\Middleware\InitializeTenancyByDomain::class, // Finds tenant by URL
    \Stancl\Tenancy\Middleware\PreventAccessFromUnwantedDomains::class,
])->group(function () {
    
    Route::get('/', function () {
        // This will only return Projects belonging to the current tenant
        return \App\Models\Project::all(); 
    });

});
```

---

## 7. Creating a Tenant (How to test)

Since we disabled the automatic database creation jobs in Step 3, creating a tenant is instant. It just adds a row to the `tenants` table.

You can do this in `php artisan tinker`:

```php
$tenant = \App\Models\Tenant::create(['id' => 'acme']);
$tenant->domains()->create(['domain' => 'acme.projectx.test']);
```

Now, when you visit `http://acme.projectx.test`:
1.  The package finds tenant `acme`.
2.  It switches to the `tenant` connection (which is your main DB).
3.  Any query to a model with `BelongsToTenant` is automatically scoped to `acme`.
