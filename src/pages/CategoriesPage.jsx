import CategoryCard from '../components/CategoryCard';
import PageHeader from '../components/PageHeader';
import { CATEGORIES } from '../data/categories';
import { products } from '../data/products';

export default function CategoriesPage() {
  return (
    <>
      <PageHeader title="Categorías" description="Elige una categoría para ver sus productos." />
      <div className="container section-compact">
        <ul className="row g-3 g-lg-4 list-unstyled mb-0 row-cols-1 row-cols-sm-2 row-cols-lg-4">
          {CATEGORIES.map((category) => (
            <li key={category.slug} className="col">
              <CategoryCard
                category={category}
                productCount={products.filter(({ category: name }) => name === category.name).length}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
