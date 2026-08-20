# Dirección de diseño de la V2

> Propósito: convertir la identidad visual actual en un sistema capaz de soportar el nuevo contenido, móvil, accesibilidad y evolución futura.

## Concepto

### Editorial técnico en movimiento

La interfaz debe sentirse como una publicación editorial sobre resolución de sistemas: precisa, sobria, humana y ligeramente experimental. La estética técnica aparece en la retícula, las etiquetas, los flujos y el movimiento; la personalidad aparece en la escala, la composición, la fotografía y el espacio.

No buscamos una terminal, un dashboard ni una galería de tarjetas. Tampoco una pieza artística que obligue al visitante a descifrar el contenido.

## Rasgos esenciales

1. **Monocromía con profundidad.** Negro cálido o beige mineral, con contraste sobrio; la textura aporta atmósfera sin competir con el texto.
2. **Tipografía como arquitectura.** Los titulares organizan la página y crean composición, no son decoración superpuesta.
3. **Retícula visible.** Líneas, numeración y alineaciones hacen legible el sistema subyacente.
4. **Asimetría controlada.** Se permiten desplazamientos y cambios de escala, pero todos nacen de la misma retícula.
5. **Movimiento con intención.** Cada animación explica jerarquía, continuidad o interacción.
6. **Contenido siempre disponible.** La lectura no depende de hover, scroll preciso o de que termine una animación.

## Preservar y evolucionar

### Preservar

- uso dominante de negro y blanco;
- Telegraf como voz tipográfica principal;
- combinación de pesos extremos;
- titulares de gran escala;
- líneas de un píxel y microetiquetas;
- botones circulares delineados;
- grano y luces verticales sutiles;
- composición editorial asimétrica;
- interacción magnética como detalle excepcional;
- fotografía con recortes de carácter.

### Evolucionar

- de cuatro pantallas rígidas a una narrativa de longitud natural;
- de tamaños exclusivamente en `vw` a escalas fluidas con límites;
- de escritorio reducido a composiciones específicas por breakpoint;
- de animar letras a animar bloques y relaciones;
- de “proyectos” a casos que explican problema, proceso y resultado;
- de estilos globales dispersos a tokens y primitivas;
- de enlaces por coordenadas a navegación semántica.

### Evitar

- colores de acento introducidos solo para “modernizar”;
- tarjetas uniformes para todas las secciones;
- gradientes de moda sin función;
- iconos de tecnologías como protagonista;
- glassmorphism o sombras de interfaz SaaS;
- scroll secuestrado;
- loaders obligatorios;
- texto ilegible usado como textura;
- movimiento continuo en todos los elementos.

## Fundamentos del sistema

Los siguientes valores son punto de partida y deben validarse visualmente durante la fase de foundations.

### Color

| Token conceptual | Valor inicial | Uso |
| --- | --- | --- |
| `surface-canvas` | `#040200` | Fondo principal; conserva el negro cálido actual. |
| `surface-raised` | `#11100f` | Superficies puntuales con separación mínima. |
| `text-primary` | `#f8fafb` | Texto principal y líneas de alto contraste. |
| `text-secondary` | `rgba(248, 250, 251, 0.68)` | Texto de apoyo. |
| `text-tertiary` | `rgba(248, 250, 251, 0.5)` | Metadata no esencial con contraste AA. |
| `border-subtle` | `rgba(248, 250, 251, 0.24)` | Líneas y contornos secundarios. |
| `border-strong` | `rgba(248, 250, 251, 0.72)` | Controles y divisores activos. |

El tema claro invierte el sistema sobre un beige cálido `#f0ece2`, con texto `#1d1a17` y superficies elevadas `#e4ded1`. No es un modo blanco: debe conservar la temperatura, el grano y el carácter editorial del oscuro. No se define color de acento; ambos temas comparten jerarquía y composición.

La preferencia de tema se inicializa antes de la hidratación, respeta inicialmente la preferencia del sistema y se persiste localmente cuando la persona la cambia.

### Tipografía

Familia principal: Telegraf en UltraLight, Regular y UltraBold, condicionada a la verificación de licencia.

Roles:

- **Display:** UltraBold o UltraLight, según contraste de la composición.
- **Título de sección:** Regular o UltraBold.
- **Cuerpo:** Regular, con ancho de línea controlado.
- **Etiqueta y metadata:** Regular o UltraBold, mayúsculas con moderación.
- **Datos de flujo:** Regular, con tratamiento técnico pero nunca a costa de legibilidad.

Escala inicial fluida:

