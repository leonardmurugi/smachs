import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import LearnerDashboard from '@/pages/dashboard/LearnerDashboard';
import ModuleList from '@/pages/modules/ModuleList';
import ModuleDetail from '@/pages/modules/ModuleDetail';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import CoachDashboard from '@/pages/dashboard/CoachDashboard';
import AdminDashboard from '@/pages/dashboard/AdminDashboard';
import NotificationsPage from '@/pages/notifications/NotificationsPage';
import ProfilePage from '@/pages/profile/ProfilePage';
import CertificatesPage from '@/pages/certificates/CertificatesPage';

import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<LearnerDashboard />} />
              <Route path="modules" element={<ModuleList />} />
              <Route path="modules/:id" element={<ModuleDetail />} />
              <Route path="notifications" element={<NotificationsPage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="certificates" element={<CertificatesPage />} />
              <Route path="coach" element={<CoachDashboard />} />
              <Route path="admin" element={<AdminDashboard />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
