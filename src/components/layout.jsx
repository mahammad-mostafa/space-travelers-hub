import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Layout = () => (
  <>
    <Header />
    <main>
      <div className="page">
        <Outlet />
      </div>
    </main>
    <Footer />
  </>
);

export default Layout;
