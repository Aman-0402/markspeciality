import { motion } from 'framer-motion';

export default function StatHighlights({ items }) {
  return (
    <div className="stat-highlights">
      {items.map((item, index) => (
        <motion.div
          className="stat-highlights__item"
          key={item}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="stat-highlights__index">{String(index + 1).padStart(2, '0')}</span>
          <span className="stat-highlights__label">{item}</span>
        </motion.div>
      ))}
    </div>
  );
}
