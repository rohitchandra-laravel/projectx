import { Head, Link, useForm } from '@inertiajs/react';
import AuthLayout from '@/layouts/AuthLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { FormEventHandler } from 'react';

interface LoginProps {
    status?: string;
    canResetPassword?: boolean;
    canRegister?: boolean;
}

export default function Login({ status, canResetPassword, canRegister }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post('/login', {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout>
            <Head title="Log in" />

            <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
                    Sign in to your account
                </h2>
                {canRegister && (
                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                        Not a member?{' '}
                        <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">
                            Start a 14 day free trial
                        </Link>
                    </p>
                )}
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                    {status}
                </div>
            )}

            <form onSubmit={submit} className="space-y-6">
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
                            required // HTML5 validation as first line of defense
                            className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                        />
                        {errors.email && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                        )}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        {canResetPassword && (
                            <div className="text-sm">
                                <Link
                                    href="/forgot-password"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="mt-2">
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            className={errors.password ? 'border-red-500 focus-visible:ring-red-500' : ''}
                        />
                        {errors.password && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                        )}
                    </div>
                </div>

                <div className="flex items-center">
                    <Checkbox
                        id="remember"
                        checked={data.remember}
                        onCheckedChange={(checked) => setData('remember', checked as boolean)}
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm leading-6 text-gray-900 dark:text-gray-300">
                        Remember me
                    </label>
                </div>

                <div>
                    <Button
                        type="submit"
                        disabled={processing}
                        className="w-full bg-indigo-600 hover:bg-indigo-500"
                    >
                        {processing ? 'Signing in...' : 'Sign in'}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
