import { useId } from 'react';

export default function SearchBar({ value, onChange, placeholder = 'Busca laptops, audio, smartphones…' }) {
  const inputId = useId();

  return (
    <div className="search-bar" role="search">
      <label htmlFor={inputId} className="visually-hidden">
        Buscar productos
      </label>
      <i className="bi bi-search search-bar-icon" aria-hidden="true" />
      <input
        id={inputId}
        type="search"
        className="form-control"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        autoComplete="off"
      />
      {value && (
        <button type="button" className="search-bar-clear" onClick={() => onChange('')} aria-label="Borrar búsqueda">
          <i className="bi bi-x-lg" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
