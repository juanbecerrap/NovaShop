import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function CartSummary({ children }) {
  const { totalItems, subtotal, discount, total } = useCart();

  return (
    <aside className="summary-card" aria-labelledby="summary-title">
      <h2 id="summary-title" className="h5">
        Resumen del pedido
      </h2>
      <dl className="summary-list">
        <div>
          <dt>Subtotal ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})</dt>
          <dd>{formatPrice(subtotal)}</dd>
        </div>
        <div className="summary-discount">
          <dt>Descuento</dt>
          <dd>-{formatPrice(discount)}</dd>
        </div>
        <div>
          <dt>Envío</dt>
          <dd>Gratis</dd>
        </div>
        <div className="summary-total">
          <dt>Total</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>
      {children}
    </aside>
  );
}
