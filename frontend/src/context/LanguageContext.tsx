import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language } from '@/utils/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: keyof typeof translations.en) => string;
    tm: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: keyof typeof translations.en) => {
        return (translations[language] as any)[key] || key;
    };

    const tm = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t, tm }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
