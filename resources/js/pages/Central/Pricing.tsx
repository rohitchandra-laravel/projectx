import { Head, Link } from '@inertiajs/react';
import MarketingLayout from '@/layouts/MarketingLayout';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Pricing() {
    const tiers = [
        {
            name: 'Basic',
            price: '$0',
            description: 'Perfect for individuals and small projects.',
            features: ['Up to 3 projects', 'Basic task tracking', 'Community support'],
            cta: 'Start for free',
            href: '/register',
            featured: false,
        },
        {
            name: 'Pro',
            price: '$19',
            description: 'Everything you need for a growing team.',
            features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Custom fields'],
            cta: 'Get started',
            href: '/register',
            featured: true,
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            description: 'Advanced features for large organizations.',
            features: ['SSO & Security', 'Dedicated account manager', 'Custom integrations', 'SLA'],
            cta: 'Contact sales',
            href: '/contact',
            featured: false,
        },
    ];

    return (
        <MarketingLayout>
            <Head title="Pricing" />
            <div className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Pricing</h2>
                        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                            Plans for every team size
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {tiers.map((tier) => (
                            <div
                                key={tier.name}
                                className={`flex flex-col justify-between rounded-3xl p-8 ring-1 ring-gray-200 dark:ring-gray-800 xl:p-10 ${
                                    tier.featured ? 'bg-gray-900 ring-gray-900 dark:bg-gray-800' : 'bg-white dark:bg-gray-950'
                                }`}
                            >
                                <div>
                                    <h3 className={`text-lg font-semibold leading-8 ${tier.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                        {tier.name}
                                    </h3>
                                    <p className={`mt-4 text-sm leading-6 ${tier.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {tier.description}
                                    </p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className={`text-4xl font-bold tracking-tight ${tier.featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                            {tier.price}
                                        </span>
                                        {tier.price !== 'Custom' && (
                                            <span className={`text-sm font-semibold leading-6 ${tier.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                                                /month
                                            </span>
                                        )}
                                    </p>
                                    <ul role="list" className={`mt-8 space-y-3 text-sm leading-6 ${tier.featured ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <Check className={`h-6 w-5 flex-none ${tier.featured ? 'text-indigo-400' : 'text-indigo-600'}`} aria-hidden="true" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    asChild
                                    className={`mt-8 block w-full ${
                                        tier.featured ? 'bg-indigo-500 hover:bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-500'
                                    }`}
                                >
                                    <Link href={tier.href}>{tier.cta}</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MarketingLayout>
    );
}
