import MarketingNavbar from '@/components/MarketingNavbar';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function MarketingLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <MarketingNavbar />
            <main>
                {children}
            </main>
            {/* You could add a MarketingFooter here later */}
        </div>
    );
}
