import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FormEventHandler } from 'react';
import { CheckCircle2, LayoutGrid, ShieldCheck, CreditCard } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        workspace_name: '',
        subdomain: '',
        terms: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col md:flex-row">
            <Head title="Start your free trial" />

            {/* Left Column: Form */}
            <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24 bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-sm lg:w-96">
                    <div className="mb-10">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                                <LayoutGrid className="h-6 w-6" />
                            </div>
                            <span className="text-2xl">ProjectX</span>
                        </Link>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                            Start your 14-day free trial
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            No credit card required for trial. 
                            {' '}
                            <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                                Already have an account?
                            </Link>
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-6">
                        {/* Personal Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold dark:bg-indigo-900 dark:text-indigo-300">1</span>
                                Personal Details
                            </h3>
                            <div>
                                <Label htmlFor="name">Full Name</Label>
                                <div className="mt-1">
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        autoComplete="name"
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="email">Email address</Label>
                                <div className="mt-1">
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                        className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Separator className="my-6" />

                        {/* Workspace Setup */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold dark:bg-indigo-900 dark:text-indigo-300">2</span>
                                Workspace Setup
                            </h3>
                            <div>
                                <Label htmlFor="workspace_name">Workspace Name</Label>
                                <div className="mt-1">
                                    <Input
                                        id="workspace_name"
                                        type="text"
                                        name="workspace_name"
                                        value={data.workspace_name}
                                        onChange={(e) => {
                                            setData((data) => ({
                                                ...data,
                                                workspace_name: e.target.value,
                                                subdomain: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-')
                                            }));
                                        }}
                                        required
                                        className={errors.workspace_name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                                        placeholder="Acme Corp"
                                    />
                                    {errors.workspace_name && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.workspace_name}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <Label htmlFor="subdomain">Workspace URL</Label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                        <Input
                                            id="subdomain"
                                            type="text"
                                            name="subdomain"
                                            value={data.subdomain}
                                            onChange={(e) => setData('subdomain', e.target.value)}
                                            required
                                            className={`rounded-r-none ${errors.subdomain ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                                            placeholder="acme"
                                        />
                                    </div>
                                    <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
                                        .projectx.test
                                    </span>
                                </div>
                                {errors.subdomain && (
                                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.subdomain}</p>
                                )}
                                <p className="mt-1 text-xs text-gray-500">You can change this later.</p>
                            </div>
                        </div>

                        <Separator className="my-6" />

                        {/* Security */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold dark:bg-indigo-900 dark:text-indigo-300">3</span>
                                Security
                            </h3>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <div className="mt-1">
                                        <Input
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                            required
                                            className={errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''}
                                        />
                                        {errors.password && (
                                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="password_confirmation">Confirm</Label>
                                    <div className="mt-1">
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            autoComplete="new-password"
                                            onChange={(e) => setData('password_confirmation', e.target.value)}
                                            required
                                            className={errors.password_confirmation ? 'border-red-500 focus-visible:ring-red-500' : ''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Payment Placeholder */}
                        <div className="rounded-md bg-gray-50 p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                             <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <CreditCard className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3 flex-1 md:flex md:justify-between">
                                    <p className="text-sm text-gray-700 dark:text-gray-300">Payment details not required for trial.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <Checkbox
                                id="terms"
                                checked={data.terms}
                                onCheckedChange={(checked) => setData('terms', checked as boolean)}
                                required
                            />
                            <Label htmlFor="terms" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                                I agree to the <a href="#" className="text-indigo-600 hover:text-indigo-500">Terms of Service</a> and <a href="#" className="text-indigo-600 hover:text-indigo-500">Privacy Policy</a>
                            </Label>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-full bg-indigo-600 hover:bg-indigo-500 h-11 text-base shadow-lg"
                            >
                                {processing ? 'Creating your account...' : 'Create Account'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Column: Plan Summary & Testimonials */}
            <div className="hidden lg:flex lg:flex-1 lg:flex-col lg:justify-center lg:bg-gray-50 lg:dark:bg-gray-800 lg:px-8 xl:px-12 relative overflow-hidden">
                 {/* Decorative background pattern */}
                 <div className="absolute inset-0 opacity-10 dark:opacity-5">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid-pattern)" />
                    </svg>
                    <defs>
                        <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                </div>

                <div className="relative max-w-lg mx-auto w-full">
                     {/* Plan Card */}
                    <Card className="mb-8 border-indigo-100 dark:border-indigo-900 shadow-xl relative z-10 overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-2 -mr-2 h-16 w-16 bg-indigo-500 rounded-full blur-xl opacity-20"></div>
                        <CardHeader className="bg-gray-50/50 dark:bg-gray-800/50 border-b pb-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <CardDescription>Selected Plan</CardDescription>
                                    <CardTitle className="text-2xl mt-1 text-indigo-600 dark:text-indigo-400">Pro Plan</CardTitle>
                                </div>
                                <div className="text-right">
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">$29</span>
                                    <span className="text-gray-500 text-sm">/mo</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6 grid gap-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">Unlimited Projects</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">Advanced Analytics</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">24/7 Priority Support</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700 dark:text-gray-300">Up to 10 Team Members</span>
                            </div>
                        </CardContent>
                        <CardFooter className="bg-gray-50/50 dark:bg-gray-800/50 border-t pt-4">
                            <div className="w-full flex justify-between items-center text-sm">
                                <span className="font-medium text-gray-900 dark:text-white">Total due today</span>
                                <span className="font-bold text-gray-900 dark:text-white">$0.00</span>
                            </div>
                        </CardFooter>
                    </Card>

                    {/* Trust/Testimonial */}
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className="h-5 w-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                            "ProjectX has completely transformed how our team collaborates. We're delivering features 2x faster since we switched."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                                SJ
                            </div>
                            <div>
                                <div className="font-semibold text-gray-900 dark:text-white">Sarah Jenkins</div>
                                <div className="text-xs text-gray-500">Product Manager, TechFlow</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Logos */}
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
                             <ShieldCheck className="h-6 w-6" /> TRUSTED
                        </div>
                        <div className="flex items-center gap-2 font-bold text-xl text-gray-400">
                             SECURE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

