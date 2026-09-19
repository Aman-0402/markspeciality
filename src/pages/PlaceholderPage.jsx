import SEO from '../components/common/SEO.jsx';
import ButtonLink from '../components/common/ButtonLink.jsx';

export default function PlaceholderPage({ title, description, path }) {
  return (
    <>
      <SEO title={`${title} | Mark Speciality`} description={description} path={path} />
      <section className="page-section page-section--hero">
        <div className="container">
          <p className="eyebrow">Route Ready</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <div className="cluster">
            <ButtonLink to="/" variant="ghost">
              Back Home
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
