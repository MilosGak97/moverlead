import useAuth from "./hooks/useAuth.ts";
import {Navigate, Outlet} from "react-router-dom";
import MenuSidebar from "./app/components/MenuSidebar.tsx";
import Sidebar from "./app/components/Sidebar.tsx";
import NavBar from "./app/components/NavBar.tsx";
import {useState} from "react";

const App = () => {

    const [ sidebarOpen, setSidebarOpen] = useState(false)

    const {user} = useAuth();
    if (!user)
        return <Navigate to="/login"/>


    return (
        <>
            <div>

                {/* MOBILE SIDEBAR MENU */ }
                <MenuSidebar sidebarOpen={sidebarOpen} setSidebarOpen={() => setSidebarOpen(true)} setSidebarClose={() => setSidebarOpen(false)} />

                {/* Static sidebar for desktop - not visible on smaller devices*/}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}

                    <Sidebar />
                </div>

                <div className="lg:pl-72">
                    {/* My note: Navigation Top Bar - start */}
                    <NavBar setSidebarOpen={() => setSidebarOpen(true)} />

                    {/* My note: CONTENT  - start */}
                    <main className="py-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}
export default App;