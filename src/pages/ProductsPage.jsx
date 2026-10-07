import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '../components/Button';
import EmptyState from '../components/EmptyState';
import PageHeader from '../components/PageHeader';
import ProductFilters from '../components/ProductFilters';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';
import { CATEGORIES } from '../data/categories';
import { products } from '../data/products';
import useProductFilters, { SORT_OPTIONS } from '../hooks/useProductFilters';

const offerProducts = products.filter((product) => product.discount > 0);

export default function ProductsPage({ onlyOffers = false }) {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('categoria');
  const urlCategory = CATEGORIES.some(({ name }) => name === categoryParam) ? categoryParam : 'all';

  const { filters, filteredProducts, maxCatalogPrice, hasActiveFilters, updateFilter, resetFilters } =
    useProductFilters(onlyOffers ? offerProducts : products, {
      category: urlCategory,
      query: searchParams.get('q') ?? '',
    });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    updateFilter('category', urlCategory);
  }, [urlCategory]);

  const title = onlyOffers ? 'Ofertas' : 'Productos';
  const description = onlyOffers
    ? 'Equipos con descuento, ordenados para que encuentres la mejor oportunidad.'
    : 'Busca, filtra y compara todo el catálogo de NovaShop.';

  return (
    <>
      <PageHeader title={title} description={description}>
        <SearchBar value={filters.query} onChange={(value) => updateFilter('query', value)} />
      </PageHeader>

      <div className="container section-compact">
        <div className="row g-4">
          <div className="col-lg-3">
            <Button
              variant="outline-secondary"
              className="d-lg-none w-100 mb-3"
              onClick={() => setShowFilters((visible) => !visible)}
              aria-expanded={showFilters}
              aria-controls="filters-panel"
            >
              <i className="bi bi-sliders me-2" aria-hidden="true" />
              {showFilters ? 'Ocultar filtros' : 'Mostrar filtros'}
            </Button>
            <div id="filters-panel" className={`${showFilters ? '' : 'd-none'} d-lg-block`}>
              <ProductFilters
                filters={filters}
                maxCatalogPrice={maxCatalogPrice}
                hasActiveFilters={hasActiveFilters}
                showOffersFilter={!onlyOffers}
                onChange={updateFilter}
                onReset={resetFilters}
              />
            </div>
          </div>

          <div className="col-lg-9">
            <div className="catalog-toolbar">
              <p className="mb-0" role="status">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
              </p>
              <div className="catalog-sort">
                <label htmlFor="sort-select" className="form-label mb-0">
                  Ordenar por
                </label>
                <select
                  id="sort-select"
                  className="form-select"
                  value={filters.sortBy}
                  onChange={(event) => updateFilter('sortBy', event.target.value)}
                >
                  {SORT_OPTIONS.map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} columns="row-cols-1 row-cols-sm-2 row-cols-xl-3" />
            ) : (
              <EmptyState
                title="No encontramos productos"
                description="Prueba con otra búsqueda o limpia los filtros para ver todo el catálogo."
              >
                <Button onClick={resetFilters}>Limpiar filtros</Button>
              </EmptyState>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
