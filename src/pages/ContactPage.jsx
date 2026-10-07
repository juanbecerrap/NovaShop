import { useState } from 'react';
import Button from '../components/Button';
import FormField from '../components/FormField';
import PageHeader from '../components/PageHeader';
import useForm from '../hooks/useForm';
import { validateContact } from '../utils/validators';

const INITIAL_VALUES = { name: '', email: '', message: '' };

const CONTACT_CHANNELS = [
  { icon: 'bi-envelope', label: 'Email', value: 'soporte@novashop.example' },
  { icon: 'bi-headset', label: 'Atención', value: 'Todos los días, 24 horas' },
  { icon: 'bi-geo-alt', label: 'Oficina', value: 'Atención 100% en línea' },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const { getFieldProps, handleSubmit, reset } = useForm(INITIAL_VALUES, validateContact);

  const sendMessage = () => {
    setSent(true);
    reset();
  };

  return (
    <>
      <PageHeader title="Contacto" description="¿Tienes dudas sobre un producto o un pedido? Escríbenos." />
      <div className="container section-compact">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-7">
            <form className="checkout-form" onSubmit={handleSubmit(sendMessage)} noValidate>
              {sent && (
                <div className="alert alert-success" role="status">
                  Mensaje enviado. Te responderemos en menos de 24 horas.
                </div>
              )}
              <div className="row g-3">
                <FormField label="Nombre" className="col-sm-6" type="text" autoComplete="name" {...getFieldProps('name')} />
                <FormField label="Email" className="col-sm-6" type="email" autoComplete="email" {...getFieldProps('email')} />
                <FormField label="Mensaje" className="col-12" as="textarea" rows={5} {...getFieldProps('message')} />
              </div>
              <Button type="submit" size="lg" className="mt-4">
                Enviar mensaje
              </Button>
            </form>
          </div>
          <div className="col-lg-5">
            <ul className="contact-channels">
              {CONTACT_CHANNELS.map(({ icon, label, value }) => (
                <li key={label}>
                  <i className={`bi ${icon}`} aria-hidden="true" />
                  <div>
                    <h2>{label}</h2>
                    <p>{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
