import { motion } from 'framer-motion';
import Breadcrumb from '../common/Breadcrumb.jsx';

export default function ProductHero({ product, breadcrumbItems }) {
  return (
    <section className="page-section page-section--hero product-hero">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">{product.category} Lubricants</p>
          <h1>{product.title}</h1>
          {product.tagline ? <p className="product-hero__tagline">{product.tagline}</p> : null}
          <p className="lead">{product.description}</p>
        </motion.div>
      </div>
    </section>
  );
}
