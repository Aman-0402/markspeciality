import SEO from '../components/common/SEO.jsx';
import Breadcrumb from '../components/common/Breadcrumb.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import CTASection from '../components/common/CTASection.jsx';
import BrandCard from '../components/brands/BrandCard.jsx';
import { brands } from '../data/brands.js';
import { buildBreadcrumbSchema } from '../utils/structuredData.js';

const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Our Brands' }];

export default function Brands() {
  return (
    <>
      <SEO
        title="Our Brands | Mark Speciality"
        description="Explore Mark Speciality's dedicated brand lines for automotive, industrial, grease, and specialty lubricant applications."
        path="/brands"
        jsonLd={buildBreadcrumbSchema(breadcrumbItems)}
      />
      <section className="page-section page-section--hero">
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          <p className="eyebrow">Our Brands</p>
          <h1>Dedicated Brand Lines For Every Application</h1>
          <p className="lead">
            Each brand line focuses on a specific category of lubrication
            needs, backed by the same quality standards and technical
            support across the Mark Speciality portfolio.
          </p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="Brand Portfolio"
            title="Four Brands, One Quality Standard"
            copy="Browse each brand's focus area and jump straight to its product category."
            align="center"
          />
          <div className="brand-grid">
            {brands.map((brand, index) => (
              <BrandCard brand={brand} index={index} key={brand.id} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Have Questions?"
        title="Talk To Us About Any Brand Line"
        copy="Our specialists can help you match the right brand and product to your equipment and operating conditions."
      />
    </>
  );
}
