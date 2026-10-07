import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import CartSummary from '../components/CartSummary';
import FormField from '../components/FormField';
import PageHeader from '../components/PageHeader';
import { useCart } from '../context/CartContext';
import useForm from '../hooks/useForm';
import { formatPrice } from '../utils/format';
import { validateCheckout } from '../utils/validators';

const INITIAL_VALUES = { name: '', email: '', address: '', city: '', postalCode: '' };

const createOrderId = () => `NS-${Date.now().toString(36).toUpperCase()}`;

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const { getFieldProps, handleSubmit } = useForm(INITIAL_VALUES, validateCheckout);

  if (items.length === 0) return <Navigate to="/carrito" replace />;

  const placeOrder = (customer) => {
    const order = {
      id: createOrderId(),
      customer,
      total,
      items: items.map(({ product, quantity }) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
      })),
    };
    navigate('/pedido-exitoso', { replace: true, state: { order } });
    clearCart();
  };

  return (
    <>
      <PageHeader title="Finalizar compra" description="Completa tus datos de envío para confirmar el pedido." />
      <div className="container section-compact">
        <div className="row g-4">
          <div className="col-lg-7">
            <form className="checkout-form" onSubmit={handleSubmit(placeOrder)} noValidate>
              <h2 className="h5">Datos de envío</h2>
              <div className="row g-3">
                <FormField label="Nombre completo" className="col-12" type="text" autoComplete="name" {...getFieldProps('name')} />
                <FormField label="Email" className="col-12" type="email" autoComplete="email" {...getFieldProps('email')} />
                <FormField label="Dirección" className="col-12" type="text" autoComplete="street-address" {...getFieldProps('address')} />
                <FormField label="Ciudad" className="col-sm-7" type="text" autoComplete="address-level2" {...getFieldProps('city')} />
                <FormField label="Código postal" className="col-sm-5" type="text" autoComplete="postal-code" {...getFieldProps('postalCode')} />
              </div>
              <p className="checkout-note">
                <i className="bi bi-info-circle me-2" aria-hidden="true" />
                Esta tienda es una demostración: no se realizará ningún cobro.
              </p>
              <Button type="submit" size="lg" className="w-100">
                Confirmar pedido
              </Button>
            </form>
          </div>

          <div className="col-lg-5">
            <ul className="checkout-items">
              {items.map(({ product, quantity }) => (
                <li key={product.id}>
                  <img src={product.image} alt="" width="56" height="56" />
                  <span>
                    {product.name}
                    <small className="d-block text-muted">Cantidad: {quantity}</small>
                  </span>
                  <strong>{formatPrice(product.price * quantity)}</strong>
                </li>
              ))}
            </ul>
            <CartSummary />
          </div>
        </div>
      </div>
    </>
  );
}
