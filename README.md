# NovaShop

NovaShop es una tienda online de tecnología y accesorios desarrollada como proyecto de portafolio frontend.

La aplicación permite explorar productos, realizar búsquedas, aplicar filtros, gestionar un carrito de compras y completar un checkout simulado. Todo funciona desde el frontend, sin backend ni base de datos.

> **Nota:** Los productos, precios y pedidos son ficticios. No se procesan pagos reales.

## 🚀 Demo

**Live Demo:** https://novashop-b2529.web.app

**GitHub:** PENDIENTE

## 📸 Capturas

| Inicio                               | Catálogo                                  |
| ------------------------------------ | ----------------------------------------- |
| ![Inicio](docs/screenshots/home.png) | ![Catálogo](docs/screenshots/catalog.png) |

| Detalle de producto                      | Carrito                               |
| ---------------------------------------- | ------------------------------------- |
| ![Detalle](docs/screenshots/product.png) | ![Carrito](docs/screenshots/cart.png) |

| Checkout                                   | Vista móvil                           |
| ------------------------------------------ | ------------------------------------- |
| ![Checkout](docs/screenshots/checkout.png) | ![Móvil](docs/screenshots/mobile.png) |

## 🛠️ Tecnologías

* React 18
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3
* Bootstrap 5
* Bootstrap Icons
* React Router 6
* Context API
* LocalStorage
* Firebase Hosting

## ✨ Funcionalidades

* Página de inicio con hero, categorías, productos destacados, ofertas y beneficios.
* Catálogo con 16 productos distribuidos en 4 categorías:

  * Smartphones
  * Laptops
  * Audio
  * Accesorios
* Búsqueda en tiempo real por nombre o categoría.
* Filtros por categoría, precio máximo, rating y ofertas.
* Ordenamiento por precio, rating y popularidad.
* Página de detalle de producto con:

  * Galería de imágenes
  * Características
  * Selector de cantidad
  * Productos relacionados
* Carrito de compras con:

  * Agregar productos
  * Eliminar productos
  * Modificar cantidades
  * Vaciar carrito
  * Cálculo de subtotal, descuentos y total
* Persistencia del carrito mediante `localStorage`.
* Checkout simulado con validación de formulario.
* Pantalla de confirmación de pedido.
* Formulario de contacto.
* Diseño responsive y mobile-first.
* Accesibilidad básica mediante textos alternativos, etiquetas de formulario, foco visible y enlace para saltar al contenido.

## 📁 Estructura del proyecto

```text
src/
├── assets/        # Logo y recursos visuales
├── components/    # Componentes reutilizables
├── context/       # Estado global del carrito
├── data/          # Productos y categorías
├── hooks/         # Hooks personalizados
├── pages/         # Páginas de la aplicación
├── styles/        # Estilos personalizados
├── utils/         # Utilidades y validaciones
├── App.jsx        # Layout y configuración de rutas
└── main.jsx       # Punto de entrada

public/
└── products/      # Imágenes SVG de los productos
```

## ⚙️ Instalación y ejecución

### Requisitos

* Node.js 18 o superior
* npm

### Instalar dependencias

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:5173
```

### Generar build de producción

```bash
npm run build
```

### Previsualizar el build

```bash
npm run preview
```

## 💡 Decisiones técnicas

### Persistencia del carrito

El carrito almacena únicamente el `id` y la cantidad de cada producto en `localStorage`.

Los nombres, precios y demás datos se obtienen nuevamente desde el catálogo para evitar almacenar información duplicada o desactualizada.

### Filtrado y ordenamiento

La lógica de búsqueda, filtrado y ordenamiento está centralizada en el hook personalizado `useProductFilters`, que permite reutilizar la misma lógica en las páginas de Productos y Ofertas.

### Imágenes

Las imágenes de los productos se almacenan localmente como SVG para evitar depender de servicios externos.

## ☁️ Deployment

El proyecto está desplegado mediante Firebase Hosting.

**Production:** https://novashop-b2529.web.app

## 🎯 Objetivo del proyecto

Este proyecto fue desarrollado como parte de mi portafolio frontend para demostrar habilidades en desarrollo de interfaces web, arquitectura de componentes, manejo de estado, responsive design y deployment.

---

**Proyecto de portafolio — NovaShop**

