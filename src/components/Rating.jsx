const STAR_COUNT = 5;

const getStarIcon = (value, index) => {
  if (value >= index + 1) return 'bi-star-fill';
  if (value >= index + 0.5) return 'bi-star-half';
  return 'bi-star';
};

export default function Rating({ value, reviews }) {
  const rounded = Math.round(value * 2) / 2;
  const reviewsLabel = reviews != null ? `, ${reviews.toLocaleString('es-ES')} reseñas` : '';

  return (
    <div className="rating" role="img" aria-label={`Valoración de ${value.toFixed(1)} sobre 5${reviewsLabel}`}>
      <span className="rating-stars" aria-hidden="true">
        {Array.from({ length: STAR_COUNT }, (_, index) => (
          <i key={index} className={`bi ${getStarIcon(rounded, index)}`} />
        ))}
      </span>
      <span className="rating-value" aria-hidden="true">
        {value.toFixed(1)}
      </span>
      {reviews != null && (
        <span className="rating-count" aria-hidden="true">
          ({reviews.toLocaleString('es-ES')})
        </span>
      )}
    </div>
  );
}
