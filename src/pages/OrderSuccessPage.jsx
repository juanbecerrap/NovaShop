import { Navigate, useLocation } from 'react-router-dom';
import Button from '../components/Button';
import { formatPrice } from '../utils/format';

export default function OrderSuccessPage() {
  const order = useLocation().state?.order;

  if (!order) return <Navigate to="/" replace />;

  const firstName = order.customer.name.trim().split(' ')[0];

  return (
    <div className="container section">
      <div className="order-success">
        <i className="bi bi-check-circle-fill" aria-hidden="true" />
        <h1>¡Gracias por tu compra, {firstName}!</h1>
        <p className="lead">
          Tu pedido <strong>{order.id}</strong> fue confirmado. Enviaremos los detalles a{' '}
          <strong>{order.customer.email}</strong>.
        </p>

        <ul className="order-success-items">
          {order.items.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} <small className="text-muted">× {item.quantity}</small>
              </span>
              <strong>{formatPrice(item.price * item.quantity)}</strong>
            </li>
          ))}
          <li className="order-success-total">
            <span>Total pagado</span>
            <strong>{formatPrice(order.total)}</strong>
          </li>
        </ul>

        <p className="text-muted small">
          Entrega en {order.customer.address}, {order.customer.city}. Este pedido es una simulación y no genera ningún cobro.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <Button to="/">Volver al inicio</Button>
          <Button to="/productos" variant="outline-primary">
            Seguir comprando
          </Button>
        </div>
      </div>
    </div>
  );
}
