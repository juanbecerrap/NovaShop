import { formatPrice } from '../utils/format';

export default function PriceTag({ product, large = false }) {
  return (
    <div className={`price-tag${large ? ' price-tag-lg' : ''}`}>
      <span className="price-current">{formatPrice(product.price)}</span>
      {product.oldPrice && (
        <>
          <s className="price-old">
            <span className="visually-hidden">Precio anterior </span>
            {formatPrice(product.oldPrice)}
          </s>
          <span className="discount-badge">
            <span className="visually-hidden">Descuento de </span>-{product.discount}%
          </span>
        </>
      )}
    </div>
  );
}
