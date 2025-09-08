import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import OurFund from "./pages/OurFund";
import Sponsor from "./pages/Sponsor";
import BecomeSponsor from "./pages/BecomeSponsor";
import ForSchoolEducation from "./pages/ForSchoolEducation";
import OurPartner from "./pages/OurPartner";
import SemiDeciduousForest from "./pages/SemiDeciduousForest";
import BambooForest from "./pages/BambooForest";
import Wetland from "./pages/Wetland";
import MixedHardwood from "./pages/MixedHardwood";
import News from "./pages/News";
import OurProject from "./pages/OurProject";
import OurGame from "./pages/OurGame";
import AuthWrapper from "./features/auth/AuthWrapper";
import '../Pally_Complete/Fonts/WEB/css/pally.css';

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
      <Route path="/semi-deciduous-forest" element={<SemiDeciduousForest />} />
      <Route path="/bamboo-forest" element={<BambooForest />} />
      <Route path="/wetland" element={<Wetland />} />
      <Route path="/mixed-hardwood" element={<MixedHardwood />} />
      <Route path="/news" element={<News />} />
      <Route path="/our-project" element={<OurProject />} />
      <Route path="/our-game" element={<OurGame />} />
      <Route path="/login" element={<AuthWrapper />} />
      <Route path="/register" element={<AuthWrapper />} />
      <Route path="/forgot-password" element={<AuthWrapper />} />
      <Route path="/change-password" element={<AuthWrapper />} />
      <Route path="/change-password-success" element={<AuthWrapper />} />
    </Routes>
  );
}

export default App;
