import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PlayCircle, BookOpen, Award, Clock } from 'lucide-react';
import MarketTicker from '@/components/features/MarketTicker';
import { useLanguage } from '@/context/LanguageContext';

const LearnerDashboard: React.FC = () => {
    const navigate = useNavigate();
    const { t, tm } = useLanguage();

    // Map the translated data to the structure needed for the dashboard
    // In a real app, this would merge backend progress data with frontend translation data
    const modules = tm.modulesData.map(m => ({
        ...m,
        progress: m.id === 1 ? 75 : m.id === 2 ? 30 : 0 // Mock progress
    })).filter(m => m.id !== 4); // Just showing a subset for "Continue Learning"

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">{t('welcome')}, John!</h1>
                <p className="text-muted-foreground">Oct 24, 2023</p>
            </div>

            {/* Market Prices Ticker */}
            <MarketTicker />

            {/* Stats Overview */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t('modulesEnrolled')}</CardTitle>
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t('modulesCompleted')}</CardTitle>
                        <Award className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{t('hoursSpent')}</CardTitle>
                        <Clock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12.5</div>
                    </CardContent>
                </Card>
            </div>

            {/* Continue Learning */}
            <div>
                <h2 className="mb-4 text-xl font-semibold">{t('continueLearning')}</h2>
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
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg leading-tight mb-2 h-14 line-clamp-2" title={module.title}>
                                    {module.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 h-10">
                                    {module.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">{t('progress')}</span>
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
                                    {module.progress > 0 ? t('continueModule') : t('startModule')}
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
