import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import ButtonLink from './ButtonLink.jsx';

export default function CTASection({
  eyebrow = 'Let’s Work Together',
  title = 'Request a Free Consultation',
  copy = 'Talk to our lubrication specialists about the right formulation, volume, and support plan for your operation.',
  primaryLabel = 'Request Free Consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Call Us',
  className = '',
}) {
  return (
    <section className={`cta-section ${className}`}>
      <div className="container cta-section__inner">
        <motion.div
          className="cta-section__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="cta-section__title">{title}</h2>
          <p className="cta-section__copy">{copy}</p>
        </motion.div>
        <motion.div
          className="cta-section__actions"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <ButtonLink to={primaryTo} variant="primary">
            <span>{primaryLabel}</span>
            <ArrowRight size={18} aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="tel:+919082056198" variant="ghost">
            <PhoneCall size={18} aria-hidden="true" />
            <span>{secondaryLabel}</span>
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
