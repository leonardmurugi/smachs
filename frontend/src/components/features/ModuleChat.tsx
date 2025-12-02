import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Send, MessageCircle } from 'lucide-react';
import { cn } from '@/utils/cn';

interface Message {
    id: string;
    userId: string;
    userName: string;
    userRole: 'LEARNER' | 'COACH' | 'ADMIN';
    message: string;
    timestamp: Date;
}

interface ModuleChatProps {
    moduleId: string;
    currentUserId: string;
    currentUserName: string;
    currentUserRole: 'LEARNER' | 'COACH' | 'ADMIN';
}

const ModuleChat: React.FC<ModuleChatProps> = ({
    moduleId,
    currentUserId,
    currentUserName,
    currentUserRole
}) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            userId: '101',
            userName: 'John Doe',
            userRole: 'LEARNER',
            message: 'Great module! I have a question about soil pH levels.',
            timestamp: new Date(Date.now() - 3600000),
        },
        {
            id: '2',
            userId: '102',
            userName: 'Sarah Coach',
            userRole: 'COACH',
            message: 'Hi John! The ideal pH for most crops is between 6.0 and 7.0. What specific crop are you working with?',
            timestamp: new Date(Date.now() - 1800000),
        },
        {
            id: '3',
            userId: '101',
            userName: 'John Doe',
            userRole: 'LEARNER',
            message: 'I\'m planning to grow maize. Thank you!',
            timestamp: new Date(Date.now() - 900000),
        },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;

        const message: Message = {
            id: Date.now().toString(),
            userId: currentUserId,
            userName: currentUserName,
            userRole: currentUserRole,
            message: newMessage,
            timestamp: new Date(),
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

    const formatTime = (date: Date) => {
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(diff / 3600000);
        const days = Math.floor(diff / 86400000);

        if (minutes < 1) return 'Just now';
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        return `${days}d ago`;
    };

    const getRoleBadgeColor = (role: string) => {
        switch (role) {
            case 'COACH':
                return 'bg-blue-100 text-blue-800';
            case 'ADMIN':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Card className="flex flex-col h-[600px]">
            <CardHeader className="border-b">
                <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Module Discussion
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 p-0">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={cn(
                                "flex flex-col",
                                msg.userId === currentUserId ? "items-end" : "items-start"
                            )}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-medium text-muted-foreground">
                                    {msg.userName}
                                </span>
                                {msg.userRole !== 'LEARNER' && (
                                    <span className={cn("text-xs px-2 py-0.5 rounded-full", getRoleBadgeColor(msg.userRole))}>
                                        {msg.userRole}
                                    </span>
                                )}
                                <span className="text-xs text-muted-foreground">
                                    {formatTime(msg.timestamp)}
                                </span>
                            </div>
                            <div
                                className={cn(
                                    "max-w-[80%] rounded-lg px-4 py-2",
                                    msg.userId === currentUserId
                                        ? "bg-primary text-primary-foreground"
                                        : "bg-muted"
                                )}
                            >
                                <p className="text-sm">{msg.message}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="border-t p-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                            className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                        <Button onClick={handleSendMessage} size="default">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ModuleChat;
