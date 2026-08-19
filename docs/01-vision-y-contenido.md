# Portfolio V2 — visión y contenido

> Estado: documento de exploración inicial, 18 de agosto de 2026. La arquitectura extensa vuelve a estar vigente y la sección de evidencia se concreta en [Casos reales e IA aplicada](./06-casos-reales-e-ia.md).

## Tesis

El portfolio no debe presentarse principalmente como una galería de proyectos ni como una lista de tecnologías. Debe demostrar cómo Juan aborda problemas ambiguos, investiga sistemas, conecta capas y convierte esa comprensión en una solución que se puede construir y llevar a producción.

El posicionamiento busca acompañar la evolución hacia perfiles como Senior Frontend Engineer, Solution Engineer o Forward Deployed Engineer. La especialización sigue siendo frontend, pero el valor diferencial es transversal:

> Dame un problema ambiguo y construiré una imagen clara del sistema, propondré una solución viable y la llevaré hasta un resultado verificable.

## Objetivo de la experiencia

Al terminar la visita, una persona debería entender que Juan:

- parte del problema, no de una tecnología;
- puede investigar más allá de la capa visible del error;
- conecta producto, diseño, frontend, APIs, contenido y negocio;
- comunica decisiones y trade-offs con claridad;
- implementa y valida, no se queda en la propuesta;
- utiliza las herramientas como medios, no como identidad profesional.

## Audiencias prioritarias

1. Responsables de ingeniería y contratación para posiciones de frontend senior.
2. Equipos de producto o consultoría que necesiten perfiles con capacidad de discovery técnico.
3. Clientes o colaboradores con problemas de integración, arquitectura o producto digital.

La narrativa debe funcionar para las tres audiencias sin convertirse en un CV exhaustivo ni en una página comercial genérica.

## Arquitectura de contenido propuesta

### 1. Hero

#### Software Engineer. Conecto sistemas y equipos.

Especializado en frontend, trabajo más allá de la interfaz para convertir complejidad de producto en decisiones técnicas que se pueden construir.

Investigo el contexto, hago explícitas las restricciones y conecto diseño, backend y negocio para llevar la solución desde la conversación inicial hasta producción.

**Del contexto a producción.**

Objetivo de la sección: hacer visible el rol de Software Engineer en los primeros segundos. “Frontend” aporta especialización, mientras que sistemas, equipos y producción expresan el alcance transversal. El CTA de proceso comparte fila con el copy y aparece inmediatamente a su izquierda.

### 2. Mis mandamientos de ingeniería

**Del cliente a producción: claridad antes del código, evidencia antes de darlo por terminado.**

El proceso empieza escuchando al cliente, atraviesa producto, diseño, sistemas y código, y termina cuando la solución funciona fuera de local.

Los seis principios no negociables son:

1. **No asumas. Pregunta.** La petición del cliente abre la conversación; no define la solución.
2. **Haz explícito el contrato.** Si el criterio no es compartido, la implementación es una apuesta.
3. **Sigue el flujo completo.** El problema no termina donde acaba el ticket.
4. **Decide dónde vive.** Toda responsabilidad necesita un lugar y una razón.
5. **Construye para el mundo real.** El happy path no es el producto.
6. **Demuestra en producción.** Terminado significa funcionando fuera de local.

Objetivo de la sección: mostrar un proceso propio, exigente y reconocible desde la conversación con cliente hasta la operación. Los índices visuales se eliminan; la alternancia izquierda/derecha aporta el ritmo y los bloques izquierdos comienzan en la primera columna de contenido.

### 3. Mi trabajo ocurre entre capas

#### No pienso únicamente en frontend.

Aunque mi especialización está en frontend, muchos de los problemas que resuelvo atraviesan diferentes partes del producto.

#### Producto y negocio

Entender qué necesita realmente el usuario y qué objetivo intenta conseguir el producto.

#### Diseño

Traducir una intención de diseño a un sistema que pueda mantenerse, reutilizarse y evolucionar.

#### Frontend

Arquitectura, componentes, estado, integración, rendimiento, accesibilidad y experiencia de usuario.

#### APIs y backend

Entender contratos, modelado de datos, endpoints y responsabilidades entre sistemas.

#### Contenido y CMS

Trabajar con contenido dinámico y convertir estructuras editoriales en interfaces consistentes.

#### Equipos

Detectar dependencias, hacer visibles los bloqueos y facilitar que diferentes perfiles puedan tomar decisiones sobre el mismo problema.

Objetivo de la sección: representar un sistema conectado. No debe parecer un listado de seis servicios independientes.

### 4. Casos reales

En lugar de enseñar únicamente el resultado final, aquí enseño el proceso.

#### Problema

