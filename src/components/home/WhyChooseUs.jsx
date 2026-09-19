import SectionHeading from '../common/SectionHeading.jsx';
import FeatureCard from './FeatureCard.jsx';
import { whyChooseFeatures } from '../../data/features.js';

export default function WhyChooseUs() {
  return (
    <section className="why-choose section" aria-labelledby="why-choose-title">
      <div className="container">
        <div className="why-choose__layout">
          <div className="why-choose__content">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why Choose Mark Speciality?"
              copy="Reliable lubrication is more than a product choice. It is the confidence that equipment, operations, and support systems are working together."
            />
            <div className="why-choose__panel">
              <strong>Built for dependable performance</strong>
              <p>
                From product selection to ongoing guidance, Mark Speciality
                focuses on practical outcomes: protection, uptime, and lasting
                customer partnerships.
              </p>
            </div>
          </div>
          <div className="why-choose__grid">
            {whyChooseFeatures.map((feature, index) => (
              <FeatureCard feature={feature} index={index} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
