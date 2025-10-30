import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import OurFund from "./pages/OurFund";
import Sponsor from "./pages/Sponsor";
import BecomeSponsor from "./pages/BecomeSponsor";
import ForSchoolEducation from "./pages/ForSchoolEducation";
import OurPartner from "./pages/OurPartner";
import Community from "./pages/Community";
import PostDetail from "./pages/PostDetail";
import ForestDetail from "./pages/ForestDetail";
import News from "./pages/News";
import OurProject from "./pages/OurProject";
import OurGame from "./pages/OurGame";
import AuthWrapper from "./features/auth/AuthWrapper";
import AdminDashboard from "./admin/pages/AdminDashboard";
import UserManagement from "./admin/pages/UserManagement";
import CSRManagement from "./admin/pages/CSRManagement";
import FinancialReports from "./admin/pages/FinancialReports";
import CustomerSupport from "./admin/pages/CustomerSupport";
import Logs from "./admin/pages/Logs";
import MessageDetail from "./admin/pages/MessageDetail";
// removed Pally font import; Montserrat is now global via src/index.css

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/our-fund" element={<OurFund />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/become-sponsor" element={<BecomeSponsor />} />
      <Route path="/for-school-education" element={<ForSchoolEducation />} />
      <Route path="/our-partner" element={<OurPartner />} />
      <Route path="/community" element={<Community />} />
      <Route path="/post/:postId" element={<PostDetail />} />
      <Route path="/semi-deciduous-forest" element={<ForestDetail />} />
      <Route path="/bamboo-forest" element={<ForestDetail />} />
      <Route path="/wetland" element={<ForestDetail />} />
      <Route path="/mixed-hardwood" element={<ForestDetail />} />
      <Route path="/forest/:slug" element={<ForestDetail />} />
      <Route path="/news" element={<News />} />
      <Route path="/our-project" element={<OurProject />} />
      <Route path="/our-game" element={<OurGame />} />
      <Route path="/login" element={<AuthWrapper />} />
      <Route path="/register" element={<AuthWrapper />} />
      <Route path="/forgot-password" element={<AuthWrapper />} />
      <Route path="/change-password" element={<AuthWrapper />} />
      <Route path="/change-password-success" element={<AuthWrapper />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/csr" element={<CSRManagement />} />
      <Route path="/admin/financial" element={<FinancialReports />} />
      <Route path="/admin/support" element={<CustomerSupport />} />
      <Route path="/admin/message/:type/:id" element={<MessageDetail />} />
      <Route path="/admin/logs" element={<Logs />} />
    </Routes>
  );
}

export default App;
