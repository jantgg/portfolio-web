# Portfolio V2 — documentación de trabajo

Esta carpeta define la versión 2.0 del portfolio antes de modificar la aplicación.

## Estado

- Fase actual: primera implementación completa y validada localmente.
- Código de la V2: reconstruido en la rama y worktree `v2`.
- Decisión adoptada: reconstrucción limpia en una rama y un worktree propios.
- Referencia visual: la versión actual en `main`.
- Regla principal: conservar la identidad, no la implementación.
- Iteración actual: narrativa unificada de ingeniería, IA como capítulo independiente, temas oscuro/claro, internacionalización ES/EN y tres casos reales navegables.

## Documentos

1. [Visión y contenido](./01-vision-y-contenido.md)
   Define el posicionamiento, la narrativa y la arquitectura de contenido propuesta.
2. [Auditoría de la versión actual](./02-auditoria-version-actual.md)
   Recoge el estado técnico y visual del repositorio, sus riesgos y qué merece conservarse.
3. [Dirección de diseño](./03-direccion-de-diseno.md)
   Convierte el estilo actual en principios y reglas reutilizables para la V2.
4. [Plan de reconstrucción](./04-plan-de-reconstruccion.md)
   Recoge la estrategia, el estado de ejecución y los pasos pendientes de publicación.
5. [Iteración de contenido, temas e idiomas](./05-contenido-temas-e-idiomas.md)
   Documenta la prueba de reducción, su reversión y las decisiones vigentes de tema e internacionalización.
6. [Casos reales e IA aplicada](./06-casos-reales-e-ia.md)
   Define la narrativa de HIC, el plugin de Figma y On Racing, junto con los límites de confidencialidad y el papel de la IA.
7. [Sistema de ingeniería y arquitectura narrativa](./07-sistema-de-ingenieria.md)
   Documenta la unificación de proceso, capas y capacidades, además del nuevo ensamblaje 3D ligado al scroll.

## Principios de trabajo

- Documentar las decisiones antes de implementarlas.
- Diseñar desde el contenido y el sistema, no desde pantallas aisladas.
- Portar únicamente aquello que tenga una razón explícita para sobrevivir.
- Mantener una experiencia expresiva sin sacrificar legibilidad, accesibilidad ni rendimiento.
- Validar cada fase en móvil y escritorio.

## Alcance ejecutado

La definición documental y la implementación local están completas. La V2 vive exclusivamente en `v2`; `main` conserva la versión anterior como referencia ejecutable. Antes de publicar quedan la aprobación del propietario sobre el copy de los casos, la verificación de licencia de la tipografía y una revisión final de contenido y enlaces.
