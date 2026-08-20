# Plan de reconstrucción de Portfolio V2

> Este documento guía la ejecución. La rama y el worktree `v2` ya están activos.

## Decisión de trabajo

Crear una rama `v2` a partir de `main` y montarla en un worktree hermano, por ejemplo `../portfolio-web-v2`.

Motivos:

- `main` permanece ejecutable como referencia visual;
- la V2 puede avanzar sin convivir con componentes antiguos;
- se mantiene toda la historia de Git;
- la documentación creada en esta fase viaja con la rama;
- los assets se pueden rescatar de forma explícita y trazable.

No se propone una rama huérfana. “Empezar de cero” debe significar una nueva arquitectura y un nuevo árbol de aplicación, no renunciar al historial.

## Estado de ejecución — 18 de agosto de 2026

- Completado: worktree y rama `v2`, con `main` intacta como referencia.
- Completado: reconstrucción limpia con Next.js, React y TypeScript, sin reutilizar los componentes antiguos.
- Completado: narrativa completa de nueve capítulos; se probó una reducción y se recuperó el copy extenso para revisarlo de forma iterativa.
- Completado: sistema visual monocromático con tema oscuro y tema claro beige, tipografía Telegraf, retícula editorial, textura, círculos y microtipografía.
- Completado: rutas estáticas en español e inglés mediante `next-intl`.
- Completado: animación ambiental y cierre heredado de la V1, actualizado a «¿Hay un problema interesante que resolver? / Hablemos.».
- Completado: responsive de escritorio y móvil, progressive enhancement, reduced motion y accesibilidad automática sin incidencias detectadas.
- Completado: lint, typecheck, build de producción y auditoría de dependencias.
- Pendiente de contenido: aprobación final del copy de casos, enlaces definitivos, resultados medibles que puedan publicarse y confirmación de licencia de Telegraf.
- Pendiente de release: preview desplegada, revisión manual en más dispositivos y estrategia de integración en `main`.

## Política de migración

Cada elemento rescatado debe responder a una de estas razones:

1. define la identidad visual;
2. contiene información vigente;
3. es un recurso original difícil de reproducir;
4. ya cumple el estándar técnico y de accesibilidad de la V2.

Si no cumple al menos una, se reconstruye o se descarta.

### Portar primero como referencia

- fuentes Telegraf, pendiente de licencia;
- paleta y contraste;
- retrato y fotografías seleccionadas;
- textura y fondo como referencias, no necesariamente como archivos finales;
- motivos de líneas, contadores, círculo y microtipografía;
- enlaces verificados.

### No portar automáticamente

- componentes React;
- contextos actuales;
- hojas CSS actuales;
- animaciones GSAP actuales;
- estructura de cuatro secciones;
- datos de proyectos incrustados en JSX;
- configuración de dependencias.

## Fases

### Fase 0 — Definición

Estado: completada como base de implementación; las decisiones editoriales señaladas al final siguen abiertas.

- Validar la visión y el contenido.
- Validar las directrices de diseño.
- Resolver las preguntas abiertas.
- Decidir qué casos reales se pueden contar.
- Confirmar licencia de tipografía y uso de imágenes.

Salida: documentación aceptada y alcance de V2 cerrado.

### Fase 1 — Preparación segura

- Crear rama y worktree de V2.
- Registrar un snapshot visual de la versión actual en anchos representativos.
- Inventariar assets con decisión: portar, reemplazar o descartar.
- Definir baseline de rendimiento y accesibilidad.
- Mantener `main` sin cambios funcionales.

Salida: espacio de trabajo aislado y referencia reproducible.

Estado: rama `v2` creada desde `main`; worktree independiente preparado.

### Fase 2 — Foundations

Estado: completada para la primera release candidate local.

- Elegir una versión estable y soportada del framework en el momento de implementación.
- Configurar TypeScript, lint, formato y tests mínimos.
- Definir Server Components por defecto e islas cliente explícitas.
- Crear tokens de color, tipografía, espacio, retícula, radios y movimiento.
- Implementar shell, navegación, fondo, tipografía y primitivas básicas.
- Añadir metadata, sitemap, robots y estructura SEO esencial.

Salida: una página vacía pero visualmente identificable, responsive y accesible.

### Fase 3 — Narrativa principal

Estado: completada con el contenido de posicionamiento disponible.

Implementar en este orden:

1. hero;
2. sistema de ingeniería, desde cliente hasta producción;
3. IA aplicada como capítulo independiente;
4. índice de tres casos reales;
5. herramientas;
6. sobre mí;
7. contacto.

El orden obliga a resolver primero la propuesta de valor y la evidencia, no los efectos.

Salida: toda la información disponible y navegable sin animaciones.

### Fase 4 — Movimiento y carácter

Estado: completada. El movimiento se implementa con CSS e `IntersectionObserver`, sin bloquear el contenido cuando JavaScript no está disponible.

