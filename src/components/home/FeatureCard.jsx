import { motion } from 'framer-motion';

export default function FeatureCard({ feature, index }) {
  const Icon = feature.icon;

  return (
    <motion.article
      className="feature-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.48, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="feature-card__icon" aria-hidden="true">
        <Icon size={24} />
      </div>
      <div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </motion.article>
  );
}
