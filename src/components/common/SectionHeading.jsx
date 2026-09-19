export default function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'start',
  className = '',
}) {
  const classes = [
    'section-heading',
    align === 'center' ? 'section-heading--center' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {copy ? <p className="section-heading__copy">{copy}</p> : null}
    </div>
  );
}
