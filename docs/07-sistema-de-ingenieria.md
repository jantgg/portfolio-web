# Sistema de ingeniería y arquitectura narrativa

> Estado: implementado y validado localmente, 19 de agosto de 2026.

## Decisión

Los capítulos 02, 03 y 05 repetían la misma tesis: cómo trabajo, qué capas conecto y qué capacidades utilizo. La nueva arquitectura los convierte en un único capítulo 02. No se elimina su sustancia; se ordena como una transformación acumulativa desde la conversación con el cliente hasta producción.

La IA conserva su identidad de capítulo 03, pero deja de aparecer como un bloque desconectado. Se revela sobre la superficie del propio sistema al terminar el proceso. Los casos reales permanecen como capítulo 04 y funcionan como evidencia, no como una cuarta explicación del proceso.

## Secuencia editorial

1. **Contexto — No asumas. Pregunta.** Cliente, producto y negocio.
2. **Contrato — Haz explícito el contrato.** Diseño, criterios y comunicación.
3. **Sistema — Sigue el flujo completo.** CMS, APIs y frontend.
4. **Implementación — Construye para el mundo real.** Arquitectura, accesibilidad y rendimiento.
5. **Evidencia — Valida lo que importa.** Debugging, pruebas y calidad.
6. **Producción — Demuestra en producción.** Release, observabilidad y ownership.

## Sistema visual

Antes de comenzar la secuencia editorial existe una fase 00 de `220svh`. El núcleo ocupa inicialmente todo el viewport —incluida la navegación— y funciona como portada del capítulo con el copy «Del cliente a producción». El mensaje permanece durante el primer tramo y después se desvanece de forma gradual. A continuación aparece `SISTEMA` y el núcleo simulado se reduce y se desplaza mientras toda la placa continúa completamente frontal. Al terminar el acoplamiento se oculta esa cubierta y queda visible el núcleo tridimensional original de la placa. Existe un breve tramo frontal que hace perceptible el relevo; solo después la placa completa adquiere progresivamente su inclinación y orientación 3D. Solo cuando termina el giro aparecen el primer módulo, su copy y el indicador de progreso.

El capítulo comienza exactamente al terminar el hero: no conserva padding superior ni `scroll-margin`. La cabecera exterior `02 / 07 · Del cliente a producción` desaparece y su información pasa al marco interior de la portada negra como una meta sin divisor propio. El botón del hero aterriza en el primer píxel de esta superficie.

La portada construye su flujo de fondo exclusivamente con CSS: dos retículas elípticas de líneas finas se desplazan mediante animaciones lentas de `transform`. No existen SVG, canvas, Lottie ni repintados de cientos de paths. Las capas heredan el contraste del tema, cubren el viewport mediante recorte y vinculan su opacidad a la salida del copy, por lo que desaparecen antes de comenzar la contracción del núcleo. Con movimiento reducido no llegan a ejecutarse porque se utiliza el fallback estático del sistema.

La variante activa es `ChipPlatform`: una placa cuadrada biselada con doble marco, retícula, pistas ortogonales y un núcleo central. Comienza a la derecha y termina a la izquierda. En cada momento cae un chip desde arriba, aterriza sobre la plataforma y activa su conexión con el núcleo. Cada chip representa el conocimiento o responsabilidad incorporado. La inclinación vertical conserva una base estable y la rotación horizontal responde al recorrido del scroll.

La placa no muestra desde el inicio una superficie vacía de `3 × 3`. Tras acoplar el núcleo solo existe una pieza compacta alrededor de `SISTEMA`, con un margen base de `40px` y compensación adicional arriba y a la derecha para que el chaflán no reduzca ópticamente ese aire. Antes de recibir contexto, la sombra, el volumen y la superficie crecen juntas hasta ocupar el cuadrante superior izquierdo de `2 × 2`; antes de contrato se revela la tercera columna de las dos filas superiores; flujo conserva esa geometría; y antes de implementación aparece la fila inferior, completando la placa. El núcleo permanece fijo durante todo el crecimiento. Las pistas se recortan a los límites físicos de la superficie disponible y los detalles periféricos aparecen únicamente con la placa completa.

En desktop la pieza usa la altura del viewport como dimensión principal: ocupa hasta `80svh`, limitada también por el ancho disponible. La inclinación de la placa es de `47deg`, lo que reduce el exceso de superficie horizontal y acerca el sistema ligeramente al espectador. La escena incorpora un foco ambiental fijo en el centro de la pantalla. Mientras la placa lo atraviesa, su sombra cambia de derecha a izquierda y se acorta al pasar por el centro; el grosor de la pieza permanece separado de esa sombra para conservar una geometría coherente.

