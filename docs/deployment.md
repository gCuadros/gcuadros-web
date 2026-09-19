# GitHub y Vercel

## Configuración pendiente

1. Importar `gCuadros/gcuadros-web` en Vercel y seleccionar Next.js, raíz del repositorio y Node.js 22.
2. Usar `main` como rama de producción. Mantener previews automáticas para las PR.
3. No requiere variables de entorno ni servicios de pago para la base actual.
4. Tras la primera ejecución de CI, proteger `main`: exigir PR, los checks `Quality checks` y `Production build`, resolver conversaciones e impedir force pushes y borrados.
5. No exigir una aprobación propia en un repositorio con un solo mantenedor. Activarla cuando haya otro revisor.
6. Revisar la preview en móvil y escritorio antes de fusionar. Cada fusión en `main` publica en producción una vez conectado Vercel.
7. Configurar dominio, URL canónica y metadatos sociales cuando se confirme el dominio definitivo.

## Recuperación

Revertir la PR problemática mediante una nueva PR. Para una incidencia urgente, utilizar el rollback de Vercel y después sincronizar el cambio en GitHub.

No se ha conectado Vercel ni activado protección de ramas mediante estos archivos: son ajustes del servicio que deben verificarse por separado.
