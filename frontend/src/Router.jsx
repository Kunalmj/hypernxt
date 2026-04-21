import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import VoterForm from "./pages/VoterForm";
import DrivingForm from "./pages/DrivingForm";
import AadharForm from "./pages/AadharForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   
    children: [
      { index: true, element: <Home /> },   
      { path: "voterform", element: <VoterForm /> },
      { path: "aadharform", element: <AadharForm/>},
      { path: "drivingform", element: <DrivingForm /> },
      
    ],
  },
]);   

export default router;