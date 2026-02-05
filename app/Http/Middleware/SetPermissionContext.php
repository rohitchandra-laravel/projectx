<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetPermissionContext
{
    private const GLOBAL_TENANT_ID = '00000000-0000-0000-0000-000000000000';

    public function handle(Request $request, Closure $next): Response
    {
        if (function_exists('tenant') && tenant('id')) {
            setPermissionsTeamId(tenant('id'));
        } else {
            setPermissionsTeamId(self::GLOBAL_TENANT_ID);
        }

        return $next($request);
    }
}
