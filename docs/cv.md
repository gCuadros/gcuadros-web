# Mantener el CV

- Fuente editable: `content/cv.md`.
- PDF publicado y versionado: `public/cv/gonzalo-cuadros-cv.pdf`.
- Generador: `scripts/build_cv.py`; resuelve las rutas desde su ubicación, sin depender del directorio de ejecución.
- La web ofrece la descarga en Trayectoria. Next.js sirve el archivo sin Python en producción.

## Actualizar

Con Python 3.12, crear un entorno fuera del repositorio e instalar las dependencias:

```sh
python3 -m venv /tmp/gcuadros-cv-venv
/tmp/gcuadros-cv-venv/bin/pip install -r scripts/requirements-cv.txt
/tmp/gcuadros-cv-venv/bin/python scripts/build_cv.py
```

Editar el Markdown, regenerar el PDF y revisar las dos páginas visualmente. El generador verifica páginas, texto y seis enlaces; actualizar esas comprobaciones si cambia intencionadamente la estructura. Abrir también la descarga desde la web. Incluir fuente y PDF en la misma PR.

El generador admite los encabezados, listas, negritas y enlaces usados en la fuente actual; no es un conversor Markdown general. El salto de página se sitúa antes de Competencias técnicas. El PDF tiene texto seleccionable, pero no está certificado como PDF accesible etiquetado.

Solo se versiona contenido público. PLAN.local.md, STATUS.local.md y las notas editoriales privadas del borrador no forman parte del CV. La fuente canónica para futuras ediciones es content/cv.md.

## Criterios editoriales

La trayectoria incluye Cash Converters, Freepik, Wuolah y MANGO (primero desde GFT), con aportaciones concretas por etapa. Codespace se recoge como colaboración docente entre junio de 2023 y agosto de 2024. Las denominaciones de formación conservan la información aportada por el titular. AWS, Azure, Kubernetes y Ansible se presentan exclusivamente como formación del máster, no como experiencia profesional. No añadir niveles de idiomas ni resultados cuantificados sin una fuente confirmada.

## Lectura automatizada y adaptación a ofertas

Revisión del 24 de septiembre de 2026. PDF de una columna y texto seleccionable, sin tablas ni imagen de fondo; nombre y enlaces visibles en el cuerpo. El generador verifica que el texto de la fuente aparece en orden en la extracción PDF. Esto comprueba la capa de texto, no certifica un parser ATS ni mide una probabilidad de contratación.

El CV base prioriza Frontend Tech Lead. Mantener cargos reales y competencias respaldadas por experiencia; adaptar resumen y orden de aportaciones a cada oferta sin copiar requisitos no acreditados. Para Staff, aportar decisiones técnicas, alcance transversal y resultados verificables. Para Engineering Manager, distinguir mentoría y liderazgo técnico de gestión formal de personas. No sustituir el título actual por un cargo aspiracional.

Antes de enviar una candidatura: comprobar campos autocompletados, usar el formato exigido por el portal y añadir el contacto profesional que el titular quiera compartir. El CV público no contiene email ni teléfono: no inferirlos. Preparar una versión inglesa solo cuando sea necesaria, sin inventar nivel de idioma. Las métricas requieren evidencia; no convertir responsabilidades en resultados numéricos ficticios.

Fuentes primarias consultadas:

- [Greenhouse: problemas de parsing](https://support.greenhouse.io/hc/en-us/articles/200989175-Unsuccessful-resume-parse).
- [Greenhouse: Talent Matching](https://support.greenhouse.io/hc/en-us/articles/41396009937307-Talent-Matching): criterios y pesos definidos por vacante; el score no es universal ni equivale a decisión automática de rechazo.

No se ha subido el CV a servicios externos de scoring. Sin oferta objetivo ni acceso al sistema del empleador no se afirma ninguna puntuación ATS.

## Comprobación en cada PR

El check obligatorio `Quality checks` ejecuta `scripts/verify_cv.py` sobre el PDF versionado, sin regenerarlo. Comprueba dos páginas, igualdad del texto visible en orden (ignorando viñetas y pies de página) y destinos de enlaces contra `content/cv.md`. Detecta cambios de fuente sin actualizar el PDF, incluso eliminaciones de texto o cambios de URL. El generador reutiliza esta misma comprobación.

Para ejecutarla localmente con las dependencias instaladas:

```sh
python scripts/verify_cv.py
```

La prueba no comprueba la presentación visual ni reproduce el parser o scoring de un ATS comercial.
