import { Navigate, useParams } from 'react-router-dom';
import { CheckCircle2, Wrench } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import CTASection from '../components/common/CTASection.jsx';
import ProductHero from '../components/products/ProductHero.jsx';
import BenefitList from '../components/products/BenefitList.jsx';
import RelatedProducts from '../components/products/RelatedProducts.jsx';
import { getProductCategory } from '../data/products.js';
import { industries } from '../data/industries.js';
import { buildBreadcrumbSchema, buildProductSchema } from '../utils/structuredData.js';

export default function ProductCategory() {
  const { slug } = useParams();
  const product = getProductCategory(slug);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: product.title },
  ];

  const servedIndustries = industries.filter((industry) =>
    product.industriesServed?.includes(industry.id),
  );

  return (
    <div className="product-category" style={{ '--category-accent': product.accentColor }}>
      <SEO
        title={`${product.title} | Mark Speciality`}
        description={product.description}
        path={`/products/${product.slug}`}
        jsonLd={[buildProductSchema(product), buildBreadcrumbSchema(breadcrumbItems)]}
      />
      <ProductHero product={product} breadcrumbItems={breadcrumbItems} />

      <section className="section section--surface">
        <div className="container product-overview">
          <div className="product-overview__main">
            <SectionHeading eyebrow="Category Overview" title="What This Category Offers" />
            <p className="product-overview__copy">{product.description}</p>
            <ul className="product-overview__features">
              {product.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={18} aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading eyebrow="Key Benefits" title="Why This Category Performs" align="center" />
          <BenefitList items={product.benefits} icon={CheckCircle2} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="Typical Applications"
            title="Where It's Used"
            align="center"
          />
          <BenefitList items={product.applications} icon={Wrench} />
        </div>
      </section>

      {product.performanceAdvantages?.length ? (
        <section className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Performance Advantages"
              title="Engineered For Reliable Operation"
              align="center"
            />
            <BenefitList items={product.performanceAdvantages} icon={CheckCircle2} />
          </div>
        </section>
      ) : null}

      {servedIndustries.length ? (
        <section className="section section--surface">
          <div className="container">
            <SectionHeading
              eyebrow="Industries Served"
              title="Trusted Across Demanding Sectors"
              align="center"
            />
            <div className="product-industries-grid">
              {servedIndustries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div className="product-industries-grid__item card" key={industry.id}>
                    <Icon size={22} aria-hidden="true" />
                    <span>{industry.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <RelatedProducts currentSlug={product.slug} />

      <CTASection
        eyebrow="Need Guidance?"
        title={`Talk To Us About ${product.title}`}
        copy="Our team can help you choose the right formulation, volume, and delivery schedule for your operation."
      />
    </div>
  );
}
