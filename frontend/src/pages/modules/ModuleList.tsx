import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PlayCircle } from 'lucide-react';

const ModuleList: React.FC = () => {
    const navigate = useNavigate();

    const modules = [
        {
            id: 1,
            title: "Climate-Smart Agriculture Basics",
            description: "Introduction to sustainable farming practices.",
            duration: "2h 30m",
            lessons: 5,
            thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
        },
        {
            id: 2,
            title: "Soil Health Management",
            description: "Techniques for maintaining and improving soil fertility.",
            duration: "3h 15m",
            lessons: 8,
            thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
        },
        {
            id: 3,
            title: "Water Conservation",
            description: "Efficient water usage and irrigation methods.",
            duration: "1h 45m",
            lessons: 4,
            thumbnail: "https://images.pexels.com/photos/30224434/pexels-photo-30224434.jpeg?auto=compress&cs=tinysrgb&w=800",
        },
        {
            id: 4,
            title: "Pest and Disease Control",
            description: "Integrated pest management strategies.",
            duration: "2h 00m",
            lessons: 6,
            thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
        },
        {
            id: 5,
            title: "Food and Nutrition",
            description: "Nutritional value of crops and food security practices.",
            duration: "2h 30m",
            lessons: 7,
            thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Modules</h1>
                <p className="text-muted-foreground">Explore our comprehensive training modules.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modules.map((module) => (
                    <Card key={module.id} className="overflow-hidden flex flex-col h-full">
                        <div className="aspect-video w-full bg-muted overflow-hidden">
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
                        <CardContent className="mt-auto">
                            <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                                <span>{module.lessons} Lessons</span>
                                <span>{module.duration}</span>
                            </div>
                            <Button className="w-full" onClick={() => navigate(`/modules/${module.id}`)}>
                                <PlayCircle className="mr-2 h-4 w-4" />
                                View Module
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ModuleList;
