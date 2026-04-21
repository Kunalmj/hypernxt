import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import VoterForm from "./pages/VoterForm";
import DrivingForm from "./pages/DrivingForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   
    children: [
      { index: true, element: <Home /> },   
      { path: "VoterForm", element: <VoterForm /> },
      { path: "DrivingForm", element: <DrivingForm /> },
    ],
  },
]);

export default router;