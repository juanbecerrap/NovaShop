import { getProductById, products } from '../data/products';
import Button from './Button';

const HERO_PRODUCT_IDS = [5, 1, 9];
const maxDiscount = Math.max(...products.map((product) => product.discount));

export default function Hero() {
  const [laptop, phone, headphones] = HERO_PRODUCT_IDS.map(getProductById);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h1 id="hero-title">Tecnología que rinde desde el primer día</h1>
            <p className="hero-lead">
              Smartphones, laptops, audio y accesorios elegidos por su rendimiento, con envío gratis y garantía en
              cada pedido.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button to="/productos" variant="light" size="lg">
                Ver productos
              </Button>
              <Button to="/ofertas" variant="outline-light" size="lg">
                Ver ofertas
              </Button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-stage">
              <img className="hero-tile hero-tile-main" src={laptop.image} alt={laptop.name} width="600" height="600" />
              <img className="hero-tile hero-tile-side" src={phone.image} alt={phone.name} width="600" height="600" />
              <img className="hero-tile hero-tile-low" src={headphones.image} alt={headphones.name} width="600" height="600" />
              <p className="hero-chip">Hasta {maxDiscount}% de descuento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
