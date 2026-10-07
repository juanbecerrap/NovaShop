const BENEFITS = [
  { icon: 'bi-truck', title: 'Envío gratis', text: 'En todos los pedidos, sin mínimo de compra.' },
  { icon: 'bi-shield-lock', title: 'Pago seguro', text: 'Tus datos viajan protegidos en cada transacción.' },
  { icon: 'bi-headset', title: 'Soporte 24/7', text: 'Resolvemos tus dudas a cualquier hora.' },
  { icon: 'bi-patch-check', title: 'Garantía', text: '12 meses de garantía oficial en todos los equipos.' },
];

export default function BenefitsSection() {
  return (
    <section className="benefits" aria-label="Beneficios de comprar en NovaShop">
      <div className="container">
        <ul className="row g-4 list-unstyled mb-0">
          {BENEFITS.map(({ icon, title, text }) => (
            <li key={title} className="col-12 col-sm-6 col-lg-3">
              <div className="benefit">
                <i className={`bi ${icon}`} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
