import SectionHeading from '../common/SectionHeading.jsx';
import IndustryCard from './IndustryCard.jsx';
import { industries } from '../../data/industries.js';

export default function Industries() {
  return (
    <section className="industries section section--muted" aria-labelledby="industries-title">
      <div className="container container--wide">
        <div className="industries__heading">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Lubrication support across demanding sectors"
            copy="From automotive maintenance to heavy industry, Mark Speciality helps customers select lubrication solutions for real-world operating conditions."
          />
          <div className="industries__summary" aria-label="Industry coverage summary">
            <strong>{industries.length}</strong>
            <span>served sectors</span>
          </div>
        </div>
        <div className="industries__grid">
          {industries.map((industry, index) => (
            <IndustryCard industry={industry} index={index} key={industry.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
