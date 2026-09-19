import { motion } from 'framer-motion';

export default function TagList({ items }) {
  return (
    <ul className="tag-list">
      {items.map((item, index) => (
        <motion.li
          className="tag-list__item"
          key={item}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
