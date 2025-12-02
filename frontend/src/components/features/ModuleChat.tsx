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
    moduleId: _moduleId, // Will be used for API calls when backend is connected
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
                        <div className="flex-1 space-y-2">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="file"
                                    id="file-upload"
                                    className="hidden"
                                    accept="image/*,application/pdf,.doc,.docx"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            alert(`File selected: ${file.name}`);
                                            // Reset input so same file can be selected again
                                            e.target.value = '';
                                        }
                                    }}
                                />
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1"
                                    type="button"
                                    onClick={() => document.getElementById('file-upload')?.click()}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                                    </svg>
                                    Attach File
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1"
                                    onClick={() => alert('Video call feature - Connect via external platform')}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="m22 8-6 4 6 4V8Z" />
                                        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                                    </svg>
                                    Video Call
                                </Button>
                            </div>
                        </div>
                        <Button onClick={handleSendMessage} size="default" className="h-10 self-start">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ModuleChat;
