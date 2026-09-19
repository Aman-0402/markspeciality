import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import CTASection from '../components/common/CTASection.jsx';
import ProductGrid from '../components/products/ProductGrid.jsx';
import { productCategories } from '../data/products.js';
import { buildBreadcrumbSchema } from '../utils/structuredData.js';

const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Products' }];

export default function Products() {
  return (
    <>
      <SEO
        title="Products | Mark Speciality"
        description="Browse Mark Speciality's automotive, industrial, grease, and specialty lubricant product categories."
        path="/products"
        jsonLd={buildBreadcrumbSchema(breadcrumbItems)}
      />
      <section className="page-section page-section--hero">
        <div className="container">
          <p className="eyebrow">Product Range</p>
          <h1>Lubricant Solutions For Every Application</h1>
          <p className="lead">
            Explore four dedicated categories engineered for vehicles,
            industrial machinery, and demanding operating conditions.
          </p>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="Our Products"
            title="Choose A Category"
            copy="Every category is backed by structured technical data on benefits, applications, and performance advantages."
          />
          <ProductGrid products={productCategories} />
        </div>
      </section>

      <CTASection
        eyebrow="Not Sure Which Product Fits?"
        title="Get a Tailored Product Recommendation"
        copy="Share your equipment and operating conditions and our specialists will recommend the right lubricant category."
      />
    </>
  );
}