| Rol | Tamaño orientativo |
| --- | --- |
| Display principal | `clamp(3.5rem, 9vw, 10rem)` |
| Display secundario | `clamp(2.75rem, 6vw, 7rem)` |
| Título de sección | `clamp(2rem, 4vw, 4.5rem)` |
| Título de bloque | `clamp(1.25rem, 2vw, 2rem)` |
| Cuerpo grande | `clamp(1.125rem, 1.6vw, 1.5rem)` |
| Cuerpo | `clamp(1rem, 1.1vw, 1.125rem)` |
| Etiqueta | `clamp(0.75rem, 0.8vw, 0.875rem)` |

Reglas:

- Ningún contenido esencial puede quedar por debajo de 12 px; el cuerpo partirá de 16 px.
- El ancho de lectura recomendado será de 55–72 caracteres.
- Las mayúsculas se reservan para etiquetas, navegación y énfasis breve.
- El tracking negativo se usará solo en displays y con pruebas por breakpoint.
- La jerarquía semántica y la visual deben diseñarse juntas.

### Espaciado

Escala base propuesta: 4, 8, 12, 16, 24, 32, 48, 64, 96 y 128 px, expresada como tokens.

- Gutter de página: `clamp(1.25rem, 3.2vw, 3.5rem)`.
- Ancho máximo del contenido: entre 1.440 y 1.600 px.
- Separación vertical entre capítulos: fluida, normalmente entre 96 y 192 px en escritorio y entre 64 y 112 px en móvil.
- El espacio negativo debe tener intención narrativa; no debe depender de `height: 100vh` vacío.

### Retícula

- Escritorio: 12 columnas.
- Tablet: 6 columnas.
- Móvil: 4 columnas.
- Gaps fluidos con mínimo legible.
- Todas las desviaciones se anclan a líneas de la retícula.

El hero puede ocupar al menos `100svh`. El resto de secciones utilizará altura intrínseca. Se evitará imponer una pantalla por sección.

### Bordes y radios

- Línea estructural: 1 px.
- Píldora: radio completo.
- Imagen o panel grande: radio fluido entre 16 y 40 px.
- Botón circular: contorno fino, área interactiva mínima de 44 × 44 px.

Los radios deben ser pocos y consistentes. No todos los bloques necesitan contenedor.

### Textura y fondo

El fondo global conserva:

- grano de muy baja opacidad;
- una variante de nueve líneas de luz verticales heredadas de la V1;
- una variante de malla vectorial basada en nodos, conexiones y señales;
- una variante orbital construida a partir de `Background01.svg`;
- variación tonal casi imperceptible.

Las líneas recuperan las posiciones, escalas y duraciones distintas del portfolio original. Nacen bajo el viewport, lo atraviesan y desaparecen por arriba. La V2 conserva ese ritmo irregular, pero sustituye la animación de `top` por `transform` y elimina el listener React que comprobaba el final de página: la transición de contacto actual ya recoge el mismo fondo global.

La malla parte del concepto SVG aportado durante la iteración y se reconstruye como una nube determinista de nodos con coordenadas X, Y y Z. Las conexiones se orientan en el espacio mediante transformaciones CSS 3D y la escena oscila bajo una perspectiva real. Los nodos permanecen anclados y respiran con ritmos distintos; no existen señales ni puntos recorriendo las líneas. No hay estado cliente ni cálculo por frame. Ambos fondos comparten tokens específicos para dark y light.

La variante orbital conserva las treinta capas y la silueta del SVG de referencia, pero reutiliza un único trazado. Sus colores proceden de tokens del tema y el movimiento SMIL repetido se sustituye por una animación CSS lineal que puede desactivarse con las preferencias de accesibilidad.

La variante se elige en `src/app/config/background.ts` mediante `ACTIVE_BACKGROUND`: `network`, `background-01`, `legacy-lights` o `none`. El registro conserva las propuestas para compararlas sin modificar el layout ni duplicar lógica ambiental.

Condiciones:

- textura optimizada y pequeña;
- sin bloquear pintura o interacción;
- sin provocar banding o distraer de cuerpos largos;
- versión estática bajo `prefers-reduced-motion`;
- contraste verificado con la capa activa.

## Composición por capítulo

### Navegación

- Marca a la izquierda.
- Índice o enlaces a capítulos en el centro o extremo opuesto según ancho.
- CTA de contacto visible, sin convertir disponibilidad en promesa desactualizada.
- Sticky o fixed solo si no roba espacio ni interfiere con zoom.
- En móvil, patrón específico y legible; nunca la navegación de escritorio escalada.
- Todos los destinos serán enlaces reales a IDs estables.

### Hero

