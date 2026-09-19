import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-placeholder-header">
        <div className="container site-placeholder-header__inner">
          <span className="site-logo">Mark Speciality</span>
          <span className="site-placeholder-header__note">
            Navigation arrives in Phase 3
          </span>
        </div>
      </header>
      <main id="main-content">
        <Outlet />
      </main>
    </div>
  );
}
