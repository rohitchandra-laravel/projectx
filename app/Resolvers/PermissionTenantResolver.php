<?php

namespace App\Resolvers;

use Spatie\Permission\Contracts\PermissionsTeamResolver;

class PermissionTenantResolver implements PermissionsTeamResolver
{
    protected static $teamId = null;

    public function getPermissionsTeamId(): int|string|null
    {
        return static::$teamId;
    }

    public function setPermissionsTeamId($id): void
    {
        static::$teamId = $id;
    }
}
