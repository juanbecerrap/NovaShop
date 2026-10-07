import { useState } from 'react';

export default function ProductGallery({ images, name }) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="gallery">
      <div className="gallery-main">
        <img src={images[selected]} alt={`${name}, vista ${selected + 1} de ${images.length}`} width="600" height="600" />
      </div>
      <ul className="gallery-thumbs list-unstyled">
        {images.map((src, index) => (
          <li key={src}>
            <button
              type="button"
              className="gallery-thumb"
              onClick={() => setSelected(index)}
              aria-pressed={selected === index}
              aria-label={`Ver imagen ${index + 1} de ${name}`}
            >
              <img src={src} alt="" width="72" height="72" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
