import { useEffect, useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function MobileMenu({
  isOpen,
  navigation,
  onClose,
  productsActive,
}) {
  const [productsOpen, setProductsOpen] = useState(productsActive);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-nav-open');
    } else {
      document.body.classList.remove('mobile-nav-open');
    }

    return () => {
      document.body.classList.remove('mobile-nav-open');
    };
  }, [isOpen, productsActive]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Main menu">
      <button className="mobile-nav__backdrop" type="button" onClick={onClose}>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="mobile-nav__panel">
        <div className="mobile-nav__header">
          <span className="brand-mark brand-mark--compact">
            <span className="brand-mark__symbol">MS</span>
            <span className="brand-mark__text">Mark Speciality</span>
          </span>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close menu">
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-nav__links" aria-label="Mobile navigation">
          {navigation.map((item) =>
            item.children ? (
              <div className="mobile-nav__group" key={item.href}>
                <button
                  className={`mobile-nav__link mobile-nav__accordion ${
                    productsActive ? 'is-active' : ''
                  }`}
                  type="button"
                  onClick={() => setProductsOpen((current) => !current)}
                  aria-expanded={productsOpen}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className="mobile-nav__chevron"
                    size={18}
                    aria-hidden="true"
                  />
                </button>
                {productsOpen ? (
                  <div className="mobile-nav__children">
                    <NavLink
                      className={({ isActive }) =>
                        `mobile-nav__child ${isActive ? 'is-active' : ''}`
                      }
                      to={item.href}
                      onClick={onClose}
                      end
                    >
                      Products Overview
                    </NavLink>
                    {item.children.map((child) => (
                      <NavLink
                        className={({ isActive }) =>
                          `mobile-nav__child ${isActive ? 'is-active' : ''}`
                        }
                        to={child.href}
                        onClick={onClose}
                        key={child.href}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  `mobile-nav__link ${isActive ? 'is-active' : ''}`
                }
                to={item.href}
                onClick={onClose}
                key={item.href}
                end={item.href === '/'}
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </div>
  );
}
