import ButtonLink from '../components/common/ButtonLink.jsx';
import SEO from '../components/common/SEO.jsx';

const quickLinks = [
  { label: 'Products', to: '/products' },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

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
            The page you're looking for doesn't exist or may have moved.
            Check the address, or head to one of the pages below.
          </p>
          <div className="cluster">
            <ButtonLink to="/">Return Home</ButtonLink>
            {quickLinks.map((link) => (
              <ButtonLink to={link.to} variant="ghost" key={link.to}>
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
