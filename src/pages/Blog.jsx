import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import SEO from '../components/common/SEO.jsx';
import SectionHeading from '../components/common/SectionHeading.jsx';
import CTASection from '../components/common/CTASection.jsx';
import PageHeroMedia from '../components/common/PageHeroMedia.jsx';
import FeaturedArticle from '../components/blog/FeaturedArticle.jsx';
import BlogCard from '../components/blog/BlogCard.jsx';
import { blogCategories, blogs } from '../data/blogs.js';
import { buildBreadcrumbSchema } from '../utils/structuredData.js';
import heroImage from '../assets/images/home-hero-industrial.png';
import heroImageWebp from '../assets/images/home-hero-industrial.webp';

const breadcrumbItems = [{ label: 'Home', href: '/' }, { label: 'Blog' }];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = useMemo(() => blogs.find((post) => post.featured), []);

  const filteredPosts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return blogs.filter((post) => {
      if (post.slug === featuredPost?.slug) {
        return false;
      }

      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesTerm =
        term.length === 0 ||
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term);

      return matchesCategory && matchesTerm;
    });
  }, [searchTerm, activeCategory, featuredPost]);

  return (
    <>
      <SEO
        title="Blog | Mark Speciality"
        description="Practical lubrication guidance, maintenance tips, and industry insights from the Mark Speciality technical team."
        path="/blog"
        jsonLd={buildBreadcrumbSchema(breadcrumbItems)}
      />
      <section className="page-section page-section--hero">
        <PageHeroMedia image={heroImage} imageWebp={heroImageWebp} />
        <div className="container">
          <p className="eyebrow">Insights &amp; Guidance</p>
          <h1>Lubrication Knowledge From Our Technical Team</h1>
          <p className="lead">
            Practical maintenance tips, product guides, and industry
            insights to help you get the most from your equipment.
          </p>
        </div>
      </section>

      {featuredPost ? (
        <section className="section section--surface">
          <div className="container">
            <FeaturedArticle post={featuredPost} />
          </div>
        </section>
      ) : null}

      <section className="section section--muted">
        <div className="container">
          <SectionHeading eyebrow="All Articles" title="Browse By Topic" />

          <div className="blog-filters">
            <label className="blog-search" htmlFor="blog-search-input">
              <Search size={18} aria-hidden="true" />
              <input
                id="blog-search-input"
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
            <div className="blog-categories" role="group" aria-label="Filter by category">
              <button
                type="button"
                className={`blog-categories__chip ${activeCategory === 'All' ? 'is-active' : ''}`}
                onClick={() => setActiveCategory('All')}
              >
                All
              </button>
              {blogCategories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={`blog-categories__chip ${activeCategory === category ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <BlogCard post={post} key={post.id} />
              ))}
            </div>
          ) : (
            <p className="blog-empty-state">
              No articles match your search. Try a different keyword or category.
            </p>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Still Have Questions?"
        title="Talk To Our Lubrication Specialists"
        copy="If you can't find the guidance you need in our articles, our technical team is ready to help directly."
      />
    </>
  );
}
