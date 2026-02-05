<?php

namespace App\Http\Controllers\Central;

use App\Http\Controllers\Controller;
use App\Models\Tenant;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        // Debug info
        $debug = [
            'roles' => auth()->user()->getRoleNames(),
            'team_id' => getPermissionsTeamId(),
            'all_roles_for_user' => auth()->user()->roles()->get(),
        ];

        $tenants = Tenant::with('domains')->get()->map(function ($tenant) {
            return [
                'id' => $tenant->id,
                'name' => $tenant->data['name'] ?? 'N/A',
                'domain' => $tenant->domains->first()?->domain,
                'created_at' => $tenant->created_at->format('M d, Y'),
                'plan' => $tenant->data['plan'] ?? 'Trial',
                'users_count' => User::where('tenant_id', $tenant->id)->count(),
            ];
        });

        return Inertia::render('Central/Dashboard', [
            'tenants' => $tenants,
            'stats' => [
                'total_tenants' => Tenant::count(),
                'total_users' => User::count(),
                'active_plans' => $tenants->where('plan', '!=', 'Trial')->count(),
            ],
            'debug' => $debug,
        ]);
    }
}
