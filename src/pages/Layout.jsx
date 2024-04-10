import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar.jsx";

function Layout(){
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;