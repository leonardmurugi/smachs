import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { PlayCircle, FileText, CheckCircle, Lock } from 'lucide-react';
import { cn } from '@/utils/cn';

import { offlineService } from '@/services/offlineStorage';
import { useState } from 'react';
import { Download, Check } from 'lucide-react';
import ModuleChat from '@/components/features/ModuleChat';

const ModuleDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [isDownloaded, setIsDownloaded] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);

    // Mock data - in a real app, fetch based on ID
    const module = {
        id: id,
        title: "Climate-Smart Agriculture Basics",
        description: "Introduction to sustainable farming practices. Learn how to adapt to climate change and improve productivity.",
        progress: 40,
        lessons: [
            { id: 1, title: "Introduction to CSA", type: "VIDEO", duration: "10:00", completed: true },
            { id: 2, title: "Understanding Climate Change", type: "VIDEO", duration: "15:00", completed: true },
            { id: 3, title: "Soil Management Practices", type: "TEXT", duration: "5 min read", completed: false },
            { id: 4, title: "Water Management", type: "VIDEO", duration: "12:00", completed: false },
            { id: 5, title: "Module Quiz", type: "QUIZ", duration: "20 min", completed: false },
        ]
    };

    const handleDownload = async () => {
        setIsDownloading(true);
        try {
            await offlineService.downloadModule(module);
            setIsDownloaded(true);
            alert('Module downloaded for offline access!');
        } catch (error) {
            console.error('Download failed', error);
            alert('Failed to download module.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">{module.title}</h1>
                    <p className="text-muted-foreground max-w-2xl">{module.description}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" onClick={handleDownload} disabled={isDownloaded || isDownloading}>
                        {isDownloaded ? (
                            <>
                                <Check className="mr-2 h-5 w-5" />
                                Downloaded
                            </>
                        ) : (
                            <>
                                <Download className="mr-2 h-5 w-5" />
                                {isDownloading ? 'Downloading...' : 'Download Offline'}
                            </>
                        )}
                    </Button>
                    <Button size="lg">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Continue Learning
                    </Button>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                    <h2 className="text-xl font-semibold">Course Content</h2>
                    <div className="space-y-2">
                        {module.lessons.map((lesson, index) => (
                            <Card key={lesson.id} className={cn("transition-colors hover:bg-accent/50", lesson.completed && "bg-muted/30")}>
                                <CardContent className="flex items-center p-4">
                                    <div className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-medium">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-medium">{lesson.title}</h3>
                                        <div className="flex items-center text-xs text-muted-foreground">
                                            {lesson.type === 'VIDEO' && <PlayCircle className="mr-1 h-3 w-3" />}
                                            {lesson.type === 'TEXT' && <FileText className="mr-1 h-3 w-3" />}
                                            {lesson.type === 'QUIZ' && <CheckCircle className="mr-1 h-3 w-3" />}
                                            {lesson.duration}
                                        </div>
                                    </div>
                                    <div>
                                        {lesson.completed ? (
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <div className="h-5 w-5 rounded-full border-2 border-muted" />
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-2 flex justify-between text-sm">
                                <span className="text-muted-foreground">Completed</span>
                                <span className="font-medium">{module.progress}%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-secondary">
                                <div
                                    className="h-full rounded-full bg-primary transition-all"
                                    style={{ width: `${module.progress}%` }}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Certificate</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="rounded-full bg-secondary p-4">
                                    <Lock className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Complete all lessons and pass the quiz to earn your certificate.
                                </p>
                                <Button variant="outline" disabled className="w-full">
                                    Download Certificate
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Module Chat */}
            <div className="mt-6">
                <ModuleChat
                    moduleId={id || '1'}
                    currentUserId="user123"
                    currentUserName="John Doe"
                    currentUserRole="LEARNER"
                />
            </div>
        </div>
    );
};

export default ModuleDetail;
