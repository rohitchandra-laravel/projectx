import { Head } from '@inertiajs/react';
import MarketingLayout from '@/layouts/MarketingLayout';

export default function Career() {
    return (
        <MarketingLayout>
            <Head title="Careers" />
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Join the Team</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        We're looking for passionate individuals to help us build the future of work.
                    </p>
                </div>
            </div>
        </MarketingLayout>
    );
}
