export default function PageHeader({ title, description, children }) {
  return (
    <header className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {children}
      </div>
    </header>
  );
}
