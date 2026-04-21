import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import VoterForm from "./pages/VoterForm";
import AdharForm from "./pages/AadhaarForm.jsx"
import DrivingForm from "./pages/DrivingForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   
    children: [
      { index: true, element: <Home /> },   
      { path: "voterform", element: <VoterForm /> },
      { path: "drivingform", element: <DrivingForm /> },
      { path: "adharform", element: <AdharForm/>}
    ],
  },
]);   

export default router;