import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import Button from './Button';

const FEEDBACK_DURATION = 1800;

export default function AddToCartButton({ product, quantity = 1, size, className = '' }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!added) return undefined;
    const timer = setTimeout(() => setAdded(false), FEEDBACK_DURATION);
    return () => clearTimeout(timer);
  }, [added]);

  const handleClick = () => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <>
      <Button size={size} className={className} onClick={handleClick}>
        <i className={`bi ${added ? 'bi-check2' : 'bi-cart-plus'} me-2`} aria-hidden="true" />
        {added ? 'Agregado' : 'Agregar al carrito'}
      </Button>
      <span className="visually-hidden" role="status">
        {added ? `${product.name} agregado al carrito` : ''}
      </span>
    </>
  );
}
