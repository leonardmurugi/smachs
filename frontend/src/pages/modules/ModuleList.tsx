import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PlayCircle } from 'lucide-react';

import { useLanguage } from '@/context/LanguageContext';

const ModuleList: React.FC = () => {
    const navigate = useNavigate();
    const { t, tm } = useLanguage();

    const modules = tm.modulesData.map(m => ({
        ...m,
        lessons: m.lessonsCount, // Mapping lessonsCount to lessons for compatibility
    }));

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">{t('modules')}</h1>
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
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg leading-tight mb-2 h-14 line-clamp-2" title={module.title}>
                                {module.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2 h-10">
                                {module.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto">
                            <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                                <span>{module.lessons} {t('lessons')}</span>
                                <span>{module.duration}</span>
                            </div>
                            <Button className="w-full" onClick={() => navigate(`/modules/${module.id}`)}>
                                <PlayCircle className="mr-2 h-4 w-4" />
                                {t('viewModule')}
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ModuleList;
