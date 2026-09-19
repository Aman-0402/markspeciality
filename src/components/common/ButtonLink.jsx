import { Link } from 'react-router-dom';

const variants = {
  primary: 'button',
  secondary: 'button-secondary',
  ghost: 'button-ghost',
};

export default function ButtonLink({
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = [variants[variant] ?? variants.primary, className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} to={to} {...props}>
      {children}
    </Link>
  );
}