La ocupación de la placa responde a un grid de `12 × 12`. El núcleo utiliza el área central `5 / 5 / 8 / 8`; contexto combina `2 / 2 / 4 / 5` con `2 / 2 / 7 / 4`; flujo combina `2 / 10 / 7 / 12` con `5 / 9 / 7 / 12`; y producción combina `8 / 2 / 12 / 4` con `9 / 2 / 12 / 5`. Los solapes de cada pareja se interpretan como una única pieza sólida en L. Contrato, evidencia y código conservan sus áreas rectangulares independientes.

Los chips son bloques tridimensionales sin pines perimetrales. Cada uno se construye como una silueta superior y dos estratos de profundidad que respetan también las formas compuestas. Solo la tapa conserva un contorno estructural fijo con el path completo, incluidas las esquinas cóncavas. Las capas inferiores aportan volumen mediante color, pero no tienen bordes estáticos: así no aparece ningún trazo nuevo al acercarse a la placa. El núcleo `SISTEMA` utiliza la misma pila tridimensional que el resto de módulos.

Cada módulo emite tres ecos de profundidad desfasados. Nacen en la altura de la tapa y descienden continuamente por el eje Z hasta la placa manteniendo siempre escala `1`, de modo que el contorno completo continúa visible durante la aproximación. El ciclo dura `1.95s`; los desfases negativos mantienen siempre al menos un eco en movimiento. La animación de las estelas no corre globalmente desde que carga la página: se reinicia al activar cada chip, por lo que su fase respecto al aterrizaje es determinista y ningún contorno vuelve a nacer junto a la tapa en el último frame. Los chips pendientes permanecen en `opacity: 0` hasta que comienza su turno. Con `prefers-reduced-motion` estas estelas se eliminan.

La tapa de cada chip incorpora un barrido diagonal ambiental. No se repite como una banda uniforme: cada módulo define un grosor de núcleo y una distancia de caída diferentes. El color se interpola de forma continua hasta transparente en ambos extremos, evitando el corte transversal duro de una scanline de vídeo.

Las capas comparten sus coordenadas X/Y y se separan exclusivamente mediante `translateZ`. La placa modifica su rotación Y en función de la posición horizontal: parte aproximadamente en `-20deg`, queda frontal al cruzar el centro y termina cerca de `+20deg`. De este modo, el eje Z proyectado converge siempre hacia el centro superior del viewport: arriba-izquierda cuando la placa está a la derecha y arriba-derecha cuando está a la izquierda. La caída de cada pieza ocurre sobre ese mismo eje Z.

Las conexiones viven en una capa HTML independiente basada en una retícula intermedia de `24 × 24`. Cada ruta utiliza tres segmentos ortogonales que se encuentran sobre la misma intersección del grid, queda oculta bajo el módulo y el núcleo, y aumenta su contraste al conectarse. Así las pistas pueden doblarse sin cortes ni depender del SVG de la placa. El grid completo se escala de manera proporcional en desktop y móvil.

El copy puede solaparse parcialmente con la placa. Para mantener contraste sin ocultarla, cada bloque activo utiliza un velo del color del canvas con desenfoque de fondo y salida degradada hacia la escena. Este recurso solo existe en la narración sticky de desktop; se elimina en la secuencia vertical y en móvil.

La primera variante de cubos tridimensionales se conserva en `src/app/components/prototypes/CubeSystemPrototype.tsx` junto a su controlador. No forma parte del render activo, pero permanece disponible para comparar o recuperar su lenguaje espacial.

El movimiento se ejecuta en una única isla cliente. Un listener pasivo solicita una actualización por frame, escribe variables CSS directamente y solo cambia el estado discreto cuando entra una nueva etapa. Los textos, la geometría y la traducción siguen siendo Server Components.

