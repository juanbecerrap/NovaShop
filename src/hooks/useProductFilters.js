import { useMemo, useState } from 'react';

export const SORT_OPTIONS = [
  { value: 'relevance', label: 'Destacados' },
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
  { value: 'rating', label: 'Mejor rating' },
  { value: 'popular', label: 'Más populares' },
];

const SORTERS = {
  relevance: () => 0,
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
  rating: (a, b) => b.rating - a.rating,
  popular: (a, b) => b.reviews - a.reviews,
};

const normalize = (text) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

export default function useProductFilters(products, initial = {}) {
  const maxCatalogPrice = useMemo(
    () => Math.ceil(Math.max(...products.map((product) => product.price)) / 100) * 100,
    [products],
  );

  const defaults = {
    query: '',
    category: 'all',
    maxPrice: maxCatalogPrice,
    onlyOffers: false,
    minRating: 0,
    sortBy: 'relevance',
  };

  const [filters, setFilters] = useState({ ...defaults, ...initial });

  const updateFilter = (name, value) =>
    setFilters((current) => ({ ...current, [name]: value }));

  const resetFilters = () => setFilters(defaults);

  const filteredProducts = useMemo(() => {
    const query = normalize(filters.query.trim());

    return products
      .filter((product) => {
        const searchable = normalize(`${product.name} ${product.category}`);
        return (
          (!query || searchable.includes(query)) &&
          (filters.category === 'all' || product.category === filters.category) &&
          product.price <= filters.maxPrice &&
          (!filters.onlyOffers || product.discount > 0) &&
          product.rating >= filters.minRating
        );
      })
      .sort(SORTERS[filters.sortBy]);
  }, [products, filters]);

  const hasActiveFilters =
    filters.query !== '' ||
    filters.category !== 'all' ||
    filters.maxPrice !== maxCatalogPrice ||
    filters.onlyOffers ||
    filters.minRating !== 0;

  return { filters, filteredProducts, maxCatalogPrice, hasActiveFilters, updateFilter, resetFilters };
}
