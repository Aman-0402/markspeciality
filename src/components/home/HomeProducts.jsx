import SectionHeading from '../common/SectionHeading.jsx';
import ProductGrid from '../products/ProductGrid.jsx';
import { productCategories } from '../../data/products.js';

export default function HomeProducts() {
  return (
    <section className="home-products section section--surface" aria-labelledby="home-products-title">
      <div className="container container--wide">
        <div className="home-products__heading">
          <SectionHeading
            eyebrow="Our Products"
            title="Lubricant categories built for real operating demands"
            copy="Explore automotive, industrial, specialty, and grease solutions designed to protect assets, support uptime, and keep equipment performing with confidence."
          />
          <p className="home-products__kicker">OUR PRODUCTS</p>
        </div>
        <ProductGrid products={productCategories} />
      </div>
    </section>
  );
}
