import { Link } from 'react-router-dom';

export default function Button({ variant = 'primary', size, to, className = '', children, ...props }) {
  const classes = ['btn', `btn-${variant}`, size && `btn-${size}`, className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
