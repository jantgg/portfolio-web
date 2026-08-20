# IA como sistema de ingeniería

> Documento conceptual derivado de una implementación real. Generaliza los patrones reutilizables y excluye nombres de cliente, arquitectura privada, rutas internas y métricas no verificables públicamente.

## Tesis

La integración valiosa de IA no consiste en añadir un generador de código. Consiste en convertir conocimiento, reglas y comprobaciones del proyecto en un sistema versionado que pueda asistir al equipo con contexto, límites y evidencia.

La decisión continúa siendo humana. La IA reduce el trabajo necesario para encontrar información, reconstruir procesos y preparar una entrega revisable.

Frase central:

> El repositorio se convierte en la memoria operativa de la IA.

## El problema transversal

En una base de código madura, escribir código es solo una parte del coste. La fricción aparece al intentar responder preguntas como estas:

- ¿Qué contexto es fiable para esta tarea?
- ¿Qué capas puede afectar el cambio?
- ¿Qué especialista, protocolo o documentación resulta relevante?
- ¿Qué nivel de riesgo tiene la modificación?
- ¿Qué comprobaciones demuestran que está terminada?
- ¿Cómo recibe otra persona suficiente contexto para revisarla?

Una IA aislada puede producir más output, pero no resuelve por sí sola esas preguntas. Necesita operar dentro de un sistema gobernado.

## Conceptos transversales

### 1. Memoria operativa versionada

El conocimiento importante deja de vivir únicamente en conversaciones, prompts o personas concretas. Se materializa en instrucciones, documentación, reglas y artefactos que evolucionan junto al código.

Incluye:

- políticas globales del repositorio;
- especialistas por responsabilidad;
- protocolos cargables bajo demanda;
- documentación enlazada a superficies del código;
- fuentes de verdad explícitas.

### 2. Especialización bajo demanda

No todas las tareas necesitan el mismo contexto. Separar responsabilidades permite cargar únicamente las instrucciones relevantes para implementación, arquitectura, debugging, documentación, revisión o gobernanza visual.

La especialización reduce contexto mezclado y convierte una petición genérica en una ruta de trabajo concreta.

### 3. Workflows como producto interno

Los prompts que se repiten se convierten en protocolos versionados. Un workflow define entrada, fuentes que consultar, pasos, límites, validaciones y resultado esperado.

El objetivo no es automatizar una conversación, sino hacer reproducible una forma de trabajar.

### 4. Routing y riesgo

Cada cambio puede relacionarse con especialistas, documentación, checks y nivel de riesgo según las superficies que toca. Esto permite aplicar gates proporcionales en vez de utilizar el mismo proceso para cualquier modificación.

La ruta recomendada debe responder:

- quién o qué capacidad interviene;
- qué conocimiento necesita;
- qué documentación puede quedar afectada;
- qué comprobaciones debe superar;
- qué evidencia debe producir.

### 5. Documentación como código

La documentación deja de depender únicamente de buena voluntad. Sus enlaces, estructura, cobertura y relación con el código pueden validarse automáticamente.

El patrón combina:

- índice generado;
- reglas que relacionan paths y documentos;
- comprobación de enlaces y estructura;
- gate cuando cambia código crítico sin actualizar conocimiento relacionado.

### 6. Validaciones reproducibles

Las comprobaciones útiles no deberían existir solo en la memoria de quien revisa. Fixtures, auditorías de integraciones, comparaciones, reglas de estilo y tests convierten supuestos en resultados repetibles.

La IA puede ayudar a seleccionar y ejecutar estas validaciones, pero el resultado debe existir como artefacto independiente y revisable.

### 7. Evidencia antes del handoff

Una entrega no termina en el diff. Debe incluir el contexto necesario para entender alcance, riesgo, decisiones, checks ejecutados y resultados relevantes.

La evidencia puede adoptar la forma de:

- resumen persistente del cambio;
- reporte de revisión;
- checklist validado;
- snapshots comparables;
- dashboard local de resultados;
- cuerpo de PR generado desde información verificable.

### 8. Observabilidad local del workflow

Los reportes dispersos ganan valor cuando existe una vista común que permite inspeccionar el estado sin ejecutar de nuevo cada herramienta. Esa vista puede generarse localmente a partir de Markdown o JSON, sin red ni consumo adicional de IA.

## Cuatro pilares para comunicarlo

La web resume el sistema en cuatro bloques. No representan una secuencia rígida; son cuatro responsabilidades conectadas.

### 01 — Contexto versionado

Las decisiones, reglas y mapas del sistema viven junto al código. Agentes y skills cargan solo la información relevante para cada tarea, sin depender de memoria individual ni prompts interminables.

Agrupa memoria operativa, fuentes de verdad, especialización y documentación relacionada.

### 02 — Flujos gobernados

Un registro conecta cada cambio con especialistas, documentación, límites, riesgo y checks. La IA no improvisa el proceso: sigue rutas versionadas y proporcionales al impacto.

Agrupa workflows, registry, routing, permisos y gates proporcionales.

### 03 — Validación automática

Documentación, contratos, fixtures, integraciones y reglas se auditan durante el desarrollo. El drift aparece antes de la revisión, cuando todavía es barato corregirlo.

Agrupa docs as code, fixtures, auditorías, tests y detección de drift.

### 04 — Evidencia revisable

Cada entrega produce reportes, resúmenes y resultados persistentes. Quien revisa recibe alcance, decisiones y checks verificables, no solo un diff y una explicación reconstruida.

Agrupa PR governance, reportes persistentes, dashboards, snapshots y handoff.

## Flujo lógico

```text
Contexto versionado
  → selecciona un flujo gobernado
  → ejecuta validaciones reproducibles
  → entrega evidencia revisable
```

El circuito vuelve al repositorio: documentación, decisiones y resultados actualizan la memoria operativa utilizada por el siguiente cambio.

## Qué no es

- No es delegar decisiones de producto o ingeniería a un modelo.
- No es medir valor por líneas de código generadas.
- No es sustituir tests, revisión o fuentes de verdad.
- No es una colección de prompts personales sin versionado.
- No es una plataforma atada a un framework, CMS o proveedor concreto.

## Resultado comunicable

El beneficio principal no debe formularse únicamente como «programar más rápido». El sistema busca:

- reducir conocimiento implícito;
- evitar reconstruir contexto en cada tarea;
- detectar drift entre código, documentación y tooling;
- aplicar validaciones proporcionales al riesgo;
- preparar mejor la revisión y el handoff;
- devolver tiempo a decisiones de cliente, producto y arquitectura.

## Criterio editorial

La comunicación pública debe explicar patrones y responsabilidades, no inventariar archivos privados. Los detalles concretos pueden aparecer en un caso de estudio anonimizado cuando demuestren una decisión técnica, pero la home debe centrarse en el modelo reutilizable.

Copy recomendado para la home:

- **Titular:** Menos ambigüedad. Más tiempo para lo que aporta valor.
- **Identidad:** IA.
- **Cierre:** La IA no sustituye el proceso de ingeniería. Se conecta a él para trabajar con contexto, límites y evidencia.

El párrafo explicativo intermedio se elimina: los cuatro pilares contienen ahora la explicación concreta y permiten que el titular conserve protagonismo.
