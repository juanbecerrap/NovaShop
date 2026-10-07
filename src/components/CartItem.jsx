import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import QuantitySelector from './QuantitySelector';

export default function CartItem({ item: { product, quantity } }) {
  const { increaseQuantity, decreaseQuantity, removeItem, maxQuantity } = useCart();

  const handleQuantityChange = (nextQuantity) =>
    nextQuantity > quantity ? increaseQuantity(product.id) : decreaseQuantity(product.id);

  return (
    <article className="cart-item">
      <Link to={`/productos/${product.id}`} className="cart-item-media">
        <img src={product.image} alt={product.name} width="96" height="96" />
      </Link>
      <div className="cart-item-info">
        <p className="product-card-category mb-1">{product.category}</p>
        <h3 className="cart-item-title">
          <Link to={`/productos/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="mb-0 text-muted small">{formatPrice(product.price)} c/u</p>
      </div>
      <div className="cart-item-controls">
        <QuantitySelector value={quantity} onChange={handleQuantityChange} label={product.name} max={maxQuantity} />
        <strong className="cart-item-total">{formatPrice(product.price * quantity)}</strong>
        <button
          type="button"
          className="btn btn-link text-danger cart-item-remove"
          onClick={() => removeItem(product.id)}
          aria-label={`Eliminar ${product.name} del carrito`}
        >
          <i className="bi bi-trash3 me-1" aria-hidden="true" />
          Eliminar
        </button>
      </div>
    </article>
  );
}
