import { motion } from 'framer-motion';

export default function IndustryCard({ industry, index }) {
  const Icon = industry.icon;

  return (
    <motion.article
      className="industry-card"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.42, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="industry-card__icon" aria-hidden="true">
        <Icon size={23} />
      </div>
      <div>
        <h3>{industry.name}</h3>
        <p>{industry.description}</p>
      </div>
    </motion.article>
  );
}
