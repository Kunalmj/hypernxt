import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ScholarshipPortal from "./pages/ScholarshipPortal";
import StartupMSMEPortal from "./pages/StartupMSMEPortal";
import AgriculturePortal from "./pages/AgriculturePortal";
import WomenPortal from "./pages/WomenPortal";
import ResearchPortal from "./pages/ResearchPortal";
import TenderPortal from "./pages/TenderPortal";

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
    ],
  },
]);   

export default router;