# MiPortafolioAngular

Portafolio profesional bilingüe de **Erick Mata Torres**, construido con Angular 22, TypeScript y SCSS.

## Características

- Angular 22 con componentes standalone.
- Detección de cambios zoneless.
- Interfaz en español por defecto y selector para inglés.
- Tema claro y oscuro con persistencia local.
- Navegación responsive.
- Experiencia profesional con promociones internas en Contec.
- Proyectos filtrables y casos de estudio en modal.
- Estados transparentes para capturas, certificados y repositorios pendientes.
- Formulario de contacto mediante `mailto`.
- SEO básico, Open Graph y datos estructurados.
- Configuración para Netlify y Vercel.
- Toda la implementación técnica está nombrada en inglés.

## Requisitos

Angular 22.0.x requiere una de estas versiones de Node.js:

- Node.js `^22.22.3`
- Node.js `^24.15.0`
- Node.js `^26.0.0`

También se requiere npm.

## Instalación

```bash
cd MiPortafolioAngular
npm install
npm start
```

Abrir:

```text
http://localhost:4200
```

## Compilación

```bash
npm run build:production
```

La salida se genera en:

```text
dist/MiPortafolioAngular/browser
```

## Contenido pendiente

El proyecto conserva visibles estas áreas para completarlas progresivamente:

1. Capturas reales de proyectos con datos ficticios o anonimizados.
2. Enlaces definitivos de cada repositorio.
3. Certificados, cursos y constancias.
4. Currículum actualizado en español y, posteriormente, en inglés.
5. Dominio definitivo en `robots.txt` y `sitemap.xml`.

## Imágenes

- `public/assets/images/profile.webp`: fotografía profesional.
- `public/assets/images/maxsoft-logo.webp`: logotipo de MaxSoft México.
- `public/assets/images/projects/`: capturas futuras.

## Supabase

Supabase no es necesario para esta primera versión. Puede incorporarse posteriormente para:

- Guardar mensajes de contacto.
- Administrar proyectos desde un panel privado.
- Cargar certificados y capturas.
- Registrar analíticas personalizadas.

## Seguridad de proyectos públicos

Antes de publicar materiales relacionados con procesos industriales:

- Usar nombres y números de reloj ficticios.
- Sustituir fotografías reales por imágenes de demostración.
- No publicar planos, dimensiones, credenciales ni documentos internos.
- No incluir cadenas de conexión, claves, contraseñas o bases productivas.
