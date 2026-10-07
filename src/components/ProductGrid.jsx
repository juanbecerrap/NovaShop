import ProductCard from './ProductCard';

export default function ProductGrid({ products, columns = 'row-cols-1 row-cols-sm-2 row-cols-lg-4' }) {
  return (
    <ul className={`row g-3 g-lg-4 list-unstyled mb-0 ${columns}`}>
      {products.map((product) => (
        <li key={product.id} className="col">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
