interface PopularTagProps {
  tagName: string;
}

function PopularTag({ tagName }: PopularTagProps) {
  return (
    <a href="#" className="tag-pill tag-default">
      {tagName}
    </a>
  );
}

export default PopularTag;
