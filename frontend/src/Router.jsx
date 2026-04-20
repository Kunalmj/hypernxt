import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import VoterForm from "./pages/VoterForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/VoterIDForm", element: <VoterForm /> }
        ]
    }
])

export default router;