import { Head } from '@inertiajs/react';
import MarketingLayout from '@/layouts/MarketingLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Contact() {
    return (
        <MarketingLayout>
            <Head title="Contact Us" />
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">Get in Touch</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>

                <form className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <Label htmlFor="first-name">First name</Label>
                            <Input type="text" id="first-name" name="first-name" />
                        </div>
                        <div>
                            <Label htmlFor="last-name">Last name</Label>
                            <Input type="text" id="last-name" name="last-name" />
                        </div>
                        <div className="sm:col-span-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" />
                        </div>
                        <div className="sm:col-span-2">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-900 dark:text-white dark:ring-gray-700"
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500">
                            Send message
                        </Button>
                    </div>
                </form>
            </div>
        </MarketingLayout>
    );
}
