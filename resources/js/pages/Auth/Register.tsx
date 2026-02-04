import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/layouts/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/register', {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Register" />

            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                    Create your account
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                        Sign in instead
                    </Link>
                </p>
            </div>

            <form onSubmit={submit} className="space-y-6">
                <div>
                    <Label htmlFor="name">Full Name</Label>
                    <div className="mt-2">
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            autoComplete="name"
                            onChange={(e) => setData('name', e.target.value)}
                            required
                            className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                        />
                        {errors.name && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Label htmlFor="email">Email address</Label>
                    <div className="mt-2">
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="mt-2">
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
                    <Label htmlFor="password_confirmation">Confirm Password</Label>
                    <div className="mt-2">
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
                        {errors.password_confirmation && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password_confirmation}</p>
                        )}
                    </div>
                </div>

                <div>
                    <Button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-indigo-600 hover:bg-indigo-500"
                    >
                        {processing ? 'Creating account...' : 'Create account'}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
