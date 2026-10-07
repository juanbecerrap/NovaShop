import { useId } from 'react';
import { CATEGORIES } from '../data/categories';
import { formatPrice } from '../utils/format';
import Button from './Button';

const RATING_OPTIONS = [
  { value: 0, label: 'Todos' },
  { value: 4, label: '4 estrellas o más' },
  { value: 4.5, label: '4,5 estrellas o más' },
];

export default function ProductFilters({
  filters,
  maxCatalogPrice,
  hasActiveFilters,
  showOffersFilter = true,
  onChange,
  onReset,
}) {
  const id = useId();
  const categoryOptions = [{ name: 'Todas', value: 'all' }, ...CATEGORIES.map(({ name }) => ({ name, value: name }))];

  return (
    <form className="filters-card" onSubmit={(event) => event.preventDefault()} aria-label="Filtros de productos">
      <fieldset className="filters-group">
        <legend>Categoría</legend>
        {categoryOptions.map(({ name, value }) => (
          <div className="form-check" key={value}>
            <input
              className="form-check-input"
              type="radio"
              name={`${id}-category`}
              id={`${id}-category-${value}`}
              checked={filters.category === value}
              onChange={() => onChange('category', value)}
            />
            <label className="form-check-label" htmlFor={`${id}-category-${value}`}>
              {name}
            </label>
          </div>
        ))}
      </fieldset>

      <div className="filters-group">
        <label htmlFor={`${id}-price`} className="filters-legend">
          Precio máximo: <strong>{formatPrice(filters.maxPrice)}</strong>
        </label>
        <input
          id={`${id}-price`}
          type="range"
          className="form-range"
          min="0"
          max={maxCatalogPrice}
          step="50"
          value={filters.maxPrice}
          onChange={(event) => onChange('maxPrice', Number(event.target.value))}
        />
        <div className="d-flex justify-content-between small text-muted" aria-hidden="true">
          <span>{formatPrice(0)}</span>
          <span>{formatPrice(maxCatalogPrice)}</span>
        </div>
      </div>

      <fieldset className="filters-group">
        <legend>Rating</legend>
        {RATING_OPTIONS.map(({ value, label }) => (
          <div className="form-check" key={value}>
            <input
              className="form-check-input"
              type="radio"
              name={`${id}-rating`}
              id={`${id}-rating-${value}`}
              checked={filters.minRating === value}
              onChange={() => onChange('minRating', value)}
            />
            <label className="form-check-label" htmlFor={`${id}-rating-${value}`}>
              {label}
            </label>
          </div>
        ))}
      </fieldset>

      {showOffersFilter && (
        <div className="filters-group">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id={`${id}-offers`}
              checked={filters.onlyOffers}
              onChange={(event) => onChange('onlyOffers', event.target.checked)}
            />
            <label className="form-check-label" htmlFor={`${id}-offers`}>
              Solo productos en oferta
            </label>
          </div>
        </div>
      )}

      <Button variant="outline-secondary" className="w-100" onClick={onReset} disabled={!hasActiveFilters}>
        Limpiar filtros
      </Button>
    </form>
  );
}
