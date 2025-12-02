import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/utils/cn';
import {
    LayoutDashboard,
    BookOpen,
    Award,
    LogOut,
    Users,
    BarChart
} from 'lucide-react';

interface SidebarProps {
    className?: string;
    role?: 'LEARNER' | 'COACH' | 'ADMIN';
}

const Sidebar: React.FC<SidebarProps> = ({ className, role = 'LEARNER' }) => {
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

    return (
        <div className={cn("flex h-full flex-col border-r bg-card", className)}>
            <div className="p-6">
                <h1 className="text-xl font-bold text-primary">SMACHS Academy</h1>
            </div>
            <nav className="flex-1 space-y-1 px-4">
                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.href}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )
                        }
                    >
                        <link.icon className="h-4 w-4" />
                        {link.name}
                    </NavLink>
                ))}
            </nav>
            <div className="p-4 border-t">
                <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                    <LogOut className="h-4 w-4" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
