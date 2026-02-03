import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import { 
    LayoutDashboard, 
    CheckSquare, 
    Users, 
    TrendingUp, 
    MoreHorizontal,
    Briefcase,
    Bell
} from 'lucide-react';

interface DashboardProps {
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

export default function Dashboard({ stats, recentActivities }: DashboardProps) {
    return (
        <MainLayout>
            <Head title="Dashboard" />

            <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dashboard</h1>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Overview of your workspace activity and performance.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700">
                            <Bell className="mr-2 h-4 w-4 text-gray-400" />
                            Notifications
                        </button>
                        <button className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            <Briefcase className="mr-2 h-4 w-4" />
                            New Project
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
                        trend="-5 from last week"
                        trendUp={true} // Interpreted as "good" usually, or change color logic
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

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Recent Activity */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
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

                    {/* Quick Analytics Placeholder */}
                    <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                         <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800 flex justify-between items-center">
                            <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-white">Task Completion</h3>
                            <button className="text-gray-400 hover:text-gray-500">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="p-6">
                            {/* Simple Bar Chart Visualization using CSS */}
                            <div className="space-y-4">
                                <ChartBar label="Mon" percent={45} />
                                <ChartBar label="Tue" percent={70} />
                                <ChartBar label="Wed" percent={55} />
                                <ChartBar label="Thu" percent={90} />
                                <ChartBar label="Fri" percent={65} />
                            </div>
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

function ChartBar({ label, percent }: { label: string, percent: number }) {
    return (
        <div className="flex items-center gap-4">
            <span className="w-8 text-sm text-gray-500 dark:text-gray-400">{label}</span>
            <div className="flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div 
                    className="h-3 rounded-full bg-indigo-600 dark:bg-indigo-500" 
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
            <span className="w-8 text-right text-sm font-medium text-gray-700 dark:text-gray-300">{percent}%</span>
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
