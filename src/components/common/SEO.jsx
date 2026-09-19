import { Helmet } from 'react-helmet-async';

const siteName = 'Mark Speciality India Pvt. Ltd.';

export default function SEO({
  title = siteName,
  description = 'Premium lubricant solutions for automotive, industrial, grease, and specialty applications.',
  path = '/',
}) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `https://markspeciality.com${canonicalPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
