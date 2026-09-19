import { Outlet } from 'react-router-dom';
import BackToTop from '../common/BackToTop.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function MainLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
