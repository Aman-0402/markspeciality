import { useParams } from 'react-router-dom';
import PlaceholderPage from './PlaceholderPage.jsx';

export default function BlogDetail() {
  const { slug } = useParams();

  return (
    <PlaceholderPage
      title="Blog Article"
      description={`Article route ready for ${slug}. Full article rendering arrives in Phase 13.`}
      path={`/blog/${slug}`}
    />
  );
}