La secuencia implementa además dos flechas para navegar entre siete hitos: portada y seis etapas. Por el momento permanecen ocultas visualmente, pero conservan su marcado, accesibilidad y controlador para poder reactivarlas sin reconstruir el comportamiento. Los botones no mantienen una animación paralela ni sustituyen el scroll; calculan la posición central del hito y avanzan linealmente, sin aceleración ni deceleración. El recorrido que incluye la portada dura `2.1s` porque concentra la transformación completa del sistema; los saltos entre etapas duran `0.35s`. La geometría del acoplamiento se mide una vez por tamaño de viewport para evitar forzar layout durante el trayecto. La posición vertical continúa siendo la única fuente de verdad y cualquier interacción manual cancela inmediatamente el salto, por lo que rueda, trackpad, barra de scroll y controles pueden alternarse sin desincronizar la escena. En el primer y último punto se desactiva la dirección que no tiene destino.

Dentro del tramo animado, Lenis acumula los pasos discretos de la rueda sobre un único objetivo y resuelve su movimiento en un solo loop. La entrada se clasifica una vez al comenzar cada ráfaga y mantiene esa decisión hasta que termina: una secuencia de muchos ticks nunca alterna entre el motor suavizado y el scroll nativo. Los gestos continuos de trackpad y Magic Mouse conservan el comportamiento del navegador durante toda su ráfaga. El controlador no suaviza el zoom por `ctrl`, el desplazamiento horizontal ni las interacciones táctiles, y cualquier entrada manual cancela la navegación programática previa.

## Puente hacia IA

Tras completar producción, los seis chips secundarios se despegan de la superficie por el eje Z, avanzan hacia cámara y desaparecen mediante profundidad, escala y desenfoque. El núcleo central inicia la misma salida con un pequeño desfase y también desaparece antes de completar el fullscreen. Al mismo tiempo, la placa deja de desplazarse lateralmente, vuelve al centro y se aplana. Su marco no se escala como una imagen: sus cuatro límites se expanden físicamente hasta sobrepasar ancho y alto del viewport. Así la retícula mantiene celdas regulares, los bordes conservan su grosor y la superficie sustituye por completo al canvas.

La cuadrícula completa permanece visible y actúa como contexto del siguiente mensaje. Sobre ella aparece la pregunta «¿Cómo mantengo mi foco y energía en tareas más cercanas al cliente y menos en código repetitivo?» dentro de un velo localizado con `backdrop-filter`; la placa no desaparece ni queda cubierta por una capa opaca a pantalla completa.

El botón «Ver el sistema» no abre una ruta ni sustituye el scroll. Avanza linealmente hasta el último tramo de la misma secuencia. La IA aparece directamente sobre la retícula, sin tarjeta, fondo, borde ni sombra propios. Su composición utiliza exactamente el ancho interior estándar de los capítulos —incluidos el límite máximo y los gutters responsivos— en lugar de convertirse en una superficie a pantalla completa. Tipografía, divisores, texto secundario y animación heredan los tokens de contraste del tema activo.

El titular absorbe la explicación principal y elimina el párrafo introductorio redundante. Debajo aparecen cuatro responsabilidades extraídas del sistema real y generalizadas en [IA como sistema de ingeniería](./08-ia-como-sistema-de-ingenieria.md): contexto versionado, flujos gobernados, validación automática y evidencia revisable. Cada bloque desarrolla mecanismo y resultado, separa explícitamente el índice del cuerpo y usa divisores rectos de mayor contraste, sin flechas ni piezas superpuestas. El conjunto sube para quedar ligado al titular y ganar protagonismo antes del cierre editorial.

La identidad queda reducida a una marca tipográfica «IA» que ocupa las cuatro columnas completas de la retícula superior. Se eliminan el descriptor y su línea inferior para evitar competir con el titular. Los glifos se extraen de `PPTelegraf-UltraBold.otf` y se convierten en outlines SVG; existen variantes `IA` y `AI` para mantener el cambio de idioma. El asset conserva nitidez a cualquier escala, invierte su color con el tema y utiliza el `100%` de la celda sin un tamaño tipográfico arbitrario. La separación posterior diferencia con claridad cabecera y flujo. El cierre elimina el divisor horizontal y se presenta en cursiva como una cita tipográfica completa. Sus comillas de apertura y cierre comparten escala y la cita comienza en la cuarta columna, aprovechando dos columnas adicionales respecto a la composición anterior.

