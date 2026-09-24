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

Editar el Markdown, regenerar el PDF y revisar las dos páginas visualmente. El generador verifica páginas, texto y cinco enlaces; actualizar esas comprobaciones si cambia intencionadamente la estructura. Abrir también la descarga desde la web. Incluir fuente y PDF en la misma PR.

El generador admite los encabezados, listas, negritas y enlaces usados en la fuente actual; no es un conversor Markdown general. El salto de página se sitúa antes de Áreas técnicas. El PDF tiene texto seleccionable, pero no está certificado como PDF accesible etiquetado.

Solo se versiona contenido público. PLAN.local.md, STATUS.local.md y las notas editoriales privadas del borrador no forman parte del CV. La fuente canónica para futuras ediciones es content/cv.md.

## Criterios editoriales

La trayectoria incluye Cash Converters, Freepik, Wuolah y MANGO (primero desde GFT), con aportaciones concretas por etapa. Codespace se recoge como colaboración docente entre junio de 2023 y agosto de 2024. Las denominaciones de formación conservan la información aportada por el titular. AWS, Azure, Kubernetes y Ansible se presentan exclusivamente como formación del máster, no como experiencia profesional. No añadir niveles de idiomas ni resultados cuantificados sin una fuente confirmada.
