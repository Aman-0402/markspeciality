import { Clock, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactInfo, socialLinks } from '../../data/contact.js';
import { mainNavigation, productLinks } from '../../data/navigation.js';
import InstagramIcon from '../common/icons/InstagramIcon.jsx';
import YoutubeIcon from '../common/icons/YoutubeIcon.jsx';

const socialIcons = {
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link className="brand-mark brand-mark--light" to="/" aria-label="Mark Speciality home">
            <span className="brand-mark__symbol">MS</span>
            <span className="brand-mark__copy">
              <span className="brand-mark__text">Mark Speciality</span>
              <span className="brand-mark__subtext">India Pvt. Ltd.</span>
            </span>
          </Link>
          <p className="site-footer__description">
            Trusted manufacturer of automotive, industrial, and specialty
            lubricant solutions engineered for reliability, performance, and
            long-term equipment protection.
          </p>
          <ul className="site-footer__social">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    className={`site-footer__social-link site-footer__social-link--${social.icon}`}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon width={19} height={19} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="site-footer__column">
          <h3 className="site-footer__heading">Quick Links</h3>
          <ul className="site-footer__links">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <h3 className="site-footer__heading">Products</h3>
          <ul className="site-footer__links">
            {productLinks.map((product) => (
              <li key={product.href}>
                <Link to={product.href}>{product.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__column">
          <h3 className="site-footer__heading">Contact Us</h3>
          <ul className="site-footer__contact">
            <li>
              <Clock size={17} aria-hidden="true" />
              <span>{contactInfo.openingTimes}</span>
            </li>
            <li>
              <Phone size={17} aria-hidden="true" />
              <a href={`tel:${contactInfo.phoneTel}`}>{contactInfo.phone}</a>
            </li>
            <li>
              <Mail size={17} aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>&copy; {year} Mark Speciality India Pvt. Ltd. All rights reserved.</p>
          <div className="site-footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
