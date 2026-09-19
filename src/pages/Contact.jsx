import { Clock, Headset, Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import Breadcrumb from '../components/common/Breadcrumb.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import ContactForm from '../components/contact/ContactForm.jsx';
import { contactInfo } from '../data/contact.js';

const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Contact Us' }];

const infoCards = [
  {
    icon: Clock,
    title: 'Opening Times',
    lines: [contactInfo.openingTimes],
  },
  {
    icon: Headset,
    title: 'Customer Support',
    lines: [contactInfo.supportPhone],
    href: `tel:${contactInfo.supportPhoneTel}`,
  },
  {
    icon: MapPin,
    title: 'Corporate Address',
    lines: [contactInfo.corporateAddress],
  },
  {
    icon: MapPin,
    title: 'Factory Address',
    lines: [contactInfo.factoryAddress],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: [contactInfo.phone],
    href: `tel:${contactInfo.phoneTel}`,
  },
  {
    icon: Mail,
    title: 'Email',
    lines: [contactInfo.email],
    href: `mailto:${contactInfo.email}`,
  },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | Mark Speciality"
        description="Get in touch with Mark Speciality for product enquiries, technical support, or quotation requests."
        path="/contact"
      />
      <section className="page-section page-section--hero">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          <p className="eyebrow">Get In Touch With Us</p>
          <h1>We're Here to Help With Your Lubrication Needs</h1>
          <p className="lead">
            Reach out for product recommendations, technical guidance, or a
            quotation. Our team typically responds within one business day.
          </p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container contact-layout">
          <div className="contact-info-grid">
            {infoCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <>
                  <div className="contact-info-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <h3>{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </>
              );

              return card.href ? (
                <a className="contact-info-card card" href={card.href} key={card.title}>
                  {content}
                </a>
              ) : (
                <div className="contact-info-card card" key={card.title}>
                  {content}
                </div>
              );
            })}
          </div>

          <div className="contact-form-panel card">
            <SectionHeading
              eyebrow="Send a Message"
              title="Tell Us About Your Requirement"
              copy="Fields marked with an asterisk are required."
            />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
