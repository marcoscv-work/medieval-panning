# Roadmap

Roadmap inicial para convertir la visualizacion en una herramienta viva de planificacion.

## Fase 1 - Publicacion estatica

Estado: en curso.

- Crear site HTML/CSS/JS vanilla.
- Documentar estructura y evolucion.
- Publicar en GitHub Pages.
- Validar visualmente escritorio y movil.

## Fase 2 - Datos mantenibles

Objetivo: separar contenido de presentacion.

- Mover timeline, backlog, tareas y dudas a archivos de datos.
- Crear validador simple de IDs, estados y prioridades.
- Evitar duplicados.
- Preparar exportacion JSON/CSV.

## Fase 3 - Fichas de mecanismos

Objetivo: pasar de backlog a diseno jugable.

- Crear una ficha por mecanismo.
- Asociar cada ficha a su ID.
- Clasificar cada mecanismo por peso: puzzle principal, puzzle secundario, microinteraccion, efecto narrativo, pista/apoyo o falso objeto.
- Marcar dependencias entre juegos.
- Anadir riesgos de produccion y tecnologia.
- Anadir criterios de reset para la siguiente partida.

## Warning ligero de balance

El backlog actual tiene 35 mecanismos para 59 minutos. Como inventario de ideas es potente, pero como resolucion real puede ser demasiado denso.

Recomendacion de diseno:

- Mantener entre 12 y 16 puzzles reales.
- Convertir el resto en microinteracciones, pistas, efectos, narrativa o falsos objetos.
- Vigilar especialmente Exterior, Sala principal y Laboratorio por densidad.
- La Sala principal deberia concentrar 5-6 juegos principales y usar los demas como subpasos o apoyos.
- El Laboratorio debe sentirse climatico, no saturado: mejor 2-3 juegos fuertes y tension narrativa.

## Fase 4 - Seguimiento de produccion

Objetivo: usar el site como panel de avance.

- Estados: idea, diseno, prototipo, fabricacion, integrado, probado.
- Graficos por area.
- Progreso por prioridad.
- Vista de riesgos.
- Vista de decisiones pendientes.

## Fase 5 - Presentacion y reuniones

Objetivo: que el site sirva para vender, revisar y decidir.

- Modo presentacion.
- Resumen ejecutivo.
- Comparativa entre duracion estimada y carga de juegos.
- Vista compacta para direccion.
- Exportacion de decisiones y pendientes.

## Decisiones pendientes prioritarias

- Tipo de ofrenda del exterior.
- Mecanica y momento exactos para obtener la varita como objetivo principal de la Sala principal.
- Electronica o no de la varita.
- Dos juegos faltantes del laboratorio.

## Decisiones provisionales pendientes de validacion

- El cuadro magico utilizara, a priori, la pantalla de tinta electronica de 13,3 pulgadas ya adquirida para producir el cambio de imagen.
- El espejo magico utilizara el concepto floating-mask: una mascara 3D animada en un monitor situado detras de una lamina semirreflectante.
- Prototipo visual publicado en [espejo / mascara](https://quakespain.es/mask/): ocho expresiones, parpadeo, movimiento flotante, seguimiento del puntero, audio y microfono con sincronizacion labial. Los gestos son expresiones de la mascara; no implican deteccion de gestos del jugador.
- Pendiente: guion del personaje, resolucion del acertijo J-024, disparos desde el gestor de sala y pruebas del montaje optico y de audio. El prototipo vive en su propio repositorio y no se sirve desde este planning.
- Avance actual de definicion: 55%, estimacion global de Marcos del 19 de noviembre de 2026; pendiente 45%. Sustituye el calculo por conceptos y prototipos y no equivale a fabricacion o integracion completada.
- Queda pendiente probar el refresco e integracion del cuadro y el brillo, contraste y ocultacion del monitor del espejo.

## Decisiones cerradas

- Las piedras tactiles funcionaran con sensores capacitivos.
- La liberacion incluira al menos seis jaulas. Se apagara la luz y unos motores tumbaran y ocultaran las criaturas al fondo de cada jaula; despues volvera la iluminacion y sonara un audio de liberacion.
- La proyeccion acompanara la liberacion como apoyo visual, pero el efecto principal sera fisico.

## Actualizacion Del 18 De Octubre De 2026

- J-002: [prologo La ultima luz](https://quakespain.es/prologo/) disponible como cuento 3D narrado. Bosque vivo, marchitamiento, fortaleza del mago y chispa de los jugadores. Validar proyector, audio, arranque desde el gestor, reset y enlace narrativo con el exterior.
- J-023: demo publica del espejo / mascara disponible. Validar brillo, contraste, ocultacion del monitor y control desde el gestor; J-024 sigue pendiente de diseno y no se da por resuelto.
- Ambos enlaces respondieron HTTP 200. Esto confirma acceso a sus paginas, no una validacion de toda la experiencia en el equipo de sala.
- Avance pasa de 44% a 49% por incorporar el concepto y el prototipo del prologo. Publicar la mascara no suma otro medio punto: ya estaba reconocido en el estado anterior.
- Se conservan los 35 mecanismos y su orden de resolucion, los 59 minutos totales y el 3% de construccion.

## Actualizacion Del 18 De Noviembre De 2026

- Construccion pasa del 3% al 30% por indicacion de Marcos.
- Definicion se mantiene en el 49% y pendiente de concretar en el 51%.
- Se actualizan el medidor global, la tarjeta de construccion y la documentacion; no se dan por terminados mecanismos individuales ni cambian los pendientes de integracion.

## Actualizacion Del 19 De Noviembre De 2026

- Definicion sube del 49% al 55% por indicacion de Marcos; pendiente de concretar baja al 45%.
- Construccion se revisa del 30% al 20% por indicacion de Marcos.
- La definicion pasa a ser una estimacion global manual. No se altera el backlog para justificar el porcentaje ni se marcan integraciones como terminadas.

## Dotacion Audiovisual Y Camaras

Decision del 19 de noviembre de 2026:

- Dos proyectores, en la primera sala (Bosque / prologo) y la ultima (Laboratorio).
- Al menos cuatro altavoces, con un quinto posible; maximo dos activos simultaneamente mediante reles y un unico amplificador estereo con audio mono.
- Al menos seis microfonos; definir captacion, entradas y monitorizacion, sin sustituirlos automaticamente por audio de camaras.
- Nueve camaras PoE para seguimiento de la experiencia; definir cobertura, red, potencia y visualizacion o grabacion.
- Validar el circuito de conmutacion, las parejas de altavoces y el reset antes de montar. Resolver J-009 con el primer proyector sin contar un tercero.
- El presupuesto incorpora la dotacion y revisa la exclusion de camaras; los importes no se recalculan hasta disponer de equipos y costes concretos.

Detalle: [Infraestructura audiovisual](av-infrastructure.md). Se mantienen los porcentajes 55% / 20% / 45% y los 35 mecanismos.
