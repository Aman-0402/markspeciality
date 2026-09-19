import CTASection from '../components/common/CTASection.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import SEO from '../components/common/SEO.jsx';
import AboutHero from '../components/about/AboutHero.jsx';
import ExpandableSection from '../components/about/ExpandableSection.jsx';
import { aboutSections, companyOverview, companyStrengths, coreValues } from '../data/about.js';
import { buildBreadcrumbSchema } from '../utils/structuredData.js';

const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'About Us' }];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Mark Speciality"
        description="Learn about Mark Speciality India Pvt. Ltd.'s vision, mission, core values, manufacturing capability, and commitment to quality."
        path="/about"
        jsonLd={buildBreadcrumbSchema(breadcrumbItems)}
      />
      <AboutHero breadcrumbItems={breadcrumbItems} />

      <section className="section section--surface">
        <div className="container about-overview">
          <div className="about-overview__card">
            <h2>Who We Are</h2>
            <p>{companyOverview.intro}</p>
          </div>
          <div className="about-overview__card">
            <h2>Our Vision</h2>
            <p>{companyOverview.vision}</p>
          </div>
          <div className="about-overview__card">
            <h2>Our Mission</h2>
            <p>{companyOverview.mission}</p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            copy="Four principles guide how we formulate products, serve customers, and grow the business."
            align="center"
          />
          <div className="about-values-grid">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <div className="value-card card" key={value.id}>
                  <div className="value-card__icon" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="Company Strengths"
            title="Why Businesses Rely On Us"
            align="center"
          />
          <div className="grid about-strengths">
            {companyStrengths.map((strength) => (
              <div className="about-strengths__item card" key={strength.id}>
                <h3>{strength.title}</h3>
                <p>{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading
            eyebrow="Deeper Look"
            title="Capability, Quality & Growth"
            copy="Explore how we manufacture, innovate, and support customers over the long term."
            align="center"
          />
          <div className="about-sections-grid">
            {aboutSections.map((section, index) => (
              <ExpandableSection section={section} index={index} key={section.id} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Partner With Us"
        title="Talk To Our Team About Your Lubrication Needs"
        copy="Whether you need a single product recommendation or a long-term supply partnership, our specialists are ready to help."
      />
    </>
  );
}
