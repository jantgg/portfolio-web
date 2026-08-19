# Sistema de ingeniería y arquitectura narrativa

> Estado: implementado y validado localmente, 19 de agosto de 2026.

## Decisión

Los capítulos 02, 03 y 05 repetían la misma tesis: cómo trabajo, qué capas conecto y qué capacidades utilizo. La nueva arquitectura los convierte en un único capítulo 02. No se elimina su sustancia; se ordena como una transformación acumulativa desde la conversación con el cliente hasta producción.

La IA pasa a ser el capítulo 03 independiente. Los casos reales permanecen como capítulo 04 y funcionan como evidencia, no como una cuarta explicación del proceso.

## Secuencia editorial

1. **Contexto — No asumas. Pregunta.** Cliente, producto y negocio.
2. **Contrato — Haz explícito el contrato.** Diseño, criterios y comunicación.
3. **Sistema — Sigue el flujo completo.** CMS, APIs y frontend.
4. **Implementación — Construye para el mundo real.** Arquitectura, accesibilidad y rendimiento.
5. **Evidencia — Valida lo que importa.** Debugging, pruebas y calidad.
6. **Producción — Demuestra en producción.** Release, observabilidad y ownership.

## Sistema visual

Antes de comenzar la secuencia editorial existe una fase 00 de `220svh`. El núcleo ocupa inicialmente todo el viewport —incluida la navegación— y funciona como portada del capítulo con el copy «Del cliente a producción». El mensaje permanece durante el primer tramo y después se desvanece de forma gradual. A continuación aparece `SISTEMA` y el núcleo simulado se reduce y se desplaza mientras toda la placa continúa completamente frontal. Al terminar el acoplamiento se oculta esa cubierta y queda visible el núcleo tridimensional original de la placa. Existe un breve tramo frontal que hace perceptible el relevo; solo después la placa completa adquiere progresivamente su inclinación y orientación 3D. Solo cuando termina el giro aparecen el primer módulo, su copy y el indicador de progreso.

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
- Los barridos diagonales varían de grosor entre chips y se desvanecen sin cortes.
- No existe estado React actualizado durante el scroll.
- Móvil mantiene el orden de lectura y no produce overflow horizontal.
- La IA tiene cabecera y numeración propias antes de los casos.
