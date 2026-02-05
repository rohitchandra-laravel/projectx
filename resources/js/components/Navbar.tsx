import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { LayoutGrid, LogOut, User } from 'lucide-react';

export default function Navbar() {
    const { auth } = usePage().props as any;

    return (
        <nav className="border-b bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                <LayoutGrid className="h-5 w-5" />
                            </div>
                            <span>ProjectX</span>
                        </Link>
                        <div className="ml-10 hidden space-x-8 sm:flex">
                            {auth.user && (
                                <Link 
                                    href={auth.is_super_admin ? "/dashboard" : "/"} 
                                    className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                                >
                                    Dashboard
                                </Link>
                            )}
                            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                Projects
                            </Link>
                            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                Tasks
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {auth.user ? (
                            <div className="flex items-center gap-4">
                                <div className="hidden md:flex flex-col items-end mr-2">
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{auth.user.name}</span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">{auth.user.email}</span>
                                </div>
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <User className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href="/logout" method="post" as="button" className="flex items-center gap-2">
                                        <LogOut className="h-4 w-4" /> Logout
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            <>
                                <Button variant="ghost" asChild>
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                                    <Link href="/register">Get Started</Link>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
