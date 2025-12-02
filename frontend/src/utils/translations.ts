export type Language = 'en' | 'sw';

export const translations = {
    en: {
        // Navigation
        dashboard: 'Dashboard',
        modules: 'Modules',
        certificates: 'Certificates',
        coach: 'Coach',
        admin: 'Admin',
        notifications: 'Notifications',
        profile: 'My Profile',
        settings: 'Settings',
        logout: 'Logout',

        // Dashboard
        welcome: 'Welcome back',
        continueLearning: 'Continue Learning',
        viewModule: 'View Module',
        lessons: 'Lessons',
        completed: 'Completed',
        inProgress: 'In Progress',

        // Dashboard Stats
        modulesEnrolled: 'Modules Enrolled',
        modulesCompleted: 'Modules Completed',
        hoursSpent: 'Hours Spent',

        // Module Actions
        startModule: 'Start Module',
        continueModule: 'Continue Module',
        // viewModule: 'View Module', // This key already exists under Dashboard, keeping it here for context as per instruction
        progress: 'Progress',
        duration: 'Duration',
        // lessons: 'Lessons', // This key already exists under Dashboard, keeping it here for context as per instruction

        // Module Detail
        courseContent: 'Course Content',
        yourProgress: 'Your Progress',
        certificate: 'Certificate',
        downloadCertificate: 'Download Certificate',
        downloadOffline: 'Download Offline',
        downloaded: 'Downloaded',
        downloading: 'Downloading...',
        certificateLockMsg: 'Complete all lessons and pass the quiz to earn your certificate.',

        // Market Prices
        marketPrices: 'Market Prices',
        trendUp: 'Up',
        trendDown: 'Down',
        trendStable: 'Stable',
        perKg: 'per kg',

        // General
        search: 'Search',
        filter: 'Filter',
        download: 'Download',
        share: 'Share',

        // Data - Modules
        modulesData: [
            {
                id: 1,
                title: "Climate-Smart Agriculture Basics",
                description: "Introduction to sustainable farming practices.",
                longDescription: "Introduction to sustainable farming practices. Learn how to adapt to climate change and improve productivity.",
                duration: "2h 30m",
                lessonsCount: 5,
                thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
                lessons: [
                    { id: 1, title: "Introduction to CSA", type: "VIDEO", duration: "10:00", completed: true },
                    { id: 2, title: "Understanding Climate Change", type: "VIDEO", duration: "15:00", completed: true },
                    { id: 3, title: "Soil Management Practices", type: "TEXT", duration: "5 min read", completed: false },
                    { id: 4, title: "Water Management", type: "VIDEO", duration: "12:00", completed: false },
                    { id: 5, title: "Module Quiz", type: "QUIZ", duration: "20 min", completed: false },
                ]
            },
            {
                id: 2,
                title: "Soil Health Management",
                description: "Techniques for maintaining and improving soil fertility.",
                longDescription: "Comprehensive guide on soil testing, composting, and erosion control.",
                duration: "3h 15m",
                lessonsCount: 8,
                thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
                lessons: []
            },
            {
                id: 3,
                title: "Water Conservation",
                description: "Efficient water usage and irrigation methods.",
                longDescription: "Learn about drip irrigation, mulching, and rainwater harvesting.",
                duration: "1h 45m",
                lessonsCount: 4,
                thumbnail: "https://images.pexels.com/photos/30224434/pexels-photo-30224434.jpeg?auto=compress&cs=tinysrgb&w=800",
                lessons: []
            },
            {
                id: 4,
                title: "Pest and Disease Control",
                description: "Integrated pest management strategies.",
                longDescription: "Identify common pests and diseases and learn organic control methods.",
                duration: "2h 00m",
                lessonsCount: 6,
                thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
                lessons: []
            },
            {
                id: 5,
                title: "Food and Nutrition",
                description: "Nutritional value of crops and food security practices.",
                longDescription: "Understanding balanced diets and the nutritional importance of indigenous crops.",
                duration: "2h 30m",
                lessonsCount: 7,
                thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
                lessons: []
            },
        ],

        // Certificates Page
        myCertificates: 'My Certificates',
        viewCertificates: 'View and download your earned certificates',
        earnedCertificates: 'Earned Certificates',
        inProgressCertificates: 'In Progress',
        score: 'Score',
        downloadCertificateBtn: 'Download Certificate',
        shareBtn: 'Share',
        completeModuleMsg: 'Complete module and score 80% to earn certificate',
    },
    sw: {
        // Navigation
        dashboard: 'Dashibodi',
        modules: 'Moduli',
        certificates: 'Vyeti',
        coach: 'Kocha',
        admin: 'Msimamizi',
        notifications: 'Arifa',
        profile: 'Wasifu Wangu',
        settings: 'Mipangilio',
        logout: 'Ondoka',

        // Dashboard
        welcome: 'Karibu tena',
        continueLearning: 'Endelea Kujifunza',
        viewModule: 'Angalia Moduli',
        lessons: 'Masomo',
        completed: 'Imekamilika',
        inProgress: 'Inaendelea',

        // Dashboard Stats
        modulesEnrolled: 'Moduli Ulizojiunga',
        modulesCompleted: 'Moduli Zilizokamilika',
        hoursSpent: 'Muda Uliotumika',

        // Module Actions
        startModule: 'Anza Moduli',
        continueModule: 'Endelea na Moduli',
        progress: 'Maendeleo',
        duration: 'Muda',

        // Module Detail
        courseContent: 'Maudhui ya Kozi',
        yourProgress: 'Maendeleo Yako',
        certificate: 'Cheti',
        downloadCertificate: 'Pakua Cheti',
        downloadOffline: 'Pakua kwa Matumizi ya Nje ya Mtandao',
        downloaded: 'Imepakuliwa',
        downloading: 'Inapakua...',
        certificateLockMsg: 'Kamilisha masomo yote na ufaulu chemsha bongo ili kupata cheti chako.',

        // Market Prices
        marketPrices: 'Bei za Soko',
        trendUp: 'Juu',
        trendDown: 'Chini',
        trendStable: 'Imetulia',
        perKg: 'kwa kg',

        // General
        search: 'Tafuta',
        filter: 'Chuja',
        download: 'Pakua',
        share: 'Shiriki',

        // Data - Modules
        modulesData: [
            {
                id: 1,
                title: "Misingi ya Kilimo Hifadhi",
                description: "Utangulizi wa kilimo endelevu.",
                longDescription: "Utangulizi wa kilimo endelevu. Jifunze jinsi ya kukabiliana na mabadiliko ya tabianchi na kuongeza uzalishaji.",
                duration: "Saa 2 na dk 30",
                lessonsCount: 5,
                thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
                lessons: [
                    { id: 1, title: "Utangulizi wa Kilimo Hifadhi", type: "VIDEO", duration: "10:00", completed: true },
                    { id: 2, title: "Kuelewa Mabadiliko ya Tabianchi", type: "VIDEO", duration: "15:00", completed: true },
                    { id: 3, title: "Mbinu za Kutunza Udongo", type: "TEXT", duration: "Dak 5 kusoma", completed: false },
                    { id: 4, title: "Usimamizi wa Maji", type: "VIDEO", duration: "12:00", completed: false },
                    { id: 5, title: "Chemsha Bongo ya Moduli", type: "QUIZ", duration: "Dak 20", completed: false },
                ]
            },
            {
                id: 2,
                title: "Usimamizi wa Afya ya Udongo",
                description: "Mbinu za kutunza na kuboresha rutuba ya udongo.",
                longDescription: "Mwongozo kamili wa kupima udongo, kutengeneza mbolea, na kuzuia mmomonyoko.",
                duration: "Saa 3 na dk 15",
                lessonsCount: 8,
                thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&q=80",
                lessons: []
            },
            {
                id: 3,
                title: "Uhifadhi wa Maji",
                description: "Matumizi bora ya maji na mbinu za umwagiliaji.",
                longDescription: "Jifunze kuhusu umwagiliaji wa matone, uwekaji wa matandazo, na uvunaji wa maji ya mvua.",
                duration: "1h 45m",
                lessonsCount: 4,
                thumbnail: "https://images.pexels.com/photos/30224434/pexels-photo-30224434.jpeg?auto=compress&cs=tinysrgb&w=800",
                lessons: []
            },
            {
                id: 4,
                title: "Udhibiti wa Wadudu na Magonjwa",
                description: "Mbinu jumuishi za kudhibiti wadudu.",
                longDescription: "Tambua wadudu na magonjwa ya kawaida na jifunze mbinu za asili za kuwadhibiti.",
                duration: "Saa 2 na dk 00",
                lessonsCount: 6,
                thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
                lessons: []
            },
            {
                id: 5,
                title: "Chakula na Lishe",
                description: "Thamani ya lishe ya mazao na usalama wa chakula.",
                longDescription: "Kuelewa mlo kamili na umuhimu wa lishe wa mazao ya asili.",
                duration: "Saa 2 na dk 30",
                lessonsCount: 7,
                thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
                lessons: []
            },
        ],

        // Certificates Page
        myCertificates: 'Vyeti Vyangu',
        viewCertificates: 'Angalia na upakue vyeti ulivyopata',
        earnedCertificates: 'Vyeti Ulivyopata',
        inProgressCertificates: 'Inaendelea',
        score: 'Alama',
        downloadCertificateBtn: 'Pakua Cheti',
        shareBtn: 'Shiriki',
        completeModuleMsg: 'Kamilisha moduli na upate alama 80% ili kupata cheti',
    }
};
