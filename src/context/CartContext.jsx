import { createContext, useCallback, useContext, useMemo } from 'react';
import { getProductById } from '../data/products';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext(null);

const STORAGE_KEY = 'novashop-cart';
const MAX_QUANTITY = 10;

export function CartProvider({ children }) {
  const [storedItems, setStoredItems] = useLocalStorage(STORAGE_KEY, []);

  const items = useMemo(
    () =>
      storedItems
        .map(({ id, quantity }) => ({ product: getProductById(id), quantity }))
        .filter((item) => item.product),
    [storedItems],
  );

  const addItem = useCallback(
    (product, quantity = 1) =>
      setStoredItems((current) => {
        const existing = current.find((item) => item.id === product.id);
        if (!existing) return [...current, { id: product.id, quantity: Math.min(quantity, MAX_QUANTITY) }];
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, MAX_QUANTITY) }
            : item,
        );
      }),
    [setStoredItems],
  );

  const changeQuantity = useCallback(
    (id, delta) =>
      setStoredItems((current) =>
        current.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.min(Math.max(item.quantity + delta, 1), MAX_QUANTITY) }
            : item,
        ),
      ),
    [setStoredItems],
  );

  const removeItem = useCallback(
    (id) => setStoredItems((current) => current.filter((item) => item.id !== id)),
    [setStoredItems],
  );

  const clearCart = useCallback(() => setStoredItems([]), [setStoredItems]);

  const value = useMemo(() => {
    const totalItems = items.reduce((sum, { quantity }) => sum + quantity, 0);
    const subtotal = items.reduce(
      (sum, { product, quantity }) => sum + (product.oldPrice ?? product.price) * quantity,
      0,
    );
    const total = items.reduce((sum, { product, quantity }) => sum + product.price * quantity, 0);

    return {
      items,
      totalItems,
      subtotal,
      discount: subtotal - total,
      total,
      maxQuantity: MAX_QUANTITY,
      addItem,
      increaseQuantity: (id) => changeQuantity(id, 1),
      decreaseQuantity: (id) => changeQuantity(id, -1),
      removeItem,
      clearCart,
    };
  }, [items, addItem, changeQuantity, removeItem, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider');
  return context;
}
