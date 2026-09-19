import { Navigate, useParams } from 'react-router-dom';
import { BookOpen, Calendar, Clock } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import CTASection from '../components/common/CTASection.jsx';
import BlogCard from '../components/blog/BlogCard.jsx';
import ShareButtons from '../components/blog/ShareButtons.jsx';
import { getBlogPost, getRelatedPosts } from '../data/blogs.js';
import { buildArticleSchema, buildBreadcrumbSchema } from '../utils/structuredData.js';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ];

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      <SEO
        title={`${post.title} | Mark Speciality Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        jsonLd={[buildArticleSchema(post), buildBreadcrumbSchema(breadcrumbItems)]}
      />
      <section className="page-section page-section--hero">
        <div className="container">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <div className="blog-article__meta">
            <span>
              <Calendar size={16} aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span>
              <Clock size={16} aria-hidden="true" />
              {post.readTime}
            </span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container blog-article">
          <div
            className="blog-article__cover"
            style={{ '--blog-accent': post.accentColor }}
            aria-hidden="true"
          >
            <BookOpen size={56} />
          </div>
          <div className="blog-article__content">
            {post.content.map((paragraph, index) => (
              <p key={`${post.id}-paragraph-${index}`}>{paragraph}</p>
            ))}
          </div>
          <ShareButtons title={post.title} path={`/blog/${post.slug}`} />
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="section section--muted">
          <div className="container">
            <SectionHeading
              eyebrow="Keep Reading"
              title="Related Articles"
              align="center"
            />
            <div className="blog-grid">
              {relatedPosts.map((relatedPost) => (
                <BlogCard post={relatedPost} key={relatedPost.id} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        eyebrow="Need Product Advice?"
        title="Talk To Our Lubrication Specialists"
        copy="Our technical team can help translate this guidance into a recommendation for your specific equipment."
      />
    </>
  );
}
