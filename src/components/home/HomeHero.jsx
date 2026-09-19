import { ArrowRight, BadgeCheck, Factory, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import ButtonLink from '../common/ButtonLink.jsx';
import heroImage from '../../assets/images/home-hero-industrial.png';
import heroImageWebp from '../../assets/images/home-hero-industrial.webp';

const heroStats = [
  { value: '4+', label: 'Product Categories' },
  { value: '12+', label: 'Industries Served' },
  { value: '24/7', label: 'Reliability Mindset' },
];

const proofPoints = [
  {
    icon: ShieldCheck,
    label: 'Quality-tested lubricant solutions',
  },
  {
    icon: Factory,
    label: 'Industrial and automotive coverage',
  },
  {
    icon: BadgeCheck,
    label: 'Partnership-first technical support',
  },
];

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__background" aria-hidden="true">
        <picture>
          <source srcSet={heroImageWebp} type="image/webp" />
          <img
            className="home-hero__image"
            src={heroImage}
            alt=""
            width={1920}
            height={800}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <div className="home-hero__scrim" />
      </div>
      <div className="container home-hero__inner">
        <motion.div
          className="home-hero__content"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">Industrial Lubricant Solutions</p>
          <h1 id="home-hero-title">
            Your Trusted Partner in Quality & Innovation
          </h1>
          <p className="home-hero__lead">
            Mark Speciality delivers reliable lubricant and specialty product
            solutions that help protect equipment, improve performance, and
            support long-term industrial partnerships.
          </p>
          <div className="home-hero__actions">
            <ButtonLink to="/products">
              <span>View All Products</span>
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Request Consultation
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          className="home-hero__proof"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="home-hero__proof-grid">
            {proofPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div className="home-hero__proof-item" key={item.label}>
                  <Icon size={19} aria-hidden="true" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
          <div className="home-hero__stats" aria-label="Company highlights">
            {heroStats.map((stat) => (
              <div className="home-hero__stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
