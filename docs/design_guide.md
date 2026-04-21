# 🛠️ GUÍA DE DISEÑO DE INTERFAZ: ESTILO "PC-VENEZUELA"

**Instrucción para el Agente de IA:** Utiliza los siguientes parámetros de diseño, variables CSS, reglas tipográficas y estructuras de componentes para construir cualquier interfaz web. No te desvíes de la paleta de colores ni de la geometría estricta.

## 1. SISTEMA DE COLORES (Design Tokens)

El esquema de colores debe transmitir urgencia, oficialidad y seguridad. El Naranja es el protagonista absoluto.

- **Colores Principales (Brand):**
  - `--color-primary`: `#F25C05` (Naranja Rescate). Uso: Botones principales, fondos de tarjetas de alerta, elementos de acento, banners superiores.
  - `--color-secondary`: `#0F2147` (Azul Institucional Profundo). Uso: Fondos de secciones, barras de navegación, texto principal sobre fondos claros, overlays de imágenes.
  - `--color-tertiary`: `#FFB81C` (Amarillo Alerta). Uso: Iconos, subrayados, cintas de precaución (hazard stripes).
- **Colores Neutros:**
  - `--color-bg-light`: `#F8F9FA` (Blanco Humo). Uso: Fondo general de la web.
  - `--color-bg-dark`: `#071022` (Azul Noche). Uso: Fondos de pie de página y secciones oscuras.
  - `--color-text-dark`: `#1A1A1A` (Gris Casi Negro). Uso: Texto de párrafos.
  - `--color-text-light`: `#FFFFFF` (Blanco Puro). Uso: Texto sobre fondos primarios y secundarios.
- **Gradients (Cruciales para el estilo IG Post):**
  - `--gradient-overlay`: `linear-gradient(180deg, rgba(15, 33, 71, 0.4) 0%, rgba(15, 33, 71, 0.95) 100%)`. Uso: Sobre fotografías de rescate para asegurar la legibilidad del texto en blanco superpuesto.
  - `--gradient-alert`: `linear-gradient(135deg, #F25C05 0%, #D84A00 100%)`.

## 2. TIPOGRAFÍA

La tipografía debe ser "sans-serif", condensada, gruesa y autoritaria.

- **Fuente Principal (Titulares y Llamados a la Acción):** `Montserrat` o `Oswald`.
  - _Pesos:_ `700` (Bold) para titulares estándar, `900` (Black) para alertas críticas o cifras.
  - _Transformación:_ Todo en MAYÚSCULAS (`text-transform: uppercase`) para títulos H1, H2 y etiquetas.
  - _Interlineado (Line-height):_ `1.1` (muy comprimido para bloques de texto grandes).
- **Fuente Secundaria (Cuerpo de texto y detalles):** `Roboto` o `Inter`.
  - _Pesos:_ `400` (Regular) y `500` (Medium).
  - _Interlineado:_ `1.5` para asegurar legibilidad en comunicados de prensa.

## 3. GEOMETRÍA Y FORMAS (Shape Language)

Los posts de Protección Civil rara vez usan bordes redondeados suaves. La geometría es agresiva y técnica.

- **Border-Radius:** `--border-radius-base: 0px;` `--border-radius-sm: 2px;` `--border-radius-lg: 4px;`. Evita los círculos, excepto para avatares de usuario o el logo oficial.
- **Cortes Diagonales (Clip-Path):** Utilizar diagonales para enmarcar imágenes o separar secciones, simulando dinamismo y acción.
  - _CSS Rule:_ `clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);` para fondos de secciones.
- **Patrón de Cintas de Precaución (Hazard Stripes):** Usar en bordes de alertas importantes.
  - _CSS Rule:_ `background: repeating-linear-gradient(45deg, #FFB81C, #FFB81C 10px, #000000 10px, #000000 20px);` (Altura máxima de 4px a 8px como borde inferior o superior).

## 4. COMPONENTES DE INTERFAZ (UI Library)

### A. Tarjetas de Información (Information Cards / "IG Post Style")

Deberán imitar la proporción 1:1 o 4:5 de Instagram.

- **Estructura:** Contenedor relativo. Imagen de fondo en `cover`.
- **Overlay:** Aplicar `--gradient-overlay` siempre sobre la imagen.
- **Contenido interno:** Ubicado en la parte inferior (`justify-content: flex-end`).
- **Decoración:** Una franja gruesa naranja (`--color-primary`) en el borde izquierdo (ej. `border-left: 8px solid var(--color-primary)`).
- **Tipografía de tarjeta:** Título H3 en Montserrat Black, en mayúsculas, color blanco.

### B. Etiquetas (Badges / Tags)

Usadas para categorizar la información (ej. "CLIMA", "ALERTA", "REPORTE", "PREVENCIÓN").

