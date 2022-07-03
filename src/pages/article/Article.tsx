import { useParams } from 'react-router-dom';

function ArticlePage() {
  const { articleSlug } = useParams();

  return <div>{articleSlug}</div>;
}

export default ArticlePage;