El contenido entra mediante opacidad, desplazamiento vertical y una corrección mínima de escala. La animación orbital deja de ocupar una columna editorial y también abandona el container de IA: se renderiza como una capa hermana anclada al viewport completo de la placa, por detrás del contenido y con `opacity: 0.2`. Su diámetro utiliza `max(32rem, 70vw)`: conserva una presencia mínima en pantallas estrechas y continúa creciendo en desktop grande sin quedar bloqueado por un máximo fijo. Su centro se desplaza siempre medio diámetro fuera del borde inferior e izquierdo reales de la pantalla, de modo que únicamente permanece visible el cuadrante superior derecho y el movimiento acompaña a toda la superficie sin competir con el texto. El scroll principal continúa siendo la única interacción que controla la transformación exterior y la salida. En móvil y con movimiento reducido no existe esta coreografía: la placa aparece ensamblada, las seis etapas mantienen su lectura vertical y el capítulo de IA se muestra completo a continuación como un bloque estático y también transparente.

La vista final permanece completa —contenido, órbita y retícula— hasta abandonar físicamente el viewport; no existe un fundido artificial de salida. El panel utiliza coordenadas locales del contenedor sticky: su `top` no compensa la posición vertical cambiante del padre cuando este empieza a salir. La corrección horizontal del wrapper full-bleed se mide una vez por viewport, fuera del loop de scroll. Panel y contenido mantienen `overflow: visible`, no crean un scroll interno y no recortan la cita ni el último divisor. La capa de IA tampoco acepta eventos de puntero, por lo que nunca absorbe la rueda o el trackpad. Al terminar el sticky, Casos comienza sin padding superior adicional y su cabecera entra inmediatamente desde el borde inferior, desplazando la vista de IA de forma natural.

## Fallback

En móvil y con `prefers-reduced-motion` se omite también la portada a pantalla completa: el sistema aparece completamente ensamblado y los seis momentos se presentan como una secuencia vertical. Todo el contenido sigue disponible sin depender del sticky, de la rotación o de detectar la etapa activa.

## Criterios de aceptación

- Un único capítulo explica proceso, capas y capacidades.
- El núcleo `SISTEMA` ocupa por completo el viewport al entrar en el capítulo.
- El copy introductorio conserva un tramo de lectura y se desvanece antes de iniciar la contracción.
- La placa permanece totalmente frontal durante toda la contracción del núcleo.
- Al aterrizar, el núcleo simulado se sustituye por el componente tridimensional real antes de mover la placa.
- La inclinación tridimensional solo comienza cuando el núcleo ya está completamente acoplado.
- Su último frame coincide con la posición, tamaño y detalle del núcleo real de la placa.
- Ningún módulo, copy o indicador de progreso aparece antes de terminar el acoplamiento.
- La plataforma cruza la pantalla de derecha a izquierda y puede entrar bajo el copy sin comprometer su lectura.
- La escala de desktop responde primero a la altura útil del viewport.
- La sombra cambia de dirección respecto al foco central durante el recorrido.
- Cae y se conecta exactamente un chip por momento.
- La placa comienza ajustada al núcleo con hasta `40px` de margen y revela progresivamente `2 × 2`, dos filas de `3 × 2` y finalmente `3 × 3`.
- Cada ampliación termina antes de recibir el chip que necesita la nueva superficie.
- La etapa activa y la barra inferior responden al progreso vertical.
- Las flechas recorren portada y seis etapas en ambos sentidos mediante scroll suave.
- El scroll manual continúa disponible después de utilizar los controles.
- Una ráfaga de rueda acumula todos sus ticks sin invertir el sentido ni competir con el scroll nativo; trackpad y Magic Mouse permanecen nativos.
- Los barridos diagonales varían de grosor entre chips y se desvanecen sin cortes.
- No existe estado React actualizado durante el scroll.
- Móvil mantiene el orden de lectura y no produce overflow horizontal.
- Al completar el sexto chip, los módulos secundarios se levantan por el eje Z y abandonan la placa sin reaparecer ni cortar su volumen.
- La placa se centra, se aplana y rebasa tanto el ancho como el alto del viewport sin deformar su cuadrícula.
- La pregunta de transición se lee sobre un blur localizado y ofrece un botón funcional sin bloquear el scroll manual.
- El núcleo central desaparece por completo antes de presentar el contenido de IA.
- La IA no introduce una tarjeta opaca: conserva la retícula como único fondo.
- Su composición respeta el mismo ancho interior que el resto de capítulos.
- La órbita de IA queda fuera del container editorial, se recorta contra el viewport de la placa y solo muestra su cuarto superior derecho desde la esquina inferior izquierda.
- La vista de IA no se desvanece, no captura el trackpad y entrega el viewport directamente a la cabecera de Casos mediante el desplazamiento natural de la página.
- La IA mantiene cabecera y numeración propias antes de los casos.
