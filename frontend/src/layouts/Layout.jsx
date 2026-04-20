import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer.jsx"
function Layout(){
    return (
        <>
            <Navbar />
            <main className="container py-3">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout