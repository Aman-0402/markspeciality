import { motion } from 'framer-motion';
import Breadcrumb from '../common/Breadcrumb.jsx';

export default function AboutHero({ breadcrumbItems }) {
  return (
    <section className="page-section page-section--hero about-hero">
      <div className="container">
        {breadcrumbItems ? <Breadcrumb items={breadcrumbItems} /> : null}
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
