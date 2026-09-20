# GitHub y Vercel

## Estado verificado — 20 de septiembre de 2026

- El repositorio está conectado a Vercel: la PR #7 generó una preview automáticamente y su despliegue terminó correctamente.
- `main` está protegida: requiere PR, rama actualizada, conversaciones resueltas y los checks `Quality checks`, `Production build` y `Browser and accessibility`. Las reglas incluyen administradores y bloquean force pushes y borrados.
- No se exige aprobación de otro revisor al mantenedor único. Añadirla cuando haya otro revisor.
- La aplicación actual no necesita variables de entorno.

## Publicación pendiente

1. Revisar la preview de la PR antes de fusionarla. La revisión técnica comprobó escritorio, móvil, navegación y ausencia de errores de consola.
2. Confirmar en Vercel que `main` es la rama de producción y verificar el despliegue tras la fusión.
3. Confirmar el dominio definitivo antes de configurar URL canónica, sitemap y metadatos sociales dependientes del dominio.
4. La sesión local de Vercel CLI requiere renovar el login; esto no bloquea los despliegues de la integración GitHub.

## Recuperación

Revertir la PR problemática mediante una nueva PR. Para una incidencia urgente, utilizar el rollback de Vercel y después sincronizar el cambio en GitHub.
