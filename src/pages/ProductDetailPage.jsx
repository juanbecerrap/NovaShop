import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddToCartButton from '../components/AddToCartButton';
import Button from '../components/Button';
import EmptyState from '../components/EmptyState';
import PriceTag from '../components/PriceTag';
import ProductGallery from '../components/ProductGallery';
import ProductGrid from '../components/ProductGrid';
import QuantitySelector from '../components/QuantitySelector';
import Rating from '../components/Rating';
import SectionHeading from '../components/SectionHeading';
import { getProductById, products } from '../data/products';

const RELATED_COUNT = 4;

const getRelatedProducts = (product) => {
  const others = products.filter(({ id }) => id !== product.id);
  const sameCategory = others.filter(({ category }) => category === product.category);
  const rest = others.filter(({ category }) => category !== product.category);
  return [...sameCategory, ...rest].slice(0, RELATED_COUNT);
};

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container section-compact">
      <nav aria-label="Ruta de navegación">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
          <li className="breadcrumb-item"><Link to="/productos">Productos</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="row g-4 g-lg-5">
        <div className="col-lg-6">
          <ProductGallery images={product.images} name={product.name} />
        </div>

        <div className="col-lg-6">
          <Link to={`/productos?categoria=${encodeURIComponent(product.category)}`} className="detail-category">
            {product.category}
          </Link>
          <h1 className="detail-title">{product.name}</h1>
          <Rating value={product.rating} reviews={product.reviews} />
          <PriceTag product={product} large />
          <p className="detail-description">{product.description}</p>

          <h2 className="h5">Características</h2>
          <ul className="feature-list">
            {product.features.map((feature) => (
              <li key={feature}>
                <i className="bi bi-check2-circle" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="detail-purchase">
            <QuantitySelector value={quantity} onChange={setQuantity} label={product.name} />
            <AddToCartButton product={product} quantity={quantity} size="lg" className="flex-grow-1" />
          </div>

          <ul className="detail-perks">
            <li><i className="bi bi-truck" aria-hidden="true" />Envío gratis a todo el país</li>
            <li><i className="bi bi-patch-check" aria-hidden="true" />12 meses de garantía oficial</li>
          </ul>
        </div>
      </div>

      <section className="related" aria-labelledby="related-title">
        <SectionHeading id="related-title" title="Productos relacionados" />
        <ProductGrid products={getRelatedProducts(product)} />
      </section>
    </div>
  );
}

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="container section">
        <EmptyState icon="bi-box-seam" title="Producto no encontrado" description="Puede que el enlace sea incorrecto o que el producto ya no esté disponible.">
          <Button to="/productos">Ver catálogo</Button>
        </EmptyState>
      </div>
    );
  }

  return <ProductDetail key={product.id} product={product} />;
}
