import { ArticleListNavigation, ArticlePreview, PopularTag } from '../../components';

function ArticleSection() {
  return (
    <div className="container page">
      <div className="row">
        <div className="col-md-9">
          <ArticleListNavigation />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
        </div>

        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>

            <div className="tag-list">
              <PopularTag tagName="Programming" />
              <PopularTag tagName="javascript" />
              <PopularTag tagName="emberjs" />
              <PopularTag tagName="angularjs" />
              <PopularTag tagName="react" />
              <PopularTag tagName="mean" />
              <PopularTag tagName="node" />
              <PopularTag tagName="rails" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleSection;
