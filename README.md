# Gonzalo Cuadros · Web personal

Arquitectura frontend, DevOps y liderazgo técnico. Portfolio en Next.js App Router, React y TypeScript estricto, a partir del diseño aprobado en Pen.dev.

## Desarrollo

```sh
nvm use
npm ci
npm run dev
```

Abrir http://localhost:3000. Node.js 22; las dependencias quedan fijadas en `package-lock.json`.

## Validación

```sh
npm run check
npx playwright install chromium
npm run test:e2e
```

`check` ejecuta formato, ESLint, tipos y compilación de producción. Las pruebas de navegador necesitan ese build y arrancan el servidor de producción automáticamente en el puerto 3100.

GitHub Actions ejecuta `Quality checks`, `Production build` y `Browser and accessibility` en cada PR y en `main`. Incluye pruebas en 320, 390, 768 y 1440 px, análisis de accesibilidad, menú móvil y navegación por teclado.

## Estructura

- `src/app`: home, metadatos, estilos y tokens del diseño.
- `src/components`: secciones y navegación; solo el menú móvil necesita JavaScript de cliente.
- `src/lib/portfolio.ts`: enlaces y trayectoria.
- `tests`: pruebas de comportamiento y accesibilidad.
- `.github`: CI, plantilla de PR y actualizaciones de dependencias.
- `docs`: decisiones y guía de despliegue.

La home contiene presentación, especialidades, trayectoria, Hevy Coach MCP, charlas y contacto. El dominio definitivo y los contenidos aún no disponibles (foto, CV y casos extensos) quedan fuera de esta entrega.

## Flujo de trabajo

Ver [CONTRIBUTING.md](CONTRIBUTING.md). Los cambios se revisan mediante PR. Las decisiones técnicas están en [arquitectura](docs/architecture.md) y los pasos de publicación en [despliegue](docs/deployment.md).

## CV descargable

El PDF y su fuente editable están versionados. Consulta [cómo actualizar el CV](docs/cv.md).
