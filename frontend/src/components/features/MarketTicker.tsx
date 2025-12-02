import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const MarketTicker: React.FC = () => {
    const { t, tm } = useLanguage();

    const marketData = tm.marketData;

    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
            case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
            default: return <Minus className="h-4 w-4 text-gray-500" />;
        }
    };

    return (
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-100 dark:from-green-900/20 dark:to-emerald-900/20 dark:border-green-800/50">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-green-800 dark:text-green-400">
                    <TrendingUp className="h-5 w-5" />
                    {t('marketPrices')}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {marketData.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white dark:bg-card p-3 rounded-lg shadow-sm border border-green-100 dark:border-green-800/50 min-w-[160px]"
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-semibold text-sm text-gray-800 dark:text-gray-200">{item.crop}</span>
                                {getTrendIcon(item.trend)}
                            </div>
                            <div className="text-lg font-bold text-green-700 dark:text-green-400">{item.price}</div>
                            <div className="text-xs text-muted-foreground">{item.unit}</div>
                            <div className={`text-xs font-medium mt-1 ${item.trend === 'up' ? 'text-green-600 dark:text-green-400' :
                                item.trend === 'down' ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'
                                }`}>
                                {item.change}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default MarketTicker;
