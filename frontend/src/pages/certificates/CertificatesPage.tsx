import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Download, Award, Calendar, Share2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CertificatesPage: React.FC = () => {
  const { t, tm } = useLanguage();

  // Use translated module titles for certificates
  const certificates = [
    {
      id: 1,
      title: tm.modulesData[0].title, // Climate-Smart Agriculture Basics
      issuedDate: 'November 15, 2023',
      score: '92%',
      certificateUrl: '/certificates/climate-smart-agriculture.pdf',
      thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80',
    },
    {
      id: 2,
      title: tm.modulesData[3].title, // Pest and Disease Control
      issuedDate: 'October 28, 2023',
      score: '88%',
      certificateUrl: '/certificates/pest-control.pdf',
      thumbnail: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=400&q=80',
    },
  ];

  const inProgress = [
    {
      id: 3,
      title: tm.modulesData[1].title, // Soil Health Management
      progress: 75,
      requiredScore: 80,
    },
    {
      id: 4,
      title: tm.modulesData[2].title, // Water Conservation
      progress: 45,
      requiredScore: 80,
    },
  ];

  const handleDownload = (cert: typeof certificates[0]) => {
    // In production, this would download the actual PDF
    alert(`Downloading certificate: ${cert.title}`);
    // Create a mock download
    const link = document.createElement('a');
    link.href = cert.certificateUrl;
    link.download = `${cert.title.replace(/\s+/g, '-')}-Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (cert: typeof certificates[0]) => {
    if (navigator.share) {
      navigator.share({
        title: `Certificate: ${cert.title}`,
        text: `I earned a certificate in ${cert.title} from SMACHS Academy!`,
        url: window.location.href,
      });
    } else {
      alert('Sharing feature not available on this browser');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{t('myCertificates')}</h1>
        <p className="text-muted-foreground">{t('viewCertificates')}</p>
      </div>

      {/* Earned Certificates */}
      <div>
        <h2 className="text-xl font-semibold mb-4">{t('earnedCertificates')} ({certificates.length})</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((cert) => (
            <Card key={cert.id} className="overflow-hidden">
              <div className="aspect-video w-full bg-muted relative">
                <img
                  src={cert.thumbnail}
                  alt={cert.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg leading-tight mb-2 h-14 line-clamp-2" title={cert.title}>
                  {cert.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {cert.issuedDate}
                  </div>
                  <div className="font-medium text-green-600">
                    {t('score')}: {cert.score}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  className="w-full"
                  onClick={() => handleDownload(cert)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  {t('downloadCertificateBtn')}
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleShare(cert)}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  {t('shareBtn')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* In Progress */}
      <div>
        <h2 className="text-xl font-semibold mb-4">{t('inProgressCertificates')}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {inProgress.map((module) => (
            <Card key={module.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{module.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('completeModuleMsg')}
                    </p>
                  </div>
                  <Award className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="space-y-2">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