- **Estilo:** Rectángulo perfecto. Fondo Naranja o Azul Secundario.
- **Texto:** Blanco, Roboto Bold, tamaño 11px o 12px, tracking (letter-spacing) ancho (`0.1em`).

### C. Botones (Calls to Action)

- **Botón Primario:** Fondo `--color-primary`, sin borde, texto blanco en mayúsculas (Montserrat Bold). Al hacer hover, oscurecer el fondo un 15% y agregar un desplazamiento ligero hacia arriba (`transform: translateY(-2px)`). Sombras duras, no difuminadas (`box-shadow: 4px 4px 0px var(--color-secondary)`).

### D. Banners de Alerta (Alert Ribbons)

- Ubicados en la parte superior de la página o entre secciones.
- Fondo Naranja. Texto centrado, con iconos de advertencia (Triángulos). Marquesina animada (ticker) si el texto es muy largo, emulando los noticieros de emergencia.

## 5. ICONOGRAFÍA E IMÁGENES

- **Iconos:** Sólidos, estilo "Material Design". No usar iconos de líneas finas (outline). Los iconos deben ser gruesos y altamente visibles. Ejemplos de uso frecuente: megáfonos, sirenas, termómetros, gotas de lluvia, escudos, helicópteros/ambulancias.
- **Imágenes:** Alto contraste, saturación ligeramente elevada en los naranjas y azules. Preferiblemente fotografías de uniformados en acción, vehículos de emergencia o mapas meteorológicos.

## 6. REGLAS DE ESTRUCTURACIÓN DE LAYOUT (Grid)

Para el agente de IA al generar el layout:

1.  **Hero Section:** Imagen a pantalla completa con overlay oscuro. Un bloque masivo de texto alineado a la izquierda con el titular de la noticia más reciente. Un patrón de puntos finos (`radial-gradient`) superpuesto sutilmente para darle textura de "equipo de radio/transmisión".
2.  **Grid de Noticias (Estilo Feed):** Un CSS Grid de 3 columnas (`grid-template-columns: repeat(3, 1fr)`) en escritorio, 1 columna en móvil. Sin espacio (gap) o con un gap muy grueso (ej. `24px`). Cada item del grid es una "Tarjeta de Información" (ver punto 4A).
3.  **Contraste de Secciones:** Alternar siempre entre fondo Blanco (`#F8F9FA`) y Azul Profundo (`#0F2147`). Nunca colocar dos secciones contiguas del mismo color.
4.  **Marca de Agua:** Colocar versiones vectoriales tenues (opacidad del 3% al 5%) del logo de Protección Civil (triángulo dentro de círculo) en los fondos de las secciones de texto para mantener el branding institucional.

## 7. INSTRUCCIÓN DIRECTA PARA EL AGENTE (Prompt Injection Meta-Rule)

_"Cuando recibas una solicitud para construir una sección web bajo este estilo, DEBES usar el sistema de colores definido, aplicar sombras duras, bordes rectos (0px radius) y fuentes en mayúsculas para los títulos. Tus contenedores principales deben parecer piezas gráficas de redes sociales exportadas a la web. Prioriza `display: flex`, usa `clip-path` para diagonales decorativas, y asegura que el contraste cumpla la norma WCAG AAA debido a que es una interfaz de emergencias"._

## 8. RESUMEN RÁPIDO DE APLICACIÓN

Esta sección complementa la guía anterior sin modificar ninguna de sus reglas.

- **Identidad visual base:** naranja de rescate + azul institucional + amarillo de alerta.
- **Jerarquía visual:** titulares en mayúsculas, muy pesados y con interlineado corto.
- **Lenguaje formal:** contenedores rectos, sombras duras y diagonales decorativas.
- **Patrones clave:** ribbons de alerta, hazard stripes, overlays oscuros sobre imágenes y branding institucional tenue en fondos.
- **Uso recomendado en este repositorio:** mantener una sola familia visual PC-VENEZUELA y variar únicamente superficies de lectura (por ejemplo, oscuro/claro) sin cambiar paleta ni geometría.

## 9. CHECKLIST DE IMPLEMENTACIÓN

Checklist práctico para revisar si una pantalla nueva respeta la guía:

1. ¿Usa `--color-primary`, `--color-secondary` y `--color-tertiary` como ejes visuales?
2. ¿Los títulos principales están en mayúsculas y con peso alto?
3. ¿Se evitaron bordes redondeados suaves fuera del logo?
4. ¿Los CTA usan sombras duras y desplazamiento ligero en hover?
5. ¿Las tarjetas con imagen aplican overlay oscuro y franja naranja?
6. ¿Existe contraste fuerte entre secciones claras y oscuras?
7. ¿La composición sigue sintaxis de alerta/noticiero más que estilo editorial decorativo?
