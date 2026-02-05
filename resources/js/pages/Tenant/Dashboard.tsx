import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import { 
    LayoutDashboard, 
    CheckSquare, 
    Users, 
    TrendingUp, 
    MoreHorizontal,
    Briefcase,
    Bell,
    ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DashboardProps {
    tenant: {
        id: string;
        name: string;
        plan: string;
        created_at: string;
    };
    stats: {
        totalProjects: number;
        activeTasks: number;
        completedTasks: number;
        teamMembers: number;
        revenue: number;
    };
    recentActivities: Array<{
        id: number;
        user: string;
        action: string;
        target: string;
        time: string;
    }>;
}

export default function Dashboard({ tenant, stats, recentActivities }: DashboardProps) {
    return (
        <MainLayout>
            <Head title="Dashboard" />

            <div className="space-y-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Welcome back to <span className="font-medium text-gray-900 dark:text-white">{tenant.name}</span>
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 dark:bg-indigo-900/20 dark:border-indigo-800">
                            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                            <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 capitalize">{tenant.plan}</span>
                        </div>
                        <button className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700">
                            <Bell className="mr-2 h-4 w-4 text-gray-400" />
                            Notifications
                        </button>
                    </div>
                </div>

                {/* Workspace Info Bar */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                     <div className="lg:col-span-2 flex items-center justify-between p-4 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/20">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-lg bg-white dark:bg-gray-800 border flex items-center justify-center shadow-sm">
                                <LayoutDashboard className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{tenant.name}</h2>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Workspace ID: {tenant.id.split('-')[0]}...</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Joined</p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{tenant.created_at}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl border border-indigo-100 bg-indigo-50/50 dark:border-indigo-900/20 dark:bg-indigo-900/10">
                         <div>
                            <p className="text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold">Current Plan</p>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white capitalize">{tenant.plan}</h2>
                        </div>
                        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            Upgrade
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard 
                        title="Total Projects" 
                        value={stats.totalProjects} 
                        icon={<Briefcase className="h-5 w-5 text-indigo-600" />}
                        trend="+2 this month"
                        trendUp={true}
                    />
                    <StatCard 
                        title="Active Tasks" 
                        value={stats.activeTasks} 
                        icon={<CheckSquare className="h-5 w-5 text-indigo-600" />}
                        trend="On track"
                        trendUp={true}
                    />
                    <StatCard 
                        title="Team Members" 
                        value={stats.teamMembers} 
                        icon={<Users className="h-5 w-5 text-indigo-600" />}
                        trend="+1 new member"
                        trendUp={true}
                    />
                    <StatCard 
                        title="Revenue" 
                        value={`$${stats.revenue.toLocaleString()}`} 
                        icon={<TrendingUp className="h-5 w-5 text-indigo-600" />}
                        trend="+12% vs last month"
                        trendUp={true}
                    />
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Plan Details (Static Info) */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 overflow-hidden">
                            <div className="bg-indigo-600 px-6 py-4">
                                <h3 className="text-base font-semibold leading-6 text-white flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4" /> Plan & Usage
                                </h3>
                            </div>
                            <div className="p-6 space-y-4">
                                <div>
                                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Current Plan</p>
                                    <p className="text-lg font-bold text-gray-900 dark:text-white capitalize">{tenant.plan}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Storage</span>
                                        <span className="font-medium text-gray-900 dark:text-white">1.2GB / 10GB</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                                        <div className="h-full bg-indigo-600 w-[12%]"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Projects</span>
                                        <span className="font-medium text-gray-900 dark:text-white">{stats.totalProjects} / 50</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden dark:bg-gray-800">
                                        <div className="h-full bg-indigo-600 w-[24%]"></div>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <Button className="w-full" variant="outline">View Billing</Button>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Workspace Link</h3>
                            <p className="text-xs text-gray-500 mb-4 font-mono break-all">{window.location.origin}</p>
                            <Button variant="secondary" size="sm" className="w-full" onClick={() => navigator.clipboard.writeText(window.location.origin)}>
                                Copy URL
                            </Button>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Recent Activity</h3>
                        </div>
                        <ul role="list" className="divide-y divide-gray-100 dark:divide-gray-800">
                            {recentActivities.map((activity) => (
                                <li key={activity.id} className="flex gap-x-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                    <div className="h-10 w-10 flex-none rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                                        {getInitials(activity.user)}
                                    </div>
                                    <div className="flex-auto space-y-1">
                                        <p className="text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                            {activity.user}
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {activity.action} <span className="font-medium text-gray-900 dark:text-white">{activity.target}</span>
                                        </p>
                                    </div>
                                    <div className="flex-none text-xs text-gray-400 dark:text-gray-500">
                                        {activity.time}
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 rounded-b-xl dark:border-gray-800 dark:bg-gray-800/50">
                            <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                View all activity <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

function StatCard({ title, value, icon, trend, trendUp }: any) {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="flex items-center gap-4">
                <div className="rounded-lg bg-indigo-50 p-3 dark:bg-indigo-900/20">
                    {icon}
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
                <span className={`font-medium ${trendUp ? 'text-green-600 dark:text-green-400' : 'text-red-600'}`}>
                    {trend}
                </span>
            </div>
        </div>
    );
}

function getInitials(name: string) {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
}