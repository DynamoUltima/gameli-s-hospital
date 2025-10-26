import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import OnlineConsultation from './components/OnlineConsultation';
import HospitalVisit from './components/HospitalVisit';
import HomeVisit from './components/HomeVisit';
import DoctorDashboard from './components/DoctorDashboard';
import AdminDashboard from './components/AdminDashboard';
import ContactSupport from './components/ContactSupport';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/online-consultation" element={<OnlineConsultation />} />
        <Route path="/hospital-visit" element={<HospitalVisit />} />
        <Route path="/home-visit" element={<HomeVisit />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/contact" element={<ContactSupport />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
