import { Link } from 'react-router-dom';

export default function CategoryCard({ category, productCount }) {
  return (
    <Link to={`/productos?categoria=${encodeURIComponent(category.name)}`} className="category-card">
      <span className="category-card-icon">
        <i className={`bi ${category.icon}`} aria-hidden="true" />
      </span>
      <span className="category-card-name">{category.name}</span>
      <span className="category-card-text">{category.description}</span>
      <span className="category-card-count">{productCount} productos</span>
    </Link>
  );
}
