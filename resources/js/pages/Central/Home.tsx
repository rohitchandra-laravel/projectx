import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';
import { 
    CheckCircle, 
    BarChart3, 
    Users, 
    Zap, 
    ArrowRight 
} from 'lucide-react';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home - ProjectX" />
            
            {/* Hero Section */}
            <div className="py-12 sm:py-20 lg:py-24 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                    Manage Projects <br className="hidden sm:block" />
                    <span className="text-indigo-600 dark:text-indigo-400">Like a Pro</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Streamline your workflow, collaborate with your team, and hit your deadlines every time. 
                    ProjectX gives you the tools you need to succeed.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/register"
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2"
                    >
                        Get started
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                        Log in <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Everything you need</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            All-in-one Project Management
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Stop juggling multiple apps. ProjectX brings task management, team collaboration, and reporting into one unified platform.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <CheckCircle className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    Task Management
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">
                                        Organize tasks with custom lists, kanban boards, and robust filtering. Never lose track of what needs to be done.
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <Users className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    Team Collaboration
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">
                                        Chat, comment, and share files directly within tasks. Keep everyone aligned and moving forward together.
                                    </p>
                                </dd>
                            </div>
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <BarChart3 className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                    Real-time Analytics
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">
                                        Gain insights into team performance and project progress with beautiful, real-time dashboards and reports.
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* Testimonial / Trust Section (Optional Placeholder) */}
            <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 rounded-3xl">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Built for teams like yours.
                            </h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                                "ProjectX has completely transformed how we work. We deliver faster and with fewer meetings."
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                               <div className="flex items-center gap-x-2">
                                    <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                                        JD
                                    </div>
                                    <div className="text-white">
                                        <div className="font-semibold">Jane Doe</div>
                                        <div className="text-gray-400 text-sm">CTO, TechCorp</div>
                                    </div>
                               </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Fast Performance</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Experience lightning-fast load times and instant updates.
                                </dd>
                            </div>
                             <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <ClockIconWrapper className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">24/7 Support</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Our dedicated support team is here to help you around the clock.
                                </dd>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="h-20"></div> {/* Spacer */}
        </MainLayout>
    );
}

// Helper wrapper for icons not directly exported or to handle missing imports gracefully
function ClockIconWrapper(props: any) {
    // We imported 'Zap' but maybe not 'Clock' in the top import. 
    // Let's check imports again. I imported 'Zap' but used 'ClockIcon' in the wrapper logic idea.
    // Let me just use Zap or verify imports.
    // I imported: CheckCircle, BarChart3, Users, Zap, ArrowRight.
    // I will use Zap for performance, and maybe I need another icon for Support.
    // I will add 'LifeBuoy' or similar if available, or just use a generic one.
    // For now, let's stick to what I imported or import 'Clock' if I used it.
    // I see I used 'ClockIcon' in my previous thought but didn't import it in this file string.
    // I will add Clock to the import list above.
    return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
