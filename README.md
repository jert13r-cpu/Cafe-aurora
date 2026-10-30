# Café Aurora

Landing responsive en español de Colombia para una membresía ficticia de café colombiano. Precios mensuales de ejemplo: $29.900, $49.900 y $69.900 COP. Es un sitio estático: abre `index.html` para probarlo localmente o publica la carpeta completa en Netlify, Vercel o GitHub Pages.

La página presenta dos beneficios, tres membresías y cuatro pasos que corresponden al flujo simulado de selección, resumen, formulario y confirmación. La ficha de origen (Finca Bruma Alta, San Agustín, altura, variedad, caficultora y fecha de tueste) es explícitamente ficticia y solo sirve como ejemplo editorial; reemplázala con información comprobada antes de ofrecer café real.

Las imágenes de las membresías están alojadas localmente en `assets/`. Son referencias compartidas por el usuario y muestran empaques de otras marcas; los nombres, cantidades y beneficios de Oro, Diamante y VIP son ilustrativos y deben confirmarse o reemplazarse antes de publicar una oferta real. La fotografía del hero también se sirve desde `assets/`; no hay imágenes de Unsplash.

## Flujo de la demo

Elige uno de los tres planes, revisa el resumen, completa nombre y correo y llega a una confirmación con una referencia ficticia. El formulario no se envía, no guarda información personal y no procesa pagos. No agregues datos reales.

## Medición de campaña

La página no tiene Analytics, Tag Manager ni otro receptor de métricas conectado. Por eso no muestra un aviso de consentimiento que sugiera que se recopilan datos: actualmente no se registra ni se envía analítica. Los siguientes enlaces UTM son ejemplos para cuando conectes una herramienta de medición:

- Instagram: `?utm_source=instagram&utm_medium=paid_social&utm_campaign=membresia_cafe_2026&utm_content=reel_cata`
- Búsqueda de Google: `?utm_source=google&utm_medium=cpc&utm_campaign=membresia_cafe_2026&utm_term=cafe_colombiano`

Usa valores en minúsculas y una convención consistente. Para medir visitas y conversiones, primero configura GA4 o una alternativa y conecta eventos para visita, selección del plan, inicio del flujo y confirmación; si activas cookies o scripts de terceros, implementa el consentimiento correspondiente. No envíes nombre ni correo como parámetros analíticos.

## SEO y publicación

La página incluye título y descripción únicos, HTML semántico, contenido rastreable, Open Graph, datos estructurados de producto y `robots.txt`. Tras publicar, añade el dominio definitivo a una etiqueta `canonical`, actualiza el `url` de datos estructurados y publica un sitemap con esa URL. Registra el dominio en Google Search Console y envía el sitemap para facilitar el descubrimiento; la indexación no es inmediata ni garantizada.

Para publicar gratis, sube esta carpeta a un sitio estático de Netlify, Vercel o GitHub Pages. Después, configura las etiquetas de dominio/canonical y crea enlaces UTM para cada anuncio. La publicación requiere acceso a una cuenta del proveedor elegido.

## Investigación aplicada

- [Google Analytics: recopilar datos de campañas con parámetros UTM](https://support.google.com/analytics/answer/10917952?hl=es): usar `utm_source`, `utm_medium` y `utm_campaign`, con nomenclatura coherente; se aplican además `utm_content` y `utm_term` para comparar creatividades y palabras clave.
- [Google Search: guía SEO para principiantes](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=es): contenido útil y rastreable, títulos/descripciones claros y sitemap/Search Console para ayudar a descubrir la página.
