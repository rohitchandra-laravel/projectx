import { Head } from '@inertiajs/react';
import MainLayout from '@/layouts/MainLayout';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <div className="rounded-lg border border-dashed border-gray-300 p-20 text-center dark:border-gray-700">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Welcome to your Project Management System
                </h1>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                    This is your new home page with a custom navbar.
                </p>
            </div>
        </MainLayout>
    );
}
