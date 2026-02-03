<?php

declare(strict_types=1);

use Inertia\Inertia;
use Stancl\Tenancy\Middleware;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tenant Routes
|--------------------------------------------------------------------------
|
| Here you can register the tenant routes for your application.
| These routes are loaded by the TenantRouteServiceProvider.
|
| Feel free to customize them however you want. Good luck!
|
*/

Route::middleware([
    'web',
    Middleware\InitializeTenancyByDomain::class,
    Middleware\PreventAccessFromUnwantedDomains::class,
    Middleware\ScopeSessions::class,
])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Tenant/Dashboard', [
            'stats' => [
                'totalProjects' => \App\Models\Project::count(),
                'activeTasks' => 0, // Placeholder
                'completedTasks' => 0, // Placeholder
                'teamMembers' => \App\Models\User::count(),
                'revenue' => 0, // Placeholder
            ],
            'recentActivities' => \App\Models\User::latest()->limit(5)->get()->map(function ($user) {
                return [
                    'id' => $user->id,
                    'user' => $user->name,
                    'action' => 'joined',
                    'target' => 'the workspace',
                    'time' => $user->created_at->diffForHumans(),
                ];
            })
        ]);
    })->name('tenant.dashboard');
});