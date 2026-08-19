# Casos reales e IA aplicada

> Estado: primera redacción implementada, pendiente de aprobación editorial del propietario, 18 de agosto de 2026.

## Decisión narrativa

La sección 04 deja de representar un caso genérico y pasa a funcionar como índice de evidencia. La home presenta la tesis y la promesa de cada caso; las rutas dedicadas explican el problema, el sistema, las decisiones y el resultado con suficiente contexto.

Los tres casos seleccionados demuestran capacidades complementarias:

1. **HIC:** coordinación entre CMS, APIs, frontend, documentación y proceso de ingeniería.
2. **Plugin de Figma:** automatización del recorrido entre sistema visual, datos, HTML email y Salesforce.
3. **On Racing:** integración de una API externa con identidad, datos persistentes, progreso, contenido y recompensas.

Las rutas públicas son `/[locale]/cases/hic`, `/[locale]/cases/figma` y `/[locale]/cases/racing`.

## IA aplicada al flujo de ingeniería

La IA constituye el capítulo 03 de la home y deja de estar anidada dentro del índice de casos. Esta separación permite explicar primero el sistema de trabajo, después el papel específico de la IA y finalmente demostrar ambos mediante casos reales.

La IA no se presenta como una herramienta para producir más código ni como una capacidad aislada. Se presenta como infraestructura que reduce ambigüedad y conecta equipos.

El flujo que debe quedar visible es:

**Contexto → criterios → implementación → evidencia**

En el caso HIC se concreta mediante:

- carga de contexto especializado según la tarea;
- criterios de aceptación que evolucionan junto al código;
- documentación versionada y validable;
- fixtures, auditorías, comparaciones y reportes reproducibles;
- un mapa que relaciona rutas, contenido, modelos, transformaciones, componentes, tests y documentación;
- trazabilidad antes de revisión y una definición de terminado compartida.

Principio editorial:

> La IA no sustituye el proceso de ingeniería. Se conecta a él para trabajar con contexto, límites y evidencia.

El beneficio se expresa de forma cualitativa mientras no existan métricas publicables: detectar desalineaciones antes, reducir búsquedas y retrabajo, acortar el camino entre requisito y validación y recuperar tiempo para conectar equipos y tomar decisiones.

### Tratamiento visual en la home

La entrada de la pieza funciona como una identidad en dos niveles: **“IA” ocupa una escala deliberadamente sobredimensionada** y debajo aparece “como sistema, no como atajo”. El título “Menos ambigüedad. Más tiempo para lo que aporta valor.” mantiene el peso narrativo, pero ya no tiene que explicar por sí solo de qué trata la sección.

El principio editorial se presenta en una composición a dos columnas. A la izquierda aparece una animación Lottie original basada en un núcleo, conexiones y órbitas; a la derecha, el copy. El movimiento representa un sistema que relaciona contexto, criterios, implementación y evidencia, no una ilustración genérica de inteligencia artificial.

La animación se carga solo cuando la pieza se aproxima al viewport. Es decorativa, no añade información inaccesible al texto y, cuando el sistema solicita reducir movimiento, se detiene en un fotograma estable que conserva la composición.

## Estructura de cada caso

Todas las páginas mantienen la misma gramática para facilitar la comparación:

1. contexto y aportación;
2. problema transversal;
3. sistema construido;
4. flujo operativo;
5. decisiones de diseño;
6. resultado;
7. nota de confidencialidad;
8. enlaces a los otros casos;
9. cierre animado de contacto.

La plantilla compartida no debe borrar lo específico: HIC enfatiza criterio y evidencia, Figma enfatiza el pipeline controlado y On Racing enfatiza resiliencia de integración y estado de producto.

## Política de confidencialidad

Los casos pueden explicar arquitectura, responsabilidades, tipos de integración y decisiones de ingeniería. No deben publicar:

- nombre completo de un cliente cuando no exista autorización expresa;
- dominios, credenciales, tokens, identificadores de repositorio o recursos internos;
- nombres de personas o equipos del cliente;
- payloads o datos reales;
- métricas internas no aprobadas;
- detalles operativos que amplíen innecesariamente la superficie de riesgo.

La redacción usa HIC como denominación del caso porque es la referencia solicitada por el propietario, pero evita identificar al cliente final. El plugin se describe por su función y On Racing por el nombre de producto facilitado.

## Fuentes de verdad consultadas

El contenido se ha derivado de los repositorios locales de los proyectos, no de memoria ni de una narrativa inventada:

- HIC: documentación de integraciones de IA, arquitectura CMS/API/frontend, mapa de conocimiento y consola de workflows;
- plugin de Figma: manifiesto, catálogo de componentes, generación HTML, carga de Excel y servicio de publicación;
- On Racing: esquema de datos, rutas de API, integración OAuth/webhooks con Strava, sincronización, contenido, recompensas, analítica y observabilidad.

Las fuentes sirven para comprobar que la capacidad descrita existe. No se trasladan al portfolio detalles sensibles de implementación.

## Criterios de aceptación

- La home explica la IA en una sección independiente como sistema de criterio y evidencia antes de mostrar las tarjetas.
- HIC tiene mayor peso visual y editorial que los otros dos casos.
- Cada tarjeta enlaza a una ruta localizada y el selector de idioma conserva la ruta actual.
- Cada caso contiene problema, sistema, decisiones y resultado; no se limita a enumerar tecnologías.
- El copy no atribuye métricas que no estén verificadas.
- La nota de confidencialidad es visible en las tres páginas.
- El cierre animado se mantiene también al final de los casos.
- Las páginas son Server Components; solo tema, idioma y movimiento necesitan JavaScript cliente.
