# CLAUDE.md – Sincro Chat Marketing Website

## 🧭 Contexto del Proyecto

**Sincro Chat** es una plataforma SaaS que permite a restaurantes y negocios recibir pedidos directamente por WhatsApp, sin apps, sin comisiones de marketplaces, con su propio flujo de atención al cliente.

Este repositorio es el **sitio web de marketing y SEO** de Sincro Chat. Su propósito es:
- Explicar qué hace Sincro Chat y cómo funciona
- Captar leads de restaurantes y negocios interesados
- Posicionarse en Google (SEO orgánico) para búsquedas relevantes
- Proyectar credibilidad y profesionalismo como producto SaaS

**No es una app funcional. Es un sitio de contenido y conversión.**

---

## ⚙️ Stack Tecnológico (FIJO – no sugerir alternativas)

| Capa | Tecnología |
|------|-----------|
| Framework | **Astro** (SSG / SSR selectivo) |
| Componentes interactivos | **React** (islands architecture) |
| Estilos | **Tailwind CSS** |
| Fuentes | Google Fonts o Fontsource (definir por diseño) |
| Íconos | Lucide React |
| Animaciones | CSS nativo + Framer Motion (solo en islands React) |
| SEO | Astro SEO component + meta tags manuales |
| Analytics | Script tag (Google Analytics / Plausible, a definir) |
| Deploy | Vercel o Cloudflare Pages |

---

## 📐 Principios Obligatorios

### Arquitectura
- Usar **Astro pages** para todas las rutas estáticas
- Usar **React islands** solo cuando haya interactividad real (formularios, acordeones, modales)
- Todo lo que pueda ser HTML estático, **debe serlo** (mejor Lighthouse score)
- Separar layouts, componentes y secciones en carpetas claras

### SEO (Prioridad Máxima)
- Cada página debe tener `<title>`, `<meta description>`, `<canonical>` únicos y optimizados
- Usar **estructura semántica HTML5** correcta: `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`, `<h1>`...`<h6>`
- Solo **un `<h1>` por página**
- Imágenes con `alt` descriptivo siempre
- Generar **sitemap.xml** con `@astrojs/sitemap`
- Generar **robots.txt** estático
- Open Graph + Twitter Cards en todas las páginas
- Schema.org markup (JSON-LD) donde aplique: `Organization`, `SoftwareApplication`, `FAQPage`
- Core Web Vitals: apuntar a Lighthouse ≥ 90 en todas las métricas
- Lazy loading en imágenes por defecto (`loading="lazy"`)
- Evitar render-blocking resources

### Performance
- Imágenes en formato **WebP/AVIF** usando `<Image />` de Astro
- Fuentes con `font-display: swap`
- Islands con `client:visible` o `client:idle` por defecto, nunca `client:load` sin justificación
- CSS Tailwind purgado automáticamente en build

### Diseño y UI
- Mobile-first en todo momento
- Sistema de colores definido como variables CSS y en `tailwind.config`
- Tipografía con escala clara y consistente
- No usar estilos inline (solo Tailwind classes o CSS modules si hace falta)
- Componentes con props explícitas y tipadas (TypeScript)

---

## 🗂️ Estructura de Carpetas

