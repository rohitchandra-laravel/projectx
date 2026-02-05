<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    private const GLOBAL_TENANT_ID = '00000000-0000-0000-0000-000000000000';

    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        setPermissionsTeamId(self::GLOBAL_TENANT_ID);

        $superAdmin = User::firstOrCreate(
            ['email' => 'superadmin@projectx.com'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('password'),
                'tenant_id' => self::GLOBAL_TENANT_ID,
            ]
        );

        $superAdmin->assignRole('super-admin');
    }
}
