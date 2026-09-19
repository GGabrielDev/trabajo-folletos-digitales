# CONTEXT.md — Glosario de dominio

Vocabulario canónico del proyecto **Folletos Digitales**: sitio estático (Astro) que publica
folletos de autoprotección de Protección Civil (Venezuela). Los agentes deben usar estos términos
tal como se definen aquí y evitar sinónimos que induzcan a confusión. Los identificadores de
código (en inglés) se listan junto a cada término.

> Este repositorio tiene **dos modelos de contenido paralelos** que NO deben confundirse:
> `Brochure` (folletos tipo tarjeta) y `EmergencyTopic` (temas de emergencia extendidos). Ver abajo.

## Términos

### Folleto — `Brochure` (`src/data/brochures.ts`)
Guía compacta de un solo tema, compuesta por tarjetas (`BrochureCard`) y niveles de alerta
(`AlertLevel`). Se renderiza con `src/components/BrochurePage.astro`. Cada folleto tiene un `slug`.
Slugs actuales: `sismos`, `inundaciones`, `orden-publico`, `otros-riesgos` (folletos generales) y
`brigadas-escolares`, `plan-escolar-pegir`, `evacuacion-simulacros`, `senales-seguridad`
(folletos escolares de planificación).

### Tema de emergencia — `EmergencyTopic` (`src/data/emergencyTopics.ts`, `src/data/schoolEmergencyTopics.ts`)
Modelo de contenido **extendido y distinto** al de `Brochure`: incluye fases (`EmergencyPhase`),
nodos de mapa (`EmergencyMapNode`), infografía (`EmergencyInfographicItem`) y pasos visuales
(`EmergencyVisualStep`). Se renderiza con `src/components/EmergencyTopicSection.astro`. Cada tema
tiene un `id`. Ids actuales (en ambos archivos): `sismos`, `tsunamis`, `inundaciones`, `incendios`,
`deslizamientos`, `prevencion-sustancias-quimicas`.

- **`emergencyTopics`**: usado por la sección de Seguridad y Gestión de Riesgo.
- **`schoolEmergencyTopics`**: usado por el menú escolar (mismos ids, contenido adaptado a escuelas).

> Nota: el `slug` de un `Brochure` y el `id` de un `EmergencyTopic` pueden coincidir (p. ej.
> `sismos`) pero son entidades separadas con estructuras distintas. No intercambiarlos.

### Modo de lectura — `mode` (`BrochureMode`: `'dark' | 'light'`)
Superficie de lectura de un folleto. **Solo afecta la superficie visual** (oscuro/claro), no el
contenido. Se selecciona por ruta (p. ej. `/sismos-dark`, `/sismos-light`).

### Variante de estilo — `styleVariant` (`'default' | 'rounded-glass' | 'timeline-step'`)
Tratamiento visual del folleto, ortogonal al modo de lectura. `default` para los folletos
generales; los folletos escolares se generan en las tres variantes × dos modos.

### Menú / Submenú
Páginas de aterrizaje que enlazan a subpáginas:
- **Prevención Escolar** (`/prevencion-escolar`): expone los temas escolares y folletos de planificación.
- **Seguridad y Gestión del Riesgo** (`/prevencion-y-gestion-de-riesgo`): enlaza a subpáginas de tema (`/prevencion-y-gestion-de-riesgo/[topic]`).

### Sistema de diseño PC-VENEZUELA
Identidad visual institucional documentada en `docs/design_guide.md`: naranja de rescate + azul
institucional + amarillo de alerta, geometría recta (radios ~0px), sombras duras, cintas de
peligro (hazard stripes) y diagonales. Tokens y utilidades en `src/styles/global.css`.

### Pie de patrocinadores — `SponsorsFooter` (`src/components/SponsorsFooter.astro`)
Componente que debe estar presente en todas las vistas (regla de diseño del proyecto).

## Convenciones de vocabulario

- Usar **"modo de lectura"** para oscuro/claro y **"variante de estilo"** para
  `default`/`rounded-glass`/`timeline-step`. No llamar "variante" al modo de lectura.
- Usar **"folleto"** (`Brochure`) y **"tema de emergencia"** (`EmergencyTopic`) como conceptos
  distintos; no usar "folleto" para referirse a un `EmergencyTopic`.

Si un concepto necesario no está en este glosario, es señal de una posible brecha: registrarlo vía
`/domain-modeling` en lugar de inventar un sinónimo nuevo.