```
/
├── public/
│   ├── robots.txt
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── ui/               # Componentes genéricos: Button, Badge, Card...
│   │   ├── sections/         # Secciones de página: Hero, Pricing, FAQ...
│   │   └── layout/           # Header, Footer, Navigation
│   ├── islands/              # Componentes React con interactividad
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout base con SEO
│   ├── pages/
│   │   ├── index.astro       # Home
│   │   ├── precios.astro     # Pricing
│   │   ├── como-funciona.astro
│   │   ├── blog/             # Blog para SEO de largo plazo
│   │   └── contacto.astro
│   ├── content/              # Astro Content Collections (blog, FAQs)
│   ├── data/                 # JSON/TS con datos estáticos (features, testimonials)
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

---

## 🎨 Identidad Visual

**Tono**: Profesional, moderno, confiable. Tecnología accesible para negocios reales.

**Paleta** (definir en `tailwind.config` como colores custom):
- Primary: verde WhatsApp adaptado o color de marca de Sincro Chat
- Neutral: grises cálidos para fondos y texto
- Accent: para CTAs y highlights
- Dark mode: opcional, definir desde el inicio si se va a soportar

**Tipografía**:
- Display/Headlines: fuente con carácter (no Inter, no Arial)
- Body: fuente legible y neutral
- Definir en `@font-face` o Fontsource, nunca en `<link>` inline por performance

---

## 📄 Páginas y Contenido

### `/` – Home
El objetivo es captar atención y llevar al CTA principal.
- Hero con propuesta de valor clara en `<h1>`
- Sección "Cómo funciona" (3 pasos)
- Beneficios / Features (iconos + texto)
- Social proof: logos de negocios, testimoniales
- Sección de precios resumida (link a `/precios`)
- FAQ rápido
- CTA final

### `/como-funciona`
Explicación detallada del flujo: negocio → catálogo → WhatsApp → pedido.

### `/precios`
Tabla de precios con planes. Schema.org `Offer` si aplica.

### `/blog`
Artículos optimizados para SEO long-tail. Usar Astro Content Collections.
Ejemplos de keywords: "cómo recibir pedidos por WhatsApp", "sistema de pedidos para restaurantes".

### `/contacto`
Formulario de lead capture (React island). Puede enviar a n8n webhook.

---

## 🔍 SEO – Reglas Específicas

### Keywords primarias a trabajar:
- "pedidos por WhatsApp"
- "sistema de pedidos para restaurantes"
- "catálogo digital WhatsApp"
- "SaaS pedidos WhatsApp Colombia" (y otros países)

### Cada página debe incluir:
```astro
---
// En BaseLayout.astro o como props
const { title, description, canonicalURL, ogImage } = Astro.props;
---
<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:card" content="summary_large_image" />
</head>
```

### JSON-LD en Home:
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Sincro Chat",
  "applicationCategory": "BusinessApplication",
  "description": "Sistema de pedidos por WhatsApp para restaurantes y negocios",
  "offers": { "@type": "Offer", "priceCurrency": "COP" }
}
```

---

## ✅ Checklist antes de hacer commit

- [ ] La página tiene `<title>` y `<meta description>` únicos
- [ ] Solo un `<h1>` en la página
- [ ] Todas las imágenes tienen `alt`
- [ ] Los islands React usan `client:visible` o `client:idle`
- [ ] No hay `console.log` en producción
- [ ] TypeScript sin errores (`tsc --noEmit`)
- [ ] Tailwind classes no tienen estilos inline duplicados
- [ ] Imágenes pasan por `<Image />` de Astro (no `<img>` directo)

---

## 🚫 Restricciones

- **No** usar `client:load` en islands sin justificación explícita
- **No** importar librerías pesadas sin revisar el bundle impact
- **No** crear lógica de negocio en el frontend (esto es un sitio estático de marketing)
- **No** hardcodear textos de UI directamente en componentes; usar props o archivos de data
- **No** usar CSS inline si Tailwind puede resolverlo
- **No** usar `<img>` directo; siempre `<Image />` de Astro para optimización automática
- **No** crear rutas dinámicas innecesarias; el sitio es mayoritariamente estático

---

## 🤖 Instrucciones para Claude Code

Cuando trabajes en este proyecto:

1. **Siempre pregunta** si una nueva sección o página tiene keywords SEO definidas antes de crearla
2. **Genera el markup semántico correcto** desde el primer borrador, no como refactor posterior
3. **Propón el JSON-LD** apropiado para cada tipo de página
4. **Usa TypeScript** en todos los componentes React (`.tsx`)
5. **Documenta props** con comentarios JSDoc cuando no sean obvias
6. Cuando crees un componente nuevo, **verifica si ya existe algo similar** en `/components/ui` antes de duplicar
7. Si necesitas animaciones, **primero intenta con CSS puro**; solo usa Framer Motion si la animación lo requiere
8. Todo texto visible que sea contenido de marketing debe vivir en **`/src/data/`** o en **Content Collections**, no embebido en el componente
