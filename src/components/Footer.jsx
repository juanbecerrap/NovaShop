import { Link } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';

export default function Footer() {
  return (
    <footer className="ns-footer">
      <div className="container">
        <div className="row g-4 py-5">
          <div className="col-12 col-lg-5">
            <p className="footer-brand">NovaShop</p>
            <p className="footer-text">
              Tecnología seleccionada con envío gratis, pago seguro y garantía en cada compra.
            </p>
          </div>
          <nav className="col-6 col-lg-2 offset-lg-1" aria-label="Categorías">
            <h2 className="footer-title">Tienda</h2>
            <ul className="footer-links">
              {CATEGORIES.map(({ name }) => (
                <li key={name}>
                  <Link to={`/productos?categoria=${encodeURIComponent(name)}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="col-6 col-lg-2" aria-label="Ayuda">
            <h2 className="footer-title">Ayuda</h2>
            <ul className="footer-links">
              <li><Link to="/ofertas">Ofertas</Link></li>
              <li><Link to="/carrito">Mi carrito</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="mb-0">© {new Date().getFullYear()} NovaShop. Proyecto de portafolio: los productos y pedidos son ficticios.</p>
        </div>
      </div>
    </footer>
  );
}
