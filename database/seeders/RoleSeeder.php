<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RoleSeeder extends Seeder
{
    private const GLOBAL_TENANT_ID = '00000000-0000-0000-0000-000000000000';

    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        setPermissionsTeamId(self::GLOBAL_TENANT_ID);

        Role::firstOrCreate(
            ['name' => 'super-admin', 'guard_name' => 'web'],
            ['tenant_id' => self::GLOBAL_TENANT_ID]
        );
    }
}
