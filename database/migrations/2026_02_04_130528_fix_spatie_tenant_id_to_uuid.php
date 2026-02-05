<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // roles
        Schema::table('roles', function (Blueprint $table) {
            if (Schema::hasColumn('roles', 'tenant_id')) {
                $table->dropColumn('tenant_id');
            }
        });

        Schema::table('roles', function (Blueprint $table) {
            $table->uuid('tenant_id')->nullable()->index();
        });

        // model_has_roles
        Schema::table('model_has_roles', function (Blueprint $table) {
            if (Schema::hasColumn('model_has_roles', 'tenant_id')) {
                $table->dropColumn('tenant_id');
            }
        });

        Schema::table('model_has_roles', function (Blueprint $table) {
            $table->uuid('tenant_id')->nullable()->index();
        });

        // role_has_permissions
        Schema::table('role_has_permissions', function (Blueprint $table) {
            if (Schema::hasColumn('role_has_permissions', 'tenant_id')) {
                $table->dropColumn('tenant_id');
            }
        });

        Schema::table('role_has_permissions', function (Blueprint $table) {
            $table->uuid('tenant_id')->nullable()->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('uuid', function (Blueprint $table) {
            //
        });
    }
};
