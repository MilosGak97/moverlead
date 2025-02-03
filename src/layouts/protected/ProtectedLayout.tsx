import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MenuSidebar from '../../routing/app/components/MenuSidebar';
import NavBar from '../../routing/app/components/NavBar';
import Sidebar from '../../routing/app/components/Sidebar';

export const ProtectedLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
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
  );
};
