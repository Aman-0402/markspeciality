import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ExpandableSection({ section, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = `about-section-${section.id}`;

  return (
    <motion.article
      className="expandable-section"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.48, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <h3 className="expandable-section__title">{section.title}</h3>
      <p className="expandable-section__text" id={panelId}>
        {isOpen ? section.body : section.preview}
      </p>
      <button
        type="button"
        className="expandable-section__toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{isOpen ? 'Read Less' : 'Read More'}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={isOpen ? 'is-open' : ''}
        />
      </button>
    </motion.article>
  );
}
