import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const MarketTicker: React.FC = () => {
    const { t } = useLanguage();

    const marketData = [
        { crop: 'Maize (Dry)', price: 'KES 5,200', unit: '90kg Bag', trend: 'up', change: '+5%' },
        { crop: 'Beans (Rosecoco)', price: 'KES 12,000', unit: '90kg Bag', trend: 'stable', change: '0%' },
        { crop: 'Potatoes (Shangi)', price: 'KES 3,500', unit: '50kg Bag', trend: 'down', change: '-2%' },
        { crop: 'Tomatoes', price: 'KES 8,000', unit: '64kg Crate', trend: 'up', change: '+8%' },
        { crop: 'Onions (Red)', price: 'KES 90', unit: '1kg', trend: 'up', change: '+3%' },
    ];

    const getTrendIcon = (trend: string) => {
        switch (trend) {
            case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
            case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
            default: return <Minus className="h-4 w-4 text-gray-500" />;
        }
    };

    return (
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-100">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2 text-green-800">
                    <TrendingUp className="h-5 w-5" />
                    {t('marketPrices')}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {marketData.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 bg-white p-3 rounded-lg shadow-sm border border-green-100 min-w-[160px]"
                        >
                            <div className="flex justify-between items-start mb-1">
                                <span className="font-semibold text-sm text-gray-800">{item.crop}</span>
                                {getTrendIcon(item.trend)}
                            </div>
                            <div className="text-lg font-bold text-green-700">{item.price}</div>
                            <div className="text-xs text-muted-foreground">{item.unit}</div>
                            <div className={`text-xs font-medium mt-1 ${item.trend === 'up' ? 'text-green-600' :
                                    item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
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
