import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MenuSidebar from '../../components/MenuSidebar';
import NavBar from '../../components/NavBar';
import Sidebar from '../../components/Sidebar';
import { useWebSockets } from '../../hooks/useWebSockets';

export const ProtectedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useWebSockets();

  return (
    <div className="h-screen">
      <div className="h-full">
        {/* MOBILE SIDEBAR MENU */}
        <MenuSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={() => setSidebarOpen(true)}
          setSidebarClose={() => setSidebarOpen(false)}
        />

        {/* Static sidebar for desktop - not visible on smaller devices*/}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}

          <Sidebar />
        </div>

        <div className="lg:pl-72 h-full">
          {/* My note: Navigation Top Bar - start */}
          <NavBar setSidebarOpen={() => setSidebarOpen(true)} />

          {/* My note: CONTENT  - start */}
          <main className="py-4 h-[calc(100%-64px)]">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
