import { motion } from 'framer-motion';
import PageHeroMedia from '../common/PageHeroMedia.jsx';
import heroImage from '../../assets/images/about-product-lineup.png';
import heroImageWebp from '../../assets/images/about-product-lineup.webp';

export default function AboutHero() {
  return (
    <section className="page-section page-section--hero about-hero">
      <PageHeroMedia image={heroImage} imageWebp={heroImageWebp} />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">About Mark Speciality</p>
          <h1>Your Trusted Partner in Quality &amp; Innovation</h1>
          <p className="lead">
            Two decades of lubrication expertise, applied to real operating
            conditions across automotive, industrial, and specialty
            applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
