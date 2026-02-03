import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
    return (
        <nav className="border-b bg-white dark:bg-gray-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between items-center">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                            PMS
                        </Link>
                        <div className="ml-10 hidden space-x-8 sm:flex">
                            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                Dashboard
                            </Link>
                            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                Projects
                            </Link>
                            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                                Tasks
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
