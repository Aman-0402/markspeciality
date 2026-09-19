import SEO from '../components/common/SEO.jsx';
import ButtonLink from '../components/common/ButtonLink.jsx';

export default function Home() {
  return (
    <>
      <SEO
        title="Mark Speciality | Quality Lubricant Solutions"
        description="A modern React implementation for Mark Speciality's automotive, industrial, grease, and specialty lubricant solutions."
      />
      <section className="page-section page-section--hero">
        <div className="container">
          <p className="eyebrow">Phase 1 App Shell</p>
          <h1>Your Trusted Partner in Quality & Innovation</h1>
          <p className="lead">
            The project foundation is ready. Upcoming phases will add the full
            premium industrial website experience.
          </p>
          <div className="cluster">
            <ButtonLink to="/products">View All Products</ButtonLink>
            <ButtonLink to="/contact" variant="ghost">
              Request Consultation
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
