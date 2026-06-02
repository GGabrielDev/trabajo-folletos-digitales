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
