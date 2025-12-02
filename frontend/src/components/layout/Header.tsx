import React from 'react';
import { Menu, Bell } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 md:px-6">
            <Button
                variant="ghost"
                size="icon"
                className="mr-4 md:hidden"
                onClick={onMenuClick}
            >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
            <div className="flex flex-1 items-center justify-between">
                <h2 className="text-lg font-semibold">Dashboard</h2>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <div className="h-8 w-8 rounded-full bg-primary/20" />
                </div>
            </div>
        </header>
    );
};

export default Header;
