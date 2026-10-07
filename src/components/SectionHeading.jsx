import { Link } from 'react-router-dom';

export default function SectionHeading({ id, title, description, linkTo, linkLabel }) {
  return (
    <div className="section-heading">
      <div>
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {linkTo && (
        <Link to={linkTo} className="section-heading-link">
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
