import { Outlet } from 'react-router-dom';
import { Header } from '../../pages/web/sections/Header';
import { Footer } from '../../pages/web/sections/Footer';

export const PublicLayout = () => {
  return (
    <div>
      <Header />
      <div className="overflow-x-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
