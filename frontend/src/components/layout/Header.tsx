import React, { useState } from 'react';
import { Menu, Bell, User, Settings, LogOut, ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

interface HeaderProps {
    onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
    const { language, setLanguage, t } = useLanguage();
    const { theme, setTheme } = useTheme();
    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    const notifications = [
        { id: 1, title: 'New lesson available', message: 'Climate-Smart Agriculture module updated', time: '5m ago', unread: true },
        { id: 2, title: 'Quiz completed', message: 'You scored 85% on Soil Health quiz', time: '1h ago', unread: true },
        { id: 3, title: 'Certificate earned', message: 'Congratulations! You earned a certificate', time: '2d ago', unread: false },
    ];

    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="flex h-16 items-center gap-4 px-4 md:px-6">
                {/* Mobile menu toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={onMenuToggle}
                >
                    <Menu className="h-5 w-5" />
                </Button>

                {/* Logo/Title */}
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold">SMACHS Academy</h2>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Language Toggle */}
                <Button
                    variant="ghost"
                    size="sm"
                    className="hidden md:flex items-center gap-2 mr-2"
                    onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
                >
                    <Globe className="h-4 w-4" />
                    <span className="font-medium">{language === 'en' ? 'EN' : 'SW'}</span>
                </Button>

                {/* Theme Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="mr-2"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                >
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>

                {/* Notifications */}
                <div className="relative">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                            setShowNotifications(!showNotifications);
                            setShowUserMenu(false);
                        }}
                    >
                        <Bell className="h-5 w-5" />
                        {unreadCount > 0 && (
                            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
                                {unreadCount}
                            </span>
                        )}
                    </Button>

                    {/* Notifications Dropdown */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-2 w-80 rounded-md border bg-background shadow-lg z-50">
                            <div className="p-4 border-b">
                                <h3 className="font-semibold">Notifications</h3>
                            </div>
                            <div className="max-h-96 overflow-y-auto">
                                {notifications.map((notif) => (
                                    <div
                                        key={notif.id}
                                        className={`p-4 border-b hover:bg-muted cursor-pointer ${notif.unread ? 'bg-blue-50/50' : ''
                                            }`}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <h4 className="font-medium text-sm">{notif.title}</h4>
                                                <p className="text-sm text-muted-foreground">{notif.message}</p>
                                            </div>
                                            {notif.unread && (
                                                <div className="h-2 w-2 rounded-full bg-blue-500 mt-1" />
                                            )}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="p-2 border-t">
                                <Button
                                    variant="ghost"
                                    className="w-full text-sm"
                                    onClick={() => {
                                        setShowNotifications(false);
                                        window.location.href = '/notifications';
                                    }}
                                >
                                    View all notifications
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* User Menu */}
                <div className="relative">
                    <Button
                        variant="ghost"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setShowUserMenu(!showUserMenu);
                            setShowNotifications(false);
                        }}
                    >
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                            <User className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="hidden md:inline text-sm">John Doe</span>
                        <ChevronDown className="h-4 w-4" />
                    </Button>

                    {/* User Menu Dropdown */}
                    {showUserMenu && (
                        <div className="absolute right-0 mt-2 w-56 rounded-md border bg-background shadow-lg z-50">
                            <div className="p-4 border-b">
                                <p className="font-medium">John Doe</p>
                                <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                                <p className="text-xs text-muted-foreground mt-1">Learner</p>
                            </div>
                            <div className="p-2">
                                <button
                                    className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded hover:bg-muted"
                                    onClick={() => {
                                        setShowUserMenu(false);
                                        window.location.href = '/profile';
                                    }}
                                >
                                    <User className="h-4 w-4" />
                                    {t('profile')}
                                </button>
                                <button className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded hover:bg-muted">
                                    <Settings className="h-4 w-4" />
                                    {t('settings')}
                                </button>
                            </div>
                            <div className="p-2 border-t">
                                <button className="flex items-center gap-3 w-full px-3 py-2 text-sm rounded hover:bg-muted text-red-600">
                                    <LogOut className="h-4 w-4" />
                                    {t('logout')}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Click outside to close dropdowns */}
            {(showNotifications || showUserMenu) && (
                <div
                    className="fixed inset-0 z-30"
                    onClick={() => {
                        setShowNotifications(false);
                        setShowUserMenu(false);
                    }}
                />
            )}
        </header>
    );
};

export default Header;
