import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Services from "./pages/Services";
import AllServices from "./pages/AllServices";
import BrowseAllServices from "./pages/BrowseAllServices";
import AIHelper from "./pages/AIHelper";
import ContactSupport from "./pages/ContactSupport";
import ScholarshipAssistance from "./pages/help/ScholarshipAssistance";
import StartupHelp from "./pages/help/StartupHelp";
import AgricultureHelp from "./pages/help/AgricultureHelp";
import StatusTracking from "./pages/help/StatusTracking";
import CorrectionServices from "./pages/help/CorrectionServices";
import ExpertSupport from "./pages/help/ExpertSupport";
import ScholarshipPortal from "./pages/ScholarshipPortal";
import ScholarshipResults from "./pages/ScholarshipResults";
import StartupMSMEPortal from "./pages/StartupMSMEPortal";
import StartupGrantResults from "./pages/StartupGrantResults";
import AgriculturePortal from "./pages/AgriculturePortal";
import AgricultureResults from "./pages/AgricultureResults";
import WomenPortal from "./pages/WomenPortal";
import WomenResults from "./pages/WomenResults";
import ResearchPortal from "./pages/ResearchPortal";
import ResearchResults from "./pages/ResearchResults";
import TenderPortal from "./pages/TenderPortal";
import TenderResults from "./pages/TenderResults";
import CitizenSchemesPortal from "./pages/CitizenSchemesPortal";
import BankingSchemes from "./pages/BankingSchemes";
import HealthSchemes from "./pages/HealthSchemes";
import HousingSchemes from "./pages/HousingSchemes";
import SafetySchemes from "./pages/SafetySchemes";
import ScienceSchemes from "./pages/ScienceSchemes";
import SkillsSchemes from "./pages/SkillsSchemes";
import SocialSchemes from "./pages/SocialSchemes";
import SportsSchemes from "./pages/SportsSchemes";
import TransportSchemes from "./pages/TransportSchemes";
import TravelSchemes from "./pages/TravelSchemes";
import UtilitySchemes from "./pages/UtilitySchemes";
import WomenChildSchemes from "./pages/WomenChildSchemes";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "all-services", element: <AllServices /> },
      { path: "browse-all", element: <BrowseAllServices /> },
      { path: "ai-helper", element: <AIHelper /> },
      { path: "contact", element: <ContactSupport /> },
      { path: "help/scholarship", element: <ScholarshipAssistance /> },
      { path: "help/msme", element: <StartupHelp /> },
      { path: "help/agriculture", element: <AgricultureHelp /> },
      { path: "help/status", element: <StatusTracking /> },
      { path: "help/correction", element: <CorrectionServices /> },
      { path: "help/expert", element: <ExpertSupport /> },
      { path: "scholarships", element: <ScholarshipPortal /> },
      { path: "scholarship-results", element: <ScholarshipResults /> },
      { path: "startup-msme", element: <StartupMSMEPortal /> },
      { path: "startup-grant-results", element: <StartupGrantResults /> },
      { path: "agriculture", element: <AgriculturePortal /> },
      { path: "agri-results", element: <AgricultureResults /> },
      { path: "women-programs", element: <WomenPortal /> },
      { path: "women-results", element: <WomenResults /> },
      { path: "research-grants", element: <ResearchPortal /> },
      { path: "research-results", element: <ResearchResults /> },
      { path: "tenders", element: <TenderPortal /> },
      { path: "tender-results", element: <TenderResults /> },
      { path: "citizen-schemes", element: <CitizenSchemesPortal /> },
      { path: "citizen-schemes/banking", element: <BankingSchemes /> },
      { path: "citizen-schemes/health", element: <HealthSchemes /> },
      { path: "citizen-schemes/housing", element: <HousingSchemes /> },
      { path: "citizen-schemes/safety", element: <SafetySchemes /> },
      { path: "citizen-schemes/science", element: <ScienceSchemes /> },
      { path: "citizen-schemes/skills", element: <SkillsSchemes /> },
      { path: "citizen-schemes/social", element: <SocialSchemes /> },
      { path: "citizen-schemes/sports", element: <SportsSchemes /> },
      { path: "citizen-schemes/transport", element: <TransportSchemes /> },
      { path: "citizen-schemes/travel", element: <TravelSchemes /> },
      { path: "citizen-schemes/utility", element: <UtilitySchemes /> },
      { path: "citizen-schemes/women", element: <WomenChildSchemes /> },
    ],
  },
]);

export default router;