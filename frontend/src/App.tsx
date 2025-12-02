import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';
import LearnerDashboard from '@/pages/dashboard/LearnerDashboard';
import ModuleList from '@/pages/modules/ModuleList';
import ModuleDetail from '@/pages/modules/ModuleDetail';
import LoginPage from '@/pages/auth/LoginPage';
import RegisterPage from '@/pages/auth/RegisterPage';
import CoachDashboard from '@/pages/dashboard/CoachDashboard';
import AdminDashboard from '@/pages/dashboard/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<LearnerDashboard />} />
          <Route path="modules" element={<ModuleList />} />
          <Route path="modules/:id" element={<ModuleDetail />} />
          <Route path="certificates" element={<div>Certificates Page</div>} />
          <Route path="coach" element={<CoachDashboard />} />
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
