import { motion } from 'framer-motion';

export default function ProductHero({ product }) {
  return (
    <section className="page-section page-section--hero product-hero">
      <div className="container product-hero__grid">
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
        <motion.div
          className="product-hero__media"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <picture>
            {product.imageWebp ? <source srcSet={product.imageWebp} type="image/webp" /> : null}
            <img
              src={product.image}
              alt={product.imageAlt}
              width={product.imageWidth}
              height={product.imageHeight}
              loading="eager"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
}
