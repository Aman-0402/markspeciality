import SEO from '../components/common/SEO.jsx';

export default function PlaceholderPage({ title, description, path }) {
  return (
    <>
      <SEO title={`${title} | Mark Speciality`} description={description} path={path} />
      <section className="page-section page-section--hero">
        <div className="container">
          <p className="eyebrow">Route Ready</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
        </div>
      </section>
    </>
  );
}
