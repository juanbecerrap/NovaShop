import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import Button from './Button';
import PriceTag from './PriceTag';
import Rating from './Rating';

export default function ProductCard({ product }) {
  const detailPath = `/productos/${product.id}`;

  return (
    <article className="product-card">
      <Link to={detailPath} className="product-card-media" tabIndex={-1} aria-hidden="true">
        <img src={product.image} alt={product.name} loading="lazy" width="600" height="600" />
      </Link>
      <div className="product-card-body">
        <p className="product-card-category">{product.category}</p>
        <h3 className="product-card-title">
          <Link to={detailPath}>{product.name}</Link>
        </h3>
        <Rating value={product.rating} reviews={product.reviews} />
        <PriceTag product={product} />
        <div className="product-card-actions">
          <AddToCartButton product={product} />
          <Button to={detailPath} variant="outline-primary" aria-label={`Ver detalles de ${product.name}`}>
            Ver detalles
          </Button>
        </div>
      </div>
    </article>
  );
}