- Un único mensaje dominante: “Software Engineer. Conecto sistemas y equipos”.
- La especialización frontend y el recorrido desde contexto hasta producción forman el segundo nivel.
- “Del contexto a producción” funciona como remate o ancla de recorrido.
- Composición tipográfica de gran escala con una ruptura controlada entre pesos.
- El CTA de proceso se alinea a la izquierda del copy descriptivo, no en una fila inferior aislada.
- El movimiento de entrada no debe retrasar la lectura.

### Sistema de ingeniería

- Unifica proceso, capas y capacidades en seis momentos acumulativos.
- Empieza con una portada cinética que contiene el mensaje «Del cliente a producción». El copy conserva primero un tramo de lectura y se desvanece con el scroll. Después `SISTEMA` se contrae y se acopla mientras la placa continúa frontal. En ese punto la cubierta simulada se sustituye por el núcleo 3D real; solo después de ese relevo la placa adquiere profundidad e inclinación, antes de revelar los momentos del proceso o su progreso.
- En escritorio, el scroll ensambla un objeto 3D que rota y se desplaza de derecha a izquierda. No se cancelan eventos de rueda ni se altera la dirección del dispositivo.
- El objeto y el copy nunca compiten por el mismo espacio: contexto, contrato y sistema se leen a la izquierda; implementación, evidencia y producción, a la derecha.
- Cada módulo hace visible qué se incorpora al sistema y qué capacidades intervienen, sin volver a enumerarlas en otro capítulo.
- En móvil, con movimiento reducido o sin la interacción, el sistema se presenta montado y los seis momentos forman una secuencia vertical.

### Caso de estudio

- Debe ser el pico de evidencia de la página.
- Estructura: problema → investigación → hallazgo → solución → resultado.
- El flujo `URL → Router → CMS → configuración → API → transformación → frontend` puede convertirse en una pieza visual central.
- Incluir contexto, restricciones y decisiones; evitar screenshots decorativos sin explicación.
- Si hay más casos, usar páginas dedicadas o una navegación breve, no una cuadrícula extensa en home.

### Preguntas

- Tratar cada pregunta como golpe editorial.
- Alternar escala, alineación y espacio sin perder el orden de lectura.
- No convertirlas en acordeones salvo que exista contenido adicional real.

### Herramientas

- Las capacidades ya están integradas en el sistema de ingeniería; no se repiten como catálogo.
- Las tecnologías pueden aparecer como una línea o índice sobrio, no como logos flotantes.
- Mantener la frase “Son herramientas” como contraste visual.

### Sobre mí

- Combinar una fotografía fuerte con un bloque de lectura cómodo.
- El retrato no debe reducir el texto a una columna ilegible.
- En móvil, imagen y texto se apilan con un orden narrativo claro.

### Contacto

- Cierre amplio y sencillo.
- Una pregunta, una invitación y tres enlaces.
- El botón circular puede reaparecer aquí como eco del inicio.
- Email y enlaces deben funcionar sin JavaScript.

#### Requisito de identidad confirmado

La transición de la última sección de la V1 se conserva como firma visual de la V2. Al entrar en contacto, el fondo ambiental de pantalla completa debe recogerse en un marco interior con borde fino y radios amplios. La línea superior, la pregunta, el titular y el botón circular aparecen de forma acompasada dentro de ese nuevo espacio.

El copy actualizado será:

- **¿Hay un problema interesante que resolver?**
- **Hablemos.**

La nueva implementación debe reproducir la sensación de cierre de la V1 sin copiar su código, sin depender de posiciones rígidas y con una variante sin transición para `prefers-reduced-motion`.

## Movimiento e interacción

### Principios

1. El contenido existe antes de la animación.
2. El movimiento indica entrada, relación, estado o destino.
3. Las animaciones de scroll se ejecutan una vez salvo razón explícita.
4. No se anima cada carácter por defecto.
5. Hover nunca es la única forma de descubrir información.
6. La experiencia reducida mantiene la composición y elimina desplazamientos no esenciales.

El capítulo «Del cliente a producción» es la excepción explícita al tercer punto: su movimiento representa cómo se construye un sistema y está ligado al progreso, no es un revelado decorativo. Debe implementarse con un listener pasivo, una actualización por frame y transformaciones de composición, sin estado React por cada evento.

Los titulares “Engineer”, “y equipos” y “Son herramientas” incorporan una segunda excepción controlada: una rotación CSS ocasional inspirada en paneles split-flap. Solo gira una letra aislada cada varios segundos; nunca se anima una palabra completa ni se recorre en secuencia. No existe una línea de bisagra visible en reposo. El efecto no añade JavaScript cliente y desaparece con `prefers-reduced-motion`.

Los antiguos capítulos de mandamientos, capas y capacidades se sustituyen por una única secuencia. Una plataforma técnica —hasta `80svh` en desktop— atraviesa la pantalla de derecha a izquierda y recibe seis bloques tridimensionales distribuidos sobre un grid de `12 × 12`: contexto, contrato, flujo, código, evidencia y producción. Algunas áreas se solapan para formar piezas únicas en L. No existen pines decorativos; cada aterrizaje activa una pista ortogonal trazada sobre una capa intermedia de `24 × 24` hasta el núcleo. Un foco fijo en el centro altera la dirección de la sombra durante el recorrido. El texto ocupa el espacio contrario al objeto y, cuando ambos se cruzan, un velo desenfocado y degradado mantiene la lectura sin convertir el copy en una tarjeta.

Los saltos del titular de proceso son editoriales y están definidos por idioma. Pueden sumar una línea adicional en viewports estrechos, pero ninguna palabra se divide o trunca. La misma regla se aplica a los títulos con efecto split-flap: las letras se animan de forma independiente, mientras cada palabra permanece como una unidad indivisible.

### Ritmo inicial

- Microinteracción: 150–250 ms.
- Transición de componente: 300–500 ms.
- Revelado de sección: 500–800 ms.
- Easing de salida rápido y llegada suave; definir dos o tres curvas como tokens.
- Movimiento ambiental: lento y de baja amplitud.

### Firma de interacción

El botón circular magnético puede conservarse como gesto distintivo en un máximo de dos o tres puntos clave. Debe:

- seguir siendo un enlace o botón semántico;
- conservar un área de interacción estable;
- funcionar con teclado y touch;
- no perseguir al puntero fuera de un radio pequeño;
- desactivar magnetismo con movimiento reducido.

## Responsive

Responsive no significa escalar el lienzo. Cada composición debe reordenarse.

### Móvil

- Priorizar una columna de lectura.
- Mantener displays grandes, pero con límites mediante `clamp`.
- Convertir el ensamblaje 3D en una secuencia vertical: el sistema completo se muestra una vez y los seis momentos se leen sin sticky ni dependencia del gesto.
- Apilar imágenes de casos o mostrar una sola evidencia relevante.
- Aumentar controles y etiquetas, no reducirlos proporcionalmente.
- Evitar texto ornamental que genere overflow horizontal.

### Tablet

- Utilizar seis columnas para mantener asimetría sin apretar el contenido.
- Revisar navegación y combinaciones de imagen/texto de forma específica.

### Escritorio amplio

- Limitar el ancho del contenido para que la composición no se disperse.
- Permitir que fondo y márgenes absorban el espacio adicional.
- Evitar que el tamaño de texto crezca indefinidamente con el viewport.

## Accesibilidad como parte del estilo

- Contraste AA como mínimo para contenido y controles.
- Foco visible diseñado con la misma línea blanca del sistema.
- Orden de lectura coherente aunque la retícula sea asimétrica.
- Encabezados semánticos y landmarks claros.
- Objetivos interactivos de al menos 44 × 44 px.
- Enlaces distinguibles por más que color cuando aparecen en texto.
- Alternativas descriptivas para imágenes informativas; alt vacío para decoración.
- `prefers-reduced-motion` obligatorio.
- Scrollbar visible o sustituida únicamente con una solución accesible comprobada.
- No bloquear zoom ni depender del cursor personalizado.

## Primitivas que debería tener el sistema

- `PageShell`
- `SiteHeader`
- `SectionHeader` con índice, nombre y línea
- `DisplayHeading`
- `BodyCopy`
- `Chapter`
- `Flow`
- `CaseStudy`
- `Rule`
- `MagneticAction`
- `TextLink`
- `MediaFrame`
- `AmbientBackground`

Son responsabilidades conceptuales, no una orden para crear abstracciones prematuras. Una primitiva solo debe existir cuando haya repetición real o una regla de sistema que proteger.

## Checklist visual de aceptación

- La V2 sigue siendo reconocible como evolución de la web actual sin verla al lado.
- El hero conserva impacto en 360 px y en 1.920 px.
- Ningún texto esencial se usa como textura ilegible.
- El contenido puede leerse con animaciones desactivadas.
- No existe overflow horizontal en la página; la trayectoria del objeto 3D queda recortada por su viewport full-bleed.
- La retícula explica las asimetrías.
- Los tres pesos tipográficos tienen funciones diferenciadas.
- El grano es perceptible como atmósfera, no como ruido visual.
- Los botones circulares son excepciones con propósito.
- Los casos muestran razonamiento, no solo imágenes finales.
- La navegación funciona con enlaces, teclado y URL fragment.
- Móvil tiene una composición propia.
