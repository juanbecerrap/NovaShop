import { useId } from 'react';

export default function FormField({ label, error, as = 'input', className = '', ...inputProps }) {
  const id = useId();
  const errorId = `${id}-error`;
  const Control = as;

  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <Control
        id={id}
        className={`form-control${error ? ' is-invalid' : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <div id={errorId} className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
}
