import BenefitsSection from '../components/BenefitsSection';
import Button from '../components/Button';
import CategoryCard from '../components/CategoryCard';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import SectionHeading from '../components/SectionHeading';
import { CATEGORIES } from '../data/categories';
import { products } from '../data/products';

const FEATURED_COUNT = 4;
const OFFERS_COUNT = 4;

const featuredProducts = [...products].sort((a, b) => b.rating - a.rating).slice(0, FEATURED_COUNT);
const offerProducts = products
  .filter((product) => product.discount > 0)
  .sort((a, b) => b.discount - a.discount)
  .slice(0, OFFERS_COUNT);

const countByCategory = (name) => products.filter((product) => product.category === name).length;

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section" id="categorias" aria-labelledby="categories-title">
        <div className="container">
          <SectionHeading
            id="categories-title"
            title="Explora por categoría"
            description="Encuentra rápido lo que buscas."
            linkTo="/categorias"
            linkLabel="Ver todas las categorías"
          />
          <ul className="row g-3 g-lg-4 list-unstyled mb-0 row-cols-1 row-cols-sm-2 row-cols-lg-4">
            {CATEGORIES.map((category) => (
              <li key={category.slug} className="col">
                <CategoryCard category={category} productCount={countByCategory(category.name)} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-muted" aria-labelledby="featured-title">
        <div className="container">
          <SectionHeading
            id="featured-title"
            title="Productos destacados"
            description="Los mejor valorados por quienes ya los compraron."
            linkTo="/productos"
            linkLabel="Ver todo el catálogo"
          />
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <section className="section" aria-labelledby="offers-title">
        <div className="container">
          <div className="promo-banner">
            <div>
              <h2 id="offers-title">Ofertas de temporada</h2>
              <p>Descuentos reales en equipos seleccionados, mientras haya stock.</p>
            </div>
            <Button to="/ofertas" variant="light" size="lg">
              Ver todas las ofertas
            </Button>
          </div>
          <ProductGrid products={offerProducts} />
        </div>
      </section>

      <BenefitsSection />
    </>
  );
}
