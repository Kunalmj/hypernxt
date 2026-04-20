import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import VoterForm from "./pages/VoterForm";
import AadhaarForm from "./pages/AadhaarForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/VoterForm", element: <VoterForm /> }
        ]
    }
])

export default router;