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

La variante activa es `ChipPlatform`: una placa cuadrada biselada con doble marco, retícula, pistas ortogonales y un núcleo central. Comienza a la derecha y termina a la izquierda. En cada momento cae un chip desde arriba, aterriza sobre la plataforma y activa su conexión con el núcleo. Cada chip representa el conocimiento o responsabilidad incorporado. La inclinación vertical conserva una base estable y la rotación horizontal responde al recorrido del scroll.

En desktop la pieza usa la altura del viewport como dimensión principal: ocupa hasta `80svh`, limitada también por el ancho disponible. La inclinación de la placa es de `47deg`, lo que reduce el exceso de superficie horizontal y acerca el sistema ligeramente al espectador. La escena incorpora un foco ambiental fijo en el centro de la pantalla. Mientras la placa lo atraviesa, su sombra cambia de derecha a izquierda y se acorta al pasar por el centro; el grosor de la pieza permanece separado de esa sombra para conservar una geometría coherente.

La ocupación de la placa responde a un grid de `12 × 12`. El núcleo utiliza el área central `5 / 5 / 8 / 8`; contexto combina `2 / 2 / 4 / 5` con `2 / 2 / 7 / 4`; flujo combina `2 / 10 / 7 / 12` con `5 / 9 / 7 / 12`; y producción combina `8 / 2 / 12 / 4` con `9 / 2 / 12 / 5`. Los solapes de cada pareja se interpretan como una única pieza sólida en L. Contrato, evidencia y código conservan sus áreas rectangulares independientes.

Los chips son bloques tridimensionales sin pines perimetrales. Cada uno se construye como una silueta superior y dos estratos de profundidad que respetan también las formas compuestas. Solo la tapa conserva un contorno estructural fijo con el path completo, incluidas las esquinas cóncavas. Las capas inferiores aportan volumen mediante color, pero no tienen bordes estáticos: así no aparece ningún trazo nuevo al acercarse a la placa. El núcleo `SISTEMA` utiliza la misma pila tridimensional que el resto de módulos.

Cada módulo emite tres ecos de profundidad desfasados. Nacen en la altura de la tapa y descienden continuamente por el eje Z hasta la placa manteniendo siempre escala `1`, de modo que el contorno completo continúa visible durante la aproximación. El ciclo dura `1.95s`; los desfases negativos mantienen siempre al menos un eco en movimiento. Los chips pendientes permanecen en `opacity: 0` hasta que comienza su turno. Con `prefers-reduced-motion` estas estelas se eliminan.

Las capas comparten sus coordenadas X/Y y se separan exclusivamente mediante `translateZ`. La placa modifica su rotación Y en función de la posición horizontal: parte aproximadamente en `-20deg`, queda frontal al cruzar el centro y termina cerca de `+20deg`. De este modo, el eje Z proyectado converge siempre hacia el centro superior del viewport: arriba-izquierda cuando la placa está a la derecha y arriba-derecha cuando está a la izquierda. La caída de cada pieza ocurre sobre ese mismo eje Z.

Las conexiones viven en una capa HTML independiente basada en una retícula intermedia de `24 × 24`. Cada ruta utiliza tres segmentos ortogonales que se encuentran sobre la misma intersección del grid, queda oculta bajo el módulo y el núcleo, y aumenta su contraste al conectarse. Así las pistas pueden doblarse sin cortes ni depender del SVG de la placa. El grid completo se escala de manera proporcional en desktop y móvil.

El copy puede solaparse parcialmente con la placa. Para mantener contraste sin ocultarla, cada bloque activo utiliza un velo del color del canvas con desenfoque de fondo y salida degradada hacia la escena. Este recurso solo existe en la narración sticky de desktop; se elimina en la secuencia vertical y en móvil.

La primera variante de cubos tridimensionales se conserva en `src/app/components/prototypes/CubeSystemPrototype.tsx` junto a su controlador. No forma parte del render activo, pero permanece disponible para comparar o recuperar su lenguaje espacial.

El movimiento se ejecuta en una única isla cliente. Un listener pasivo solicita una actualización por frame, escribe variables CSS directamente y solo cambia el estado discreto cuando entra una nueva etapa. Los textos, la geometría y la traducción siguen siendo Server Components.

## Fallback

En móvil y con `prefers-reduced-motion` el sistema aparece completamente ensamblado y los seis momentos se presentan como una secuencia vertical. Todo el contenido sigue disponible sin depender del sticky, de la rotación o de detectar la etapa activa.

## Criterios de aceptación

- Un único capítulo explica proceso, capas y capacidades.
- La plataforma cruza la pantalla de derecha a izquierda y puede entrar bajo el copy sin comprometer su lectura.
- La escala de desktop responde primero a la altura útil del viewport.
- La sombra cambia de dirección respecto al foco central durante el recorrido.
- Cae y se conecta exactamente un chip por momento.
- La etapa activa y la barra inferior responden al progreso vertical.
- No existe estado React actualizado durante el scroll.
- Móvil mantiene el orden de lectura y no produce overflow horizontal.
- La IA tiene cabecera y numeración propias antes de los casos.
