import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Check, CheckCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotificationsPage: React.FC = () => {
    const navigate = useNavigate();
    const [notifications, setNotifications] = useState([
        { id: 1, title: 'New lesson available', message: 'Climate-Smart Agriculture module has been updated with new content', time: '5 minutes ago', unread: true, category: 'lesson' },
        { id: 2, title: 'Quiz completed', message: 'You scored 85% on the Soil Health Management quiz. Great job!', time: '1 hour ago', unread: true, category: 'quiz' },
        { id: 3, title: 'Certificate earned', message: 'Congratulations! You have earned a certificate for completing Pest Control module', time: '2 days ago', unread: false, category: 'certificate' },
        { id: 4, title: 'Coach message', message: 'Sarah Coach replied to your question in Water Conservation module', time: '3 days ago', unread: false, category: 'message' },
        { id: 5, title: 'New assignment', message: 'A new assignment has been posted in Food and Nutrition module', time: '5 days ago', unread: false, category: 'assignment' },
        { id: 6, title: 'Module unlocked', message: 'You have unlocked access to the Advanced Farming Techniques module', time: '1 week ago', unread: false, category: 'lesson' },
    ]);

    const unreadCount = notifications.filter(n => n.unread).length;

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n =>
            n.id === id ? { ...n, unread: false } : n
        ));
    };

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, unread: false })));
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'lesson': return 'bg-blue-100 text-blue-800';
            case 'quiz': return 'bg-green-100 text-green-800';
            case 'certificate': return 'bg-purple-100 text-purple-800';
            case 'message': return 'bg-orange-100 text-orange-800';
            case 'assignment': return 'bg-pink-100 text-pink-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
                        <p className="text-muted-foreground">
                            {unreadCount > 0 ? `${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
                        </p>
                    </div>
                </div>
                {unreadCount > 0 && (
                    <Button variant="outline" onClick={markAllAsRead}>
                        <CheckCheck className="mr-2 h-4 w-4" />
                        Mark all as read
                    </Button>
                )}
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
                {notifications.map((notif) => (
                    <Card
                        key={notif.id}
                        className={`cursor-pointer transition-colors hover:bg-muted/50 ${notif.unread ? 'border-l-4 border-l-primary bg-blue-50/30' : ''
                            }`}
                        onClick={() => markAsRead(notif.id)}
                    >
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-semibold">{notif.title}</h3>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColor(notif.category)}`}>
                                            {notif.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">{notif.message}</p>
                                    <p className="text-xs text-muted-foreground">{notif.time}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    {notif.unread && (
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                    )}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            markAsRead(notif.id);
                                        }}
                                    >
                                        <Check className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default NotificationsPage;
