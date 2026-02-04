import { Link } from '@inertiajs/react';
import { LayoutGrid } from 'lucide-react';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function AuthLayout({ children }: Props) {
    return (
        <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8 dark:bg-gray-900">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Link href="/" className="flex items-center justify-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                        <LayoutGrid className="h-6 w-6" />
                    </div>
                    <span className="text-2xl">ProjectX</span>
                </Link>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 dark:bg-gray-800 dark:ring-1 dark:ring-white/10">
                    {children}
                </div>
            </div>
        </div>
    );
}
