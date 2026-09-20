import { motion } from 'framer-motion';

export default function CapabilityRow({ section, index = 0, reverse }) {
  return (
    <div
      className={`capability-row ${reverse ? 'capability-row--reverse' : ''}`}
      style={{ '--capability-accent': section.accentColor }}
    >
      <motion.div
        className="capability-row__media"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="capability-row__frame">
          <picture>
            {section.imageWebp ? <source srcSet={section.imageWebp} type="image/webp" /> : null}
            <img src={section.image} alt={section.imageAlt} loading="lazy" decoding="async" />
          </picture>
        </div>
        <span className="capability-row__index" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </motion.div>
      <motion.div
        className="capability-row__copy"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="capability-row__bar" aria-hidden="true" />
        <div>
          <p className="capability-row__eyebrow">{section.eyebrow ?? 'Mark Speciality'}</p>
          <h3>{section.title}</h3>
          <p className="capability-row__text">{section.body}</p>
        </div>
      </motion.div>
    </div>
  );
}
