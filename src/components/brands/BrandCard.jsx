import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandCard({ brand, index }) {
  return (
    <motion.article
      className="brand-showcase"
      style={{ '--brand-accent': brand.accentColor }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link className="brand-showcase__media" to={`/products/${brand.productSlug}`}>
        <picture>
          {brand.imageWebp ? <source srcSet={brand.imageWebp} type="image/webp" /> : null}
          <img src={brand.image} alt={brand.imageAlt} loading="lazy" decoding="async" />
        </picture>
        <span className="brand-showcase__category">{brand.category}</span>
      </Link>
      <div className="brand-showcase__body">
        <h3>{brand.title}</h3>
        <p>{brand.description}</p>
        <Link className="brand-showcase__link" to={`/products/${brand.productSlug}`}>
          <span>View products</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}
