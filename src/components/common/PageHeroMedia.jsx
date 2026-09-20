export default function PageHeroMedia({ image, imageWebp }) {
  return (
    <div className="page-hero-media" aria-hidden="true">
      <picture>
        {imageWebp ? <source srcSet={imageWebp} type="image/webp" /> : null}
        <img src={image} alt="" loading="eager" />
      </picture>
      <div className="page-hero-media__scrim" />
    </div>
  );
}
