import { ArrowUpRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogCard({ post }) {
  return (
    <article className="blog-card card card--interactive">
      <Link
        className="blog-card__media"
        to={`/blog/${post.slug}`}
        style={{ '--blog-accent': post.accentColor }}
        aria-label={`Read ${post.title}`}
      >
        <BookOpen size={32} aria-hidden="true" />
        <span className="blog-card__category">{post.category}</span>
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>
            <Calendar size={14} aria-hidden="true" />
            {formatDate(post.date)}
          </span>
          <span>
            <Clock size={14} aria-hidden="true" />
            {post.readTime}
          </span>
        </div>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <Link className="blog-card__link" to={`/blog/${post.slug}`}>
          <span>Read More</span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
