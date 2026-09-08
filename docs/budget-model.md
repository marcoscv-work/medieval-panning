# Modelo de presupuesto

La pagina `presupuesto.html` presenta una estimacion editable para la construccion integral de la experiencia.

## Base temporal

- Equipo inicial: 2 personas.
- Duracion inicial: 8 meses.
- Inicio previsto: ultimo trimestre de 2026.
- Final previsto: segundo trimestre de 2027.

La tarifa mensual por persona es configurable. El importe de equipo se calcula como personas por meses por tarifa mensual.

## Partidas

`budget.js` separa el presupuesto en estas areas:

- Equipo y dedicacion.
- Bosque y prologo.
- Exterior del castillo.
- Sala principal.
- Pasillo y mazmorra.
- Laboratorio del mago.
- Integracion y puesta en marcha.

Todas las cantidades y precios de materiales se pueden editar. La estimacion tambien permite ajustar el porcentaje de imprevistos y el IVA.

## Impresion

La cabecera permite incluir o excluir alcance, calendario, areas economicas y totales. La seleccion no altera el presupuesto maestro: genera un total imprimible independiente basado solo en las areas economicas elegidas.

La hoja impresa oculta controles y areas desmarcadas. Si se excluyen secciones, el documento deja constancia de ellas antes del desglose.

## Persistencia

Los cambios se guardan en `localStorage` bajo la clave `medieval-budget-v1`. El boton de restauracion recupera las cifras iniciales.

## Alcance

La estimacion incluye la construccion y configuracion completas de la experiencia: escenografia, props, puzzles, automatismos, electronica, contenidos, montaje y pruebas.

Quedan fuera los trabajos generales del inmueble que no forman parte de la configuracion de la sala, incluidas las adaptaciones legales o arquitectonicas, las instalaciones reglamentarias de seguridad y evacuacion, las camaras CCTV y otros sistemas de vigilancia del local.
