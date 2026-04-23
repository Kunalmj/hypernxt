import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ScholarshipPortal from "./pages/ScholarshipPortal";
import StartupMSMEPortal from "./pages/StartupMSMEPortal";
import AgriculturePortal from "./pages/AgriculturePortal";
import WomenPortal from "./pages/WomenPortal";
import ResearchPortal from "./pages/ResearchPortal";
import TenderPortal from "./pages/TenderPortal";
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
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "scholarships", element: <ScholarshipPortal /> },
      { path: "startup-msme", element: <StartupMSMEPortal /> },
      { path: "agriculture", element: <AgriculturePortal /> },
      { path: "women-programs", element: <WomenPortal /> },
      { path: "research-grants", element: <ResearchPortal /> },
      { path: "tenders", element: <TenderPortal /> },
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