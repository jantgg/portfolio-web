# Auditoría de la versión actual

> Alcance: revisión local del repositorio y renderizado en escritorio (1440 × 900) y móvil (390 × 844), 18 de agosto de 2026.

## Resumen ejecutivo

La versión actual tiene una identidad visual reconocible y con valor: tipografía editorial, blanco y negro, escala expresiva, grano, líneas, círculos y una relación cuidada entre movimiento y composición.

La implementación, sin embargo, está demasiado acoplada a una composición concreta de escritorio. No existe un sistema responsive real, la mayoría del árbol se ejecuta en cliente, las animaciones gestionan el DOM de forma imperativa y la estructura de contenido ya no responde al posicionamiento profesional deseado.

### Recomendación

Reconstruir la V2 desde una base limpia en una rama y un worktree propios. Mantener `main` intacta como referencia histórica y visual durante la migración. Portar decisiones, tokens y recursos seleccionados; no copiar componentes por defecto.

No se recomienda una rama huérfana. Partir de la historia existente permite conservar la documentación, comparar cambios y rastrear el origen de los recursos sin obligarnos a mantener el código actual.

## Estado del repositorio

- Una única rama local y remota: `main`.
- Next.js 14.0.3 con App Router.
- React 18 y JavaScript, sin TypeScript.
- 34 archivos JavaScript y 21 hojas CSS dentro de `src/app`.
- 25 componentes marcados explícitamente como cliente.
- Aproximadamente 4.157 líneas entre JavaScript y CSS del área auditada.
- 18 MB de imágenes fuente dentro de `src/app/components/img`.
- Fuentes Telegraf locales en tres pesos.
- README sin personalizar, procedente de `create-next-app`.
- No hay tests ni documentación de arquitectura o diseño.

## Verificación técnica

### Compilación

`npm run build` termina correctamente y genera una página estática.

- Ruta `/`: 61,8 kB propios y 146 kB de JavaScript en la primera carga según el build actual.
- El build recomienda instalar `sharp` para optimización de imágenes en producción.
- El lint no falla, pero informa de dependencias omitidas en dos efectos de `s2-p2.js`.

Que compile no significa que la base sea segura para evolucionar: el compilador no detecta buena parte de los problemas de arquitectura, accesibilidad, temporizadores o limpieza de animaciones.

### Dependencias

`npm audit` informa de 14 vulnerabilidades con el lockfile actual:

- 4 moderadas;
- 9 altas;
- 1 crítica.

La dependencia directa `next@14.0.3` concentra avisos importantes. La actualización debe abordarse como parte de la nueva base, no mediante un `audit fix --force` sobre la versión actual.

También aparecen dependencias candidatas a eliminación porque no tienen uso en `src`: `react-magic-motion`, `simplex-noise` y el paquete obsoleto `@types/gsap`. Tailwind está configurado, pero la interfaz actual se construye con CSS convencional.

## Auditoría visual

### Lo que funciona

#### Una identidad clara

El fondo casi negro, el blanco cálido, el grano y la ausencia de color decorativo crean una estética consistente. Se percibe más cercana a una pieza editorial o un estudio creativo que a una plantilla de portfolio.

#### Jerarquía tipográfica expresiva

Telegraf UltraLight, Regular y UltraBold permite contrastar titulares de gran escala con etiquetas técnicas pequeñas. El hero utiliza ese contraste con eficacia y tiene una silueta memorable.

#### Composición asimétrica

Los desplazamientos, columnas desiguales, líneas horizontales y contadores de sección aportan tensión visual. La web no depende de tarjetas genéricas y mantiene una voz propia.

#### Motivos reutilizables

- líneas finas que delimitan secciones;
- numeración y etiquetas pequeñas;
- botones circulares delineados;
- píldoras en navegación;
- fotografía con radios amplios;
- texto cinético y transiciones por scroll;
- contraste entre imagen, tipografía y espacio negativo.

Estos motivos deberían sobrevivir como un sistema, no como posiciones absolutas copiadas.

### Lo que no funciona

#### Móvil es una reducción del escritorio

No existe ninguna regla `@media` en las hojas CSS. Hay 65 usos de `vw`, 47 de `vh` y 26 posiciones absolutas o fijas. En 390 px, textos configurados a `0.8vw` o `1vw` quedan alrededor de 3–4 px y dejan de ser legibles.

La composición conserva sus columnas de escritorio en móvil: la fotografía se convierte en una franja estrecha, las tres imágenes de proyecto siguen en paralelo y la navegación completa se comprime en una sola fila.

#### Alturas rígidas

Las cuatro secciones principales dependen de `height: 100vh`. Esto fuerza el contenido a caber en una pantalla, incluso cuando necesita más espacio, e impide que el diseño responda con naturalidad a contenido nuevo, zoom, traducciones o dispositivos pequeños.

#### Desbordamiento fuera del lienzo

La captura completa produjo un ancho de documento de 85.786 px en escritorio y 23.231 px en móvil, pese a viewports de 1.440 px y 390 px. Los textos de marquee repetidos y transformados mantienen geometría muy lejos del viewport. Aunque el recorte visible oculte parte del problema, penaliza la robustez del layout y dificulta herramientas de captura y QA.

#### Legibilidad variable

La microtipografía y algunos textos animados quedan excesivamente pequeños o temporalmente atenuados. Varias capturas realizadas al entrar en una sección muestran texto a medio revelar; la información no debería depender de que una animación termine para poder leerse.

#### Contenido desactualizado respecto al objetivo

La narrativa actual se centra en “Full-stack enfocado en front”, una biografía breve, un listado repetido de tecnologías y proyectos iniciales. No demuestra todavía investigación, conexión de sistemas, toma de decisiones o impacto.

## Auditoría de experiencia y accesibilidad

### Navegación frágil

El navbar navega calculando offsets de `100vh`, `200vh` y `320vh`. Si cambia la altura de cualquier sección, los enlaces dejan de apuntar al contenido correcto. Deben utilizarse enlaces reales a secciones con identificadores y `scroll-margin`.

### Semántica insuficiente

- El navbar se representa con un `<section>` en vez de `<nav>`.
- El logotipo clicable es un `<div>`.
- Dos controles de navegación son `<a>` sin `href`.
- Parte de los enlaces de proyectos envuelve componentes que reciben `href`, pero el `href` no llega al elemento `<a>` real.
- El documento no define metadata: el título observado en navegador está vacío.
- No se aprecia una jerarquía de encabezados pensada como estructura documental.

### Teclado y foco

- Algunos botones eliminan `outline` sin aportar un foco alternativo.
- Las interacciones principales están diseñadas alrededor de hover y movimiento de ratón.
- El cursor global `crosshair` sustituye expectativas de interacción conocidas.
- La barra de scroll se oculta en todos los navegadores.

### Movimiento

No hay soporte para `prefers-reduced-motion`. La entrada fuerza un loader de unos 2,4 segundos aunque la página ya esté lista. Muchos textos se duplican carácter por carácter y dependen de GSAP para revelar su versión legible.

### Enlaces externos

Hay enlaces con `target="_blank"` sin una política consistente de `rel`. Los textos alternativos de proyectos son genéricos (`alt="imagen"`) y no describen el contenido.

## Auditoría de arquitectura

### Todo el documento se convierte en cliente

`layout.js` y `page.js` declaran `"use client"`. Esto impide aprovechar la separación natural de Server Components y hace que contenido esencialmente estático se hidrate en el navegador.

En la V2, el contenido y la estructura deberían renderizarse en servidor. Solo las islas que realmente necesiten estado, observers o animación deben ser componentes cliente.

### Estado distribuido sin necesidad

Cada sección incorpora providers con múltiples estados y setters, varios de ellos sin uso efectivo. Esto añade indirección sin aportar un modelo de dominio. Los estados locales de interacción deberían vivir cerca del componente que los necesita.

### Componentes monolíticos y contenido acoplado

`s3content.js` tiene unas 680 líneas y mezcla:

- datos de seis proyectos;
- control de hover;
- animaciones GSAP;
- estado de selección;
- enlaces externos;
- estructura y presentación.

