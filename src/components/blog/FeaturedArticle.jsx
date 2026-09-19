import { ArrowUpRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function FeaturedArticle({ post }) {
  return (
    <article className="featured-article card card--interactive">
      <Link
        className="featured-article__media"
        to={`/blog/${post.slug}`}
        style={{ '--blog-accent': post.accentColor }}
        aria-label={`Read ${post.title}`}
      >
        <BookOpen size={48} aria-hidden="true" />
        <span className="featured-article__category">{post.category}</span>
      </Link>
      <div className="featured-article__body">
        <p className="eyebrow">Featured Article</p>
        <h2>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="featured-article__excerpt">{post.excerpt}</p>
        <div className="featured-article__meta">
          <span>
            <Calendar size={15} aria-hidden="true" />
            {formatDate(post.date)}
          </span>
          <span>
            <Clock size={15} aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
        <Link className="featured-article__link" to={`/blog/${post.slug}`}>
          <span>Read Full Article</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
