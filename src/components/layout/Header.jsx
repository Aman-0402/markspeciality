import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, PhoneCall } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ButtonLink from '../common/ButtonLink.jsx';
import { mainNavigation } from '../../data/navigation.js';
import useScrollState from '../../hooks/useScrollState.js';
import MobileMenu from './MobileMenu.jsx';
import TopBar from './TopBar.jsx';

export default function Header() {
  const location = useLocation();
  const isScrolled = useScrollState(18);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    mobileMenuButtonRef.current?.focus();
  };
  const productsActive = location.pathname.startsWith('/products');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setProductsOpen(false);
        if (mobileOpen) {
          closeMobileMenu();
        }
      }
    };

    const handlePointerDown = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [mobileOpen]);

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`}>
      <TopBar />
      <div className="site-header__main">
        <div className="container site-header__inner">
          <Link className="brand-mark" to="/" aria-label="Mark Speciality home">
            <span className="brand-mark__symbol">MS</span>
            <span className="brand-mark__copy">
              <span className="brand-mark__text">Mark Speciality</span>
              <span className="brand-mark__subtext">India Pvt. Ltd.</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {mainNavigation.map((item) =>
              item.children ? (
                <div className="desktop-nav__dropdown" ref={dropdownRef} key={item.href}>
                  <button
                    className={`desktop-nav__link desktop-nav__link--button ${
                      productsActive ? 'is-active' : ''
                    }`}
                    type="button"
                    onClick={() => setProductsOpen((current) => !current)}
                    onMouseEnter={() => setProductsOpen(true)}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>
                  <div
                    className={`product-menu ${productsOpen ? 'is-open' : ''}`}
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <div className="product-menu__intro">
                      <span className="eyebrow">Product Range</span>
                      <p>
                        Explore lubricant categories engineered for vehicles,
                        machinery, and demanding industrial environments.
                      </p>
                      <Link to="/products" onClick={() => setProductsOpen(false)}>
                        View product overview
                      </Link>
                    </div>
                    <div className="product-menu__links">
                      {item.children.map((child) => (
                        <NavLink
                          className={({ isActive }) =>
                            `product-menu__link ${isActive ? 'is-active' : ''}`
                          }
                          to={child.href}
                          key={child.href}
                          onClick={() => setProductsOpen(false)}
                        >
                          <span>{child.label}</span>
                          <span>Learn more</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    `desktop-nav__link ${isActive ? 'is-active' : ''}`
                  }
                  to={item.href}
                  key={item.href}
                  end={item.href === '/'}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="site-header__actions">
            <ButtonLink className="site-header__cta" to="/contact">
              <PhoneCall size={17} aria-hidden="true" />
              <span>Request Quote</span>
            </ButtonLink>
            <button
              className="icon-button mobile-menu-button"
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              ref={mobileMenuButtonRef}
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <MobileMenu
        isOpen={mobileOpen}
        navigation={mainNavigation}
        onClose={closeMobileMenu}
        productsActive={productsActive}
      />
    </header>
  );
}
