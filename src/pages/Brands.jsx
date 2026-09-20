import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import CTASection from '../components/common/CTASection.jsx';
import PageHeroMedia from '../components/common/PageHeroMedia.jsx';
import BrandCard from '../components/brands/BrandCard.jsx';
import { brandFamilies, brands } from '../data/brands.js';
import { buildBreadcrumbSchema } from '../utils/structuredData.js';
import heroImage from '../assets/images/brand-vorstab-metal.png';
import heroImageWebp from '../assets/images/brand-vorstab-metal.webp';

const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Our Brands' }];

export default function Brands() {
  return (
    <>
      <SEO
        title="Our Brands | Mark Speciality"
        description="Explore Vorstab and Mark Speciality's dedicated industrial lubricant and metalworking fluid brand lines."
        path="/brands"
        jsonLd={buildBreadcrumbSchema(breadcrumbItems)}
      />
      <section className="page-section page-section--hero">
        <PageHeroMedia image={heroImage} imageWebp={heroImageWebp} />
        <div className="container">
          <p className="eyebrow">Our Brands</p>
          <h1>Two Brand Families, Four Specialized Lines</h1>
          <p className="lead">
            Vorstab and Mark Speciality each cover industrial lubrication and
            metalworking fluids, backed by the same manufacturing and
            technical support standards across the portfolio.
          </p>
        </div>
      </section>

      {brandFamilies.map((family, familyIndex) => {
        const familyBrands = brands.filter((brand) => brand.family === family.id);

        return (
          <section
            className={`section brand-family ${familyIndex % 2 === 0 ? 'section--surface' : 'section--muted'}`}
            style={{ '--brand-accent': family.accentColor }}
            key={family.id}
          >
            <div className="container">
              <SectionHeading
                eyebrow={family.tagline}
                title={family.name}
                align="center"
              />
              <div className="brand-showcase-grid">
                {familyBrands.map((brand, index) => (
                  <BrandCard brand={brand} index={index} key={brand.id} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        eyebrow="Have Questions?"
        title="Talk To Us About Any Brand Line"
        copy="Our specialists can help you match the right brand and product to your equipment and operating conditions."
      />
    </>
  );
}
