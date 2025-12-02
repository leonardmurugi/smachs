import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PlayCircle, BookOpen, Award, Clock } from 'lucide-react';

const LearnerDashboard: React.FC = () => {
    const navigate = useNavigate();

    const modules = [
        {
            id: 1,
            title: "Climate-Smart Agriculture Basics",
            description: "Introduction to sustainable farming practices.",
            progress: 75,
            thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
        },
        {
            id: 2,
            title: "Soil Health Management",
            description: "Techniques for maintaining and improving soil fertility.",
            progress: 30,
            thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
        },
        {
            id: 3,
            title: "Water Conservation",
            description: "Efficient water usage and irrigation methods.",
            progress: 0,
            thumbnail: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
        },
        {
            id: 5,
            title: "Food and Nutrition",
            description: "Nutritional value of crops and food security practices.",
            progress: 0,
            thumbnail: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&q=80",
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
                <p className="text-muted-foreground">Here's an overview of your learning progress.</p>
            </div>

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Modules Enrolled</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Modules Completed</CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Hours Spent</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12.5</div>
                    </CardContent>
                </Card>
            </div>

            {/* Continue Learning */}
            <div>
                <h2 className="mb-4 text-xl font-semibold">Continue Learning</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {modules.map((module) => (
                        <Card key={module.id} className="overflow-hidden">
                            <div className="aspect-video w-full bg-muted">
                                <img
                                    src={module.thumbnail}
                                    alt={module.title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="line-clamp-1">{module.title}</CardTitle>
                                <CardDescription className="line-clamp-2">{module.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Progress</span>
                                        <span className="font-medium">{module.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-secondary">
                                        <div
                                            className="h-full rounded-full bg-primary transition-all"
                                            style={{ width: `${module.progress}%` }}
                                        />
                                    </div>
                                </div>
                                <Button className="w-full" onClick={() => navigate(`/modules/${module.id}`)}>
                                    <PlayCircle className="mr-2 h-4 w-4" />
                                    {module.progress > 0 ? 'Continue' : 'Start'} Module
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LearnerDashboard;
