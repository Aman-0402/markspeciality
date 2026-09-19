import { useParams } from 'react-router-dom';
import PlaceholderPage from './PlaceholderPage.jsx';

export default function ProductCategory() {
  const { slug } = useParams();
  const title = slug
    ?.split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <PlaceholderPage
      title={title}
      description="Reusable product category pages will be powered by structured product data in Phases 10 and 11."
      path={`/products/${slug}`}
    />
  );
}
