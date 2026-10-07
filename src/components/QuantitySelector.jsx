export default function QuantitySelector({ value, onChange, label, min = 1, max = 10 }) {
  return (
    <div className="quantity-selector" role="group" aria-label={`Cantidad de ${label}`}>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
        aria-label={`Disminuir cantidad de ${label}`}
      >
        <i className="bi bi-dash-lg" aria-hidden="true" />
      </button>
      <output aria-live="polite">{value}</output>
      <button
        type="button"
        className="btn btn-outline-secondary"
        onClick={() => onChange(value + 1)}
        disabled={value >= max}
        aria-label={`Aumentar cantidad de ${label}`}
      >
        <i className="bi bi-plus-lg" aria-hidden="true" />
      </button>
    </div>
  );
}
