import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Building2, CreditCard } from 'lucide-react';

interface Tenant {
    id: string;
    name: string;
    domain: string;
    created_at: string;
    plan: string;
    users_count: number;
}

interface Props {
    tenants: Tenant[];
    stats: {
        total_tenants: number;
        total_users: number;
        active_plans: number;
    };
}

export default function Dashboard({ tenants, stats }: Props) {
    return (
        <MainLayout>
            <Head title="Super Admin Dashboard" />

            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Central Dashboard</h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Manage all tenants and monitor system-wide activity.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_tenants}</div>
                            <p className="text-xs text-muted-foreground">Registered workspaces</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.total_users}</div>
                            <p className="text-xs text-muted-foreground">Active across all tenants</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stats.active_plans}</div>
                            <p className="text-xs text-muted-foreground">Paying customers</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Tenants Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Workspaces</CardTitle>
                        <CardDescription>A detailed list of all tenants and their current status.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Workspace</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Domain</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Plan</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Users</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Joined</th>
                                        <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {tenants.map((tenant) => (
                                        <tr key={tenant.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle font-medium">
                                                <div className="flex flex-col">
                                                    <span>{tenant.name}</span>
                                                    <span className="text-[10px] text-gray-400 font-mono">{tenant.id.split('-')[0]}...</span>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle text-indigo-600 dark:text-indigo-400 font-medium">
                                                {tenant.domain}
                                            </td>
                                            <td className="p-4 align-middle">
                                                <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
                                                    {tenant.plan}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle">{tenant.users_count}</td>
                                            <td className="p-4 align-middle">{tenant.created_at}</td>
                                            <td className="p-4 align-middle text-right">
                                                <Button variant="outline" size="sm" asChild>
                                                    <a href={`http://${tenant.domain}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                                                        Visit <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {tenants.length === 0 && (
                                        <tr>
                                            <td colSpan={6} className="p-4 text-center text-gray-500">
                                                No tenants found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </MainLayout>
    );
}