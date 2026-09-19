import SectionHeading from '../common/SectionHeading.jsx';
import ProductGrid from './ProductGrid.jsx';
import { productCategories } from '../../data/products.js';

export default function RelatedProducts({ currentSlug }) {
  const relatedProducts = productCategories.filter((product) => product.slug !== currentSlug);

  return (
    <section className="section section--muted">
      <div className="container">
        <SectionHeading
          eyebrow="Explore More"
          title="Related Products"
          copy="Browse other lubricant categories engineered for different equipment and operating conditions."
          align="center"
        />
        <ProductGrid products={relatedProducts} />
      </div>
    </section>
  );
}
