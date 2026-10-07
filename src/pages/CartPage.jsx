import { Link } from 'react-router-dom';
import Button from '../components/Button';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import EmptyState from '../components/EmptyState';
import PageHeader from '../components/PageHeader';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, clearCart } = useCart();

  const handleClear = () => {
    if (window.confirm('¿Quieres vaciar el carrito?')) clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="container section">
        <EmptyState icon="bi-bag" title="Tu carrito está vacío" description="Agrega productos desde el catálogo y aparecerán aquí.">
          <Button to="/productos">Explorar productos</Button>
        </EmptyState>
      </div>
    );
  }

  return (
    <>
      <PageHeader title="Tu carrito" description="Revisa tus productos antes de finalizar la compra." />
      <div className="container section-compact">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="cart-list">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <Link to="/productos">Seguir comprando</Link>
              <Button variant="outline-danger" size="sm" onClick={handleClear}>
                <i className="bi bi-trash3 me-2" aria-hidden="true" />
                Vaciar carrito
              </Button>
            </div>
          </div>
          <div className="col-lg-4">
            <CartSummary>
              <Button to="/checkout" size="lg" className="w-100">
                Finalizar compra
              </Button>
            </CartSummary>
          </div>
        </div>
      </div>
    </>
  );
}
