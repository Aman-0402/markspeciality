import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        className="product-card__media"
        to={`/products/${product.slug}`}
        aria-label={`Explore ${product.title}`}
      >
        <picture>
          {product.imageWebp ? <source srcSet={product.imageWebp} type="image/webp" /> : null}
          <img
            src={product.image}
            alt={product.imageAlt}
            width={product.imageWidth}
            height={product.imageHeight}
            loading="lazy"
            decoding="async"
          />
        </picture>
        <span className="product-card__badge">{product.category}</span>
      </Link>
      <div className="product-card__body">
        <h3>
          <Link to={`/products/${product.slug}`}>{product.title}</Link>
        </h3>
        <p>{product.description}</p>
        <Link className="product-card__link" to={`/products/${product.slug}`}>
          <span>Explore category</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
