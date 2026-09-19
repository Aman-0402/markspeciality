import { motion } from 'framer-motion';

export default function CapabilityRow({ section, reverse }) {
  return (
    <div className={`capability-row ${reverse ? 'capability-row--reverse' : ''}`}>
      <motion.div
        className="capability-row__media"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <picture>
          {section.imageWebp ? <source srcSet={section.imageWebp} type="image/webp" /> : null}
          <img src={section.image} alt={section.imageAlt} loading="lazy" decoding="async" />
        </picture>
      </motion.div>
      <motion.div
        className="capability-row__copy"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h3>{section.title}</h3>
        <p>{section.body}</p>
      </motion.div>
    </div>
  );
}
