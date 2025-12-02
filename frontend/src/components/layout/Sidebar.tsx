import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';
import {
    LayoutDashboard,
    BookOpen,
    Award,
    LogOut,
    Users,
    BarChart,
    Box
} from 'lucide-react';

interface SidebarProps {
    className?: string;
    role?: 'LEARNER' | 'COACH' | 'ADMIN';
}

const Sidebar: React.FC<SidebarProps> = ({ className, role = 'LEARNER' }) => {
    const [collapsed, setCollapsed] = useState(true);

    const links = [
        { name: 'Dashboard', href: '/', icon: LayoutDashboard },
        { name: 'Modules', href: '/modules', icon: BookOpen },
        { name: 'Certificates', href: '/certificates', icon: Award },
    ];

    if (role === 'COACH') {
        links.push({ name: 'Cohorts', href: '/cohorts', icon: Users });
    }

    if (role === 'ADMIN') {
        links.push({ name: 'Users', href: '/admin/users', icon: Users });
        links.push({ name: 'Analytics', href: '/admin/analytics', icon: BarChart });
    }

    const handleSelect = () => {
        setCollapsed(false);
        setTimeout(() => setCollapsed(true), 2000);
    };

    return (
        <div
            className={cn(
                "flex h-full flex-col border-r bg-card transition-all duration-500 ease-in-out",
                collapsed ? "w-20" : "w-64",
                className
            )}
        >
            <div className="p-6 flex items-center justify-center">
                {!collapsed && (
                    <h1 className="text-xl font-bold text-primary whitespace-nowrap">
                        SMACHS Academy
                    </h1>
                )}
                {collapsed && <Box className="h-6 w-6" />}
            </div>

            <nav className="flex-1 space-y-1 px-2">
                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.href}
                        onClick={handleSelect}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                collapsed && "justify-center"
                            )
                        }
                    >
                        <link.icon className="h-5 w-5" />
                        {!collapsed && link.name}
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t">
                <button
                    onClick={handleSelect}
                    className={cn(
                        "flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
                        collapsed && "justify-center"
                    )}
                >
                    <LogOut className="h-5 w-5" />
                    {!collapsed && 'Logout'}
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
