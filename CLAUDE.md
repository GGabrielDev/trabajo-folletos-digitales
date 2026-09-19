# CLAUDE.md - Pautas del Proyecto

## Comandos Útiles

```bash
npm run dev                      # Iniciar servidor de desarrollo local
npm run build                    # Compilar sitio estático (genera dist/)
BASE_PATH=/folleto npm run build # Compilar con ruta base personalizada
```

## Reglas de Desarrollo y Estilo

1. **Compromisos de Git**: Realizar un commit descriptivo en git por cada cambio lógico que se realice.
2. **Sistema de Diseño**:
   - Respetar los estilos visuales (`default`, `rounded-glass` y `timeline-step`) y asegurar soporte de modo claro/oscuro en todas las vistas.
   - Preservar la presencia del pie de patrocinadores (`<SponsorsFooter />`) en todo momento.
   - Utilizar rejillas flexibles (`flex flex-col`, `flex-1`) en las tarjetas para prevenir desbordes o textos cortados.
3. **Estilo de Comunicación**: Escribir respuestas al usuario en modo Caveman Full si se indica en el prompt.
4. **Idioma del Repositorio**: El contenido del sitio (texto de páginas, folletos, cadenas de UI) se escribe en español. Todo lo que se escribe *sobre* el repositorio y se publica en el remoto —títulos y cuerpos de pull requests, títulos y cuerpos de incidencias, comentarios de revisión y mensajes de commit— debe estar en inglés, sin excepción. Los términos de dominio en español (slugs de `Brochure`, `Protección Civil`, nombres de rutas) se conservan literalmente como identificadores dentro de la prosa en inglés.

## Agent skills

Configuración que asumen las skills de ingeniería (`/triage`, `/to-tickets`, `/to-spec`, `/implement`, etc.).

### Issue tracker

Las incidencias viven en Forgejo autoalojado (`PCivil/folletos-digitales` en `https://git.gaboggamer.online`), operado vía API REST con `curl`. Ver `docs/agents/issue-tracker.md`.

### Triage labels

Vocabulario de etiquetas por defecto: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. Ver `docs/agents/triage-labels.md`.

### Domain docs

Repositorio de contexto único: un `CONTEXT.md` + `docs/adr/` en la raíz. Ver `docs/agents/domain.md`.