- Añadir revelados por bloque.
- Construir movimiento ambiental del fondo.
- Implementar el control circular y magnetismo limitado.
- Unificar proceso, capas y capacidades mediante un ensamblaje 3D ligado al scroll vertical.
- Desplazar y rotar el sistema entre los huecos del copy, incorporando un módulo por etapa y ofreciendo una secuencia vertical con el sistema montado en móvil o movimiento reducido.
- Incorporar reduced motion desde el inicio de cada efecto.
- Medir coste de JavaScript y composición después de cada grupo de animaciones.
- Reconstruir como requisito la animación final de la V1: el fondo se recoge en un marco redondeado al entrar en contacto y revela el nuevo cierre «¿Hay un problema interesante que resolver? / Hablemos.».

Salida: identidad cinética sin dependencia funcional del movimiento.

### Fase 5 — Contenido y casos reales

Estado: completada en estructura y primera redacción; requiere aprobación editorial y enlaces definitivos del propietario.

- Sustituir todos los placeholders.
- Validar exactitud profesional y fechas.
- Añadir resultados y evidencias permitidas.
- Revisar confidencialidad y anonimización.
- Optimizar imágenes y completar textos alternativos.
- Revisar copy en móvil y, si aplica, segundo idioma.

Salida: contenido listo para publicación.

### Fase 6 — Calidad

Estado: completada para 390 × 844 y 1.440 × 900, con validación automática de accesibilidad y comprobación sin JavaScript. Queda ampliar la matriz manual antes de publicar.

- QA visual en 360, 390, 768, 1.024, 1.440 y 1.920 px.
- Navegación por teclado y lector de pantalla.
- Preferencias de movimiento reducido.
- Zoom al 200 %.
- Contraste, landmarks y jerarquía de headings.
- Sin scroll horizontal involuntario.
- Tests de enlaces y rutas.
- Build, lint, typecheck y tests sin avisos aceptados tácitamente.
- Auditoría de dependencias.
- Presupuesto de rendimiento y análisis de imágenes/fuentes.

Salida: release candidate verificable.

### Fase 7 — Publicación

Estado: pendiente; publicar no forma parte de esta ejecución local.

- Comparar V2 con la dirección documentada, no solo con la V1.
- Preparar estrategia de sustitución de `main`.
- Mantener una referencia etiquetada de la versión anterior.
- Desplegar preview y hacer revisión final de contenido y enlaces.
- Publicar y observar errores reales.

Salida: V2 publicada con rollback claro.

## Criterios de aceptación globales

### Producto

- El valor principal se entiende sin llegar a la sección de tecnologías.
- Al menos un caso demuestra problema, investigación, decisión y resultado.
- El contacto y el siguiente paso son evidentes.

### Diseño

- Se conserva la identidad monocromática, editorial y cinética.
- Móvil no es una versión reducida de escritorio.
- La retícula y los tokens sustituyen offsets arbitrarios.
- El contenido es legible antes, durante y después del movimiento.

### Ingeniería

- Contenido estático renderizado en servidor por defecto.
- JavaScript cliente limitado a interacciones justificadas.
- Sin listeners, observers, triggers o timers huérfanos.
- Datos separados de la presentación cuando exista repetición real.
- Dependencias mínimas, soportadas y auditadas.

### Accesibilidad y rendimiento

- Navegación completa con teclado.
- Foco visible y reduced motion.
- Sin loader obligatorio.
- Sin scroll horizontal involuntario.
- Imágenes responsive y optimizadas.
- Presupuesto medido antes de publicar.

## Preguntas que bloquean el diseño final, no la preparación

- ¿Qué denominación profesional debe aparecer exactamente en el hero?
- ¿Puede aprobarse la redacción anonimizada de HIC, plugin de Figma y On Racing?
- ¿Existen métricas verificables de estos casos que sí puedan publicarse?
- ¿Se mantiene una CTA de freelance o se abre a empleo y colaboración?
- ¿La fotografía actual sigue siendo la adecuada?
- ¿Existe licencia para redistribuir Telegraf desde el repositorio?
- ¿Qué hosting, analytics y formulario de contacto se usarán?

## Skills previstas para una fase posterior

No se crean todavía. Una vez aceptada esta documentación tendría sentido encapsular reglas en skills separadas:

1. **Guardiana de diseño:** tokens, composición, responsive, movimiento y criterios de identidad.
2. **Arquitectura frontend:** límites cliente/servidor, estructura de componentes, datos y rendimiento.
3. **Contenido de casos:** plantilla y validación de problema, investigación, decisión, resultado y confidencialidad.
4. **QA de portfolio:** matriz de viewports, accesibilidad, reduced motion, enlaces y regresión visual.

Las skills deben derivarse de decisiones aprobadas. Crearlas antes fijaría reglas que todavía pueden cambiar.
