import { motion } from 'framer-motion';

export default function BenefitList({ items, icon: Icon }) {
  return (
    <ul className="benefit-list">
      {items.map((item, index) => (
        <motion.li
          className="benefit-list__item"
          key={item}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="benefit-list__icon" aria-hidden="true">
            <Icon size={20} />
          </span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
