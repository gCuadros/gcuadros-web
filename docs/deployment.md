# GitHub y Vercel

## Estado verificado — 23 de septiembre de 2026

- El repositorio está conectado a Vercel: la PR #7 generó una preview automáticamente y su despliegue terminó correctamente.
- `main` está protegida: requiere PR, rama actualizada, conversaciones resueltas y los checks `Quality checks`, `Production build` y `Browser and accessibility`. Las reglas incluyen administradores y bloquean force pushes y borrados.
- No se exige aprobación de otro revisor al mantenedor único. Añadirla cuando haya otro revisor.
- La aplicación actual no necesita variables de entorno.

## Operación y cierre

1. Revisar la preview de la PR antes de fusionarla. La revisión técnica comprobó escritorio, móvil, navegación y ausencia de errores de consola.
2. `main` genera despliegues Production: comprobado para d9b95d0 (PR #11). Tras cada fusión, verificar el nuevo commit y la página publicada.
3. El dominio definitivo se decide al final de contenido, diseño y validación. Después se configurarán canonical y sitemap. La imagen social ya se genera en el build, sin necesitar dominio comprado.
4. La sesión local de Vercel CLI requiere renovar el login; esto no bloquea los despliegues de la integración GitHub.

## Recuperación

Revertir la PR problemática mediante una nueva PR. Para una incidencia urgente, utilizar el rollback de Vercel y después sincronizar el cambio en GitHub.

La base de las imágenes sociales usa VERCEL_PROJECT_PRODUCTION_URL en producción y VERCEL_URL en previews; localmente usa localhost:3100. Esto no declara una URL canónica ni adelanta la elección del dominio.
