import { Outlet } from "react-router-dom"

function Layout(){
    return (
        <>
            <div>Layout container</div>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;