# Gonzalo Cuadros · Web personal

Arquitectura frontend, DevOps y liderazgo técnico. Next.js App Router, React y TypeScript estricto.

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
```

Ejecuta formato, ESLint, tipos y compilación de producción. `npm run format` aplica el formato. GitHub Actions ejecuta `Quality checks` y `Production build` en cada PR y en `main`.

## Estructura

- `src/app`: rutas, metadatos y estilos; componentes de servidor por defecto.
- `.github`: CI, plantilla de PR y actualizaciones de dependencias.
- `docs`: decisiones y guía de despliegue.

Esta primera entrega contiene una portada provisional. La siguiente PR incorpora diseño, experiencia, proyectos y charlas.

## Flujo de trabajo

Ver [CONTRIBUTING.md](CONTRIBUTING.md). Los cambios se revisan mediante PR. La configuración pendiente de GitHub y Vercel se documenta en [despliegue](docs/deployment.md).
