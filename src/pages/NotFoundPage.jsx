import Button from '../components/Button';
import EmptyState from '../components/EmptyState';

export default function NotFoundPage() {
  return (
    <div className="container section">
      <EmptyState icon="bi-compass" title="Página no encontrada" description="La dirección que buscas no existe o fue movida.">
        <Button to="/">Volver al inicio</Button>
      </EmptyState>
    </div>
  );
}