Una página existe, pero determinados recursos no aparecen correctamente.

#### Investigación

Sigo el flujo completo:

**URL → Router → CMS → configuración → API → transformación → frontend**

Comparo lo que espera cada capa con lo que realmente recibe.

#### Hallazgo

El problema no está necesariamente donde aparece el error.

Puede existir una desalineación entre el identificador configurado en CMS, el endpoint generado por el router y el endpoint que realmente soporta backend.

#### Solución

Documento el flujo, reduzco el problema a casos reproducibles y planteo qué contrato debería existir entre los sistemas.

#### Resultado

En lugar de solucionar únicamente un caso concreto, intento identificar la causa que puede estar generando toda una familia de errores.

Este primer ejemplo conceptual se sustituye en implementación por un índice de tres casos reales —HIC, plugin de Figma y On Racing— y por un bloque destacado sobre IA aplicada al flujo de ingeniería. La descripción completa y sus límites editoriales están en [Casos reales e IA aplicada](./06-casos-reales-e-ia.md).

Objetivo de la sección: aportar evidencia concreta sin convertir la home en tres artículos completos. Cada resumen enlaza a una página donde se desarrollan problema, sistema, decisiones y resultado.

### 5. Capacidades

#### Ingeniería frontend

Construcción de interfaces y aplicaciones mantenibles, integración con APIs, arquitectura de componentes y resolución de problemas en sistemas frontend complejos.

#### Debugging transversal

Seguir un problema a través de diferentes capas hasta encontrar su origen real.

#### Diseño de soluciones

Transformar requisitos ambiguos en propuestas técnicas concretas y ejecutables.

#### Comunicación técnica

Explicar problemas complejos de forma que frontend, backend, diseño, producto y cliente puedan tomar decisiones.

#### Ownership

No limitar mi responsabilidad al ticket o al componente cuando resolver correctamente el problema requiere entender algo más.

#### IA aplicada al desarrollo

Utilizar IA como parte del flujo de ingeniería: investigación, exploración de codebases, documentación, análisis, generación de alternativas y automatización de tareas repetitivas.

Objetivo de la sección: sintetizar competencias después de haberlas demostrado. No debe preceder a la evidencia.

### 6. Herramientas, no identidad

Trabajo principalmente con tecnologías frontend y herramientas modernas de desarrollo.

Pero intento no definirme por un framework.

**React, Next.js, TypeScript, APIs, CMS, Figma, Git, herramientas de IA...**

Son herramientas.

La capacidad que intento desarrollar es otra:

**entender sistemas y resolver problemas.**

Objetivo de la sección: permitir que las tecnologías aparezcan sin convertir la web en una nube de logos o palabras clave.

### 7. Sobre mí

#### Me gusta trabajar donde todavía no está clara la respuesta.

Empecé especializándome en frontend, pero progresivamente mi trabajo se ha desplazado hacia problemas más transversales.

Me interesa entender cómo funciona el producto completo: desde la necesidad inicial hasta los datos, las APIs, la arquitectura y la experiencia que finalmente recibe el usuario.

Disfruto especialmente de los problemas que requieren investigar, hablar con diferentes perfiles y tomar decisiones antes de escribir código.

Mi objetivo no es simplemente implementar una solución.

**Es conseguir que el problema deje de existir.**

Objetivo de la sección: cerrar la narrativa profesional con una voz personal. La fotografía puede aparecer aquí si añade cercanía sin dominar el relato.

### 8. Contacto

#### ¿Hay un problema interesante que resolver?

Hablemos.

**LinkedIn · GitHub · Email**

Objetivo de la sección: una única llamada a la acción clara. La disponibilidad laboral o freelance debe expresarse solo si está actualizada.

## Reglas editoriales

- Voz en primera persona, directa y segura, sin grandilocuencia.
- Explicar antes de enumerar.
- Sustituir afirmaciones genéricas por evidencia siempre que sea posible.
- Evitar que “problemas complejos” signifique complicar la solución.
- Usar términos en inglés solo cuando sean habituales o más precisos que su traducción.
- Mantener titulares breves y párrafos con una idea principal.
- Las tecnologías no deben ocupar el nivel más alto de la jerarquía narrativa.

## Contenido pendiente de validar

Antes de cerrar el copy y empezar el desarrollo deben confirmarse:

- denominación profesional exacta del hero;
- puestos y fechas actuales;
- aprobación final del copy y del nivel de detalle de los tres casos;
- métricas de impacto únicamente cuando sean publicables y verificables;
- disponibilidad y tipo de oportunidades buscadas;
- enlaces y dirección de contacto definitivos;
- idioma o estrategia multilingüe;
- fotografía y recursos visuales que siguen representando al perfil actual.
