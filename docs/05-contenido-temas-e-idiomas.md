# Iteración — contenido, temas e idiomas

> Estado: arquitectura unificada vigente, 19 de agosto de 2026.

## Motivo

La primera implementación expresaba bien el posicionamiento, pero repetía la misma tesis en proceso, capas, preguntas, capacidades y herramientas. La revisión reduce explicaciones y deja que la composición y el caso demuestren parte del mensaje.

## Prueba de reducción

Se probó una arquitectura de seis capítulos, un proceso de cuatro movimientos y capacidades condensadas. La experiencia resultaba más ligera, pero eliminaba demasiada información útil para decidir con precisión qué debía desaparecer.

## Decisión vigente

La revisión confirma que proceso, capas y capacidades expresaban la misma idea tres veces. Se conserva su información útil, pero pasa a una única narración donde cada etapa añade una pieza al mismo sistema. La IA deja de formar parte de la cabecera de casos y recibe un capítulo propio. La arquitectura vigente queda en siete capítulos:

1. hero;
2. sistema de ingeniería en seis momentos;
3. IA aplicada al flujo de ingeniería;
4. tres casos reales;
5. herramientas;
6. sobre mí;
7. contacto.

La próxima reducción se hará de manera dirigida, indicando exactamente qué frases o bloques se ajustan, en lugar de eliminar capítulos completos.

## Temas

- **Oscuro:** negro cálido `#040200`, identidad principal heredada.
- **Claro:** beige mineral `#f0ece2`, inspirado en interfaces editoriales cálidas; nunca blanco puro.
- Ambos usan los mismos tokens semánticos, retícula, jerarquía y animación ambiental.
- La preferencia inicial sigue el sistema y cualquier selección manual se guarda en `portfolio-theme:v1`.
- El cambio no depende de React state global ni fuerza el resto del árbol a ejecutarse en cliente.

## Idiomas

- Locales iniciales: español (`/es`) e inglés (`/en`).
- Español es el idioma por defecto.
- `next-intl` resuelve negociación, rutas, mensajes y metadatos localizados.
- Las dos rutas se prerenderizan estáticamente.
- Los mensajes permanecen en servidor; el cliente recibe únicamente el texto renderizado.
- El selector de idioma usa enlaces reales y sigue funcionando sin JavaScript.

## Criterios de aceptación

- Siete capítulos sin repetición entre proceso, capas y capacidades.
- Tema oscuro y claro legibles en móvil y escritorio.
- Sin destello de tema incorrecto durante la carga.
- Español e inglés con `lang`, metadatos y rutas correctas.
- Sin scroll horizontal a 390 y 1.440 px.
- Animación final intacta en ambos temas.
- `prefers-reduced-motion`, contenido sin JavaScript y contraste AA conservados.
