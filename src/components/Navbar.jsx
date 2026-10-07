import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/productos', label: 'Productos' },
  { to: '/categorias', label: 'Categorías' },
  { to: '/ofertas', label: 'Ofertas' },
  { to: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="ns-navbar sticky-top">
      <nav className="navbar navbar-expand-lg" aria-label="Navegación principal">
        <div className="container">
          <Link to="/" className="navbar-brand brand">
            <img src={logo} alt="" className="brand-mark" width="34" height="34" />
            NovaShop
          </Link>

          <div className="d-flex align-items-center gap-2 order-lg-last">
            <Link to="/carrito" className="cart-link" aria-label={`Carrito, ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`}>
              <i className="bi bi-bag" aria-hidden="true" />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>
            <button
              type="button"
              className="navbar-toggler"
              onClick={() => setIsOpen((open) => !open)}
              aria-controls="main-menu"
              aria-expanded={isOpen}
              aria-label="Abrir menú de navegación"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div id="main-menu" className={`collapse navbar-collapse${isOpen ? ' show' : ''}`}>
            <ul className="navbar-nav ms-lg-4 me-auto">
              {NAV_LINKS.map(({ to, label, end }) => (
                <li className="nav-item" key={to}>
                  <NavLink to={to} end={end} className="nav-link">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