La lista de tecnologías de la sección 2 se repite manualmente durante cientos de palabras para crear un marquee. Los datos deberían existir una sola vez y la repetición visual resolverse con una primitiva de presentación accesible.

### Animaciones imperativas sin ciclo de vida seguro

- Se crean numerosos `ScrollTrigger` sin destruirlos al desmontar.
- Algunos listeners se registran con funciones anónimas y se intentan eliminar con funciones anónimas nuevas, por lo que la limpieza no coincide.
- Hay `setTimeout` anidados sin cancelación.
- El listener global de `mousemove` se reinstala al cambiar estado.
- Se animan letras y nodos individuales en bucles, multiplicando timelines y trabajo del navegador.

La guía de implementación de la V2 debe centralizar el ciclo de vida de las animaciones y degradar correctamente cuando JavaScript o el movimiento estén limitados.

### CSS sin sistema

Las hojas son globales y dependen de nombres como `.opa0`, `.opa1`, `.bold`, `.navbar-btn` o `.div8-son`. Hay colisiones potenciales entre secciones, valores duplicados y estilos inline estructurales. No existen tokens para color, espacio, tipografía, radios, duración o easing.

### Duplicación

`circulo.js` y `circuloS4.js` son prácticamente la misma primitiva con distinto comportamiento de clic. La V2 debería separar la presentación del control de su destino y usar un enlace o botón semántico según la acción.

## Rendimiento y recursos

- Las imágenes fuente suman aproximadamente 18 MB; algunas alcanzan 4,5 MB.
- `noise.gif` pesa aproximadamente 740 kB y se dibuja como capa fija a pantalla completa.
- GSAP y sus plugins se importan en numerosos módulos cliente.
- Se duplican nodos de texto por carácter para varias animaciones.
- Se ejecutan listeners globales de scroll y ratón en componentes distintos.
- El fondo crea nueve luces animadas permanentemente.

La estética puede conservarse con menos coste: imágenes responsive optimizadas, una textura más ligera, observers compartidos, animaciones por bloque y carga diferida del código no esencial.

## Inventario de conservación

### Conservar como dirección

- Paleta monocromática y fondo negro ligeramente cálido.
- Familia Telegraf, tras verificar su licencia de uso y distribución.
- Contraste entre UltraLight, Regular y UltraBold.
- Grano sutil y profundidad ambiental.
- Escala tipográfica grande y editorial.
- Líneas, contadores y etiquetas técnicas.
- Botón circular como gesto de marca, usado con moderación.
- Composición asimétrica con una retícula consistente.
- Movimiento de revelado y respuesta al puntero, siempre opcional.
- Espacio negativo como parte activa del diseño.

### Conservar solo después de revisar

- Fotografía personal.
- Imágenes de proyectos iniciales.
- Archivo de fuente y sus pesos.
- Textura `noise.gif` como referencia visual, no necesariamente como asset final.
- Enlaces y datos de contacto.

### No portar por defecto

- Componentes actuales.
- Providers por sección.
- Navegación basada en múltiplos de viewport.
- Valores de posición y tamaño en `vw`/`vh`.
- Textos repetidos manualmente.
- Loader obligatorio.
- Animación carácter por carácter aplicada a todo.
- Clases globales utilitarias improvisadas.
- Dependencias sin uso.

## Decisión propuesta: reconstrucción limpia

| Criterio | Refactor incremental | V2 limpia en worktree |
| --- | --- | --- |
| Mantener la web actual disponible | Posible, con riesgo de regresiones | Sí, de forma natural |
| Cambiar arquitectura de renderizado | Costoso y gradual | Directo desde la base |
| Nuevo modelo de contenido | Obliga a desmontar secciones existentes | Se diseña desde el contenido |
| Preservar identidad visual | Sí | Sí, mediante tokens y QA comparativa |
| Riesgo de arrastrar deuda | Alto | Bajo |
| Trazabilidad histórica | Sí | Sí, si la rama nace de `main` |

La segunda opción encaja mejor con el tamaño del repositorio y la profundidad del cambio. La versión actual debe utilizarse como moodboard ejecutable, no como esqueleto de la nueva aplicación.
