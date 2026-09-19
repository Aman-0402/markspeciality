import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrandCard({ brand, index }) {
  return (
    <motion.article
      className="brand-card card card--interactive"
      style={{ '--brand-accent': brand.accentColor }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.48, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="brand-card__mark" aria-hidden="true">
        {brand.monogram}
      </div>
      <h3>{brand.name}</h3>
      <p className="brand-card__tagline">{brand.tagline}</p>
      <p className="brand-card__description">{brand.description}</p>
      <Link className="brand-card__link" to={`/products/${brand.productSlug}`}>
        <span>View products</span>
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </motion.article>
  );
}
