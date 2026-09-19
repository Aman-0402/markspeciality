import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Mark Speciality"
        description="The page you requested could not be found."
        path="/404"
      />
      <section className="page-section page-section--hero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Page Not Found</h1>
          <p className="lead">
            This route is ready for a polished custom error experience in later
            phases.
          </p>
          <Link className="button" to="/">
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
}
