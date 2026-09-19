import { Clock, Mail, Phone } from 'lucide-react';
import { contactInfo } from '../../data/contact.js';

export default function TopBar() {
  return (
    <div className="top-bar" aria-label="Company contact information">
      <div className="container top-bar__inner">
        <div className="top-bar__item top-bar__item--hours">
          <Clock size={16} aria-hidden="true" />
          <span>{contactInfo.openingTimes}</span>
        </div>
        <div className="top-bar__links">
          <a className="top-bar__item" href={`mailto:${contactInfo.email}`}>
            <Mail size={16} aria-hidden="true" />
            <span>{contactInfo.email}</span>
          </a>
          <a className="top-bar__item" href={`tel:${contactInfo.phoneTel}`}>
            <Phone size={16} aria-hidden="true" />
            <span>{contactInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
