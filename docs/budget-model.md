# Modelo de presupuesto

La pagina `presupuesto.html` presenta una estimacion editable para la construccion integral de la experiencia.

## Base temporal

- Equipo inicial: 2 personas.
- Duracion inicial: 8 meses.
- Inicio previsto: ultimo trimestre de 2026.
- Final previsto: segundo trimestre de 2027.

La tarifa mensual por persona es configurable. El importe de equipo se calcula como personas por meses por tarifa mensual.

## Modos de precio

El modo `Precio acordado` esta activado por defecto y fija el total antes de IVA en 60.000 EUR, incluyendo el porcentaje de imprevistos. La base se reparte de forma ponderada entre las areas y cada partida conserva la proporcion interna de su estimacion tecnica.

Al desactivar el modo acordado, el documento muestra la estimacion completa: dedicacion a jornada completa durante ocho meses mas todas las partidas de construccion e integracion.

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

La hoja impresa oculta controles y areas desmarcadas. Si se excluyen secciones, el documento deja constancia de ellas antes del desglose. La regla `@page` no aplica margen exterior.

## Persistencia

Los cambios se guardan en `localStorage` bajo la clave `medieval-budget-v2`. El boton de restauracion recupera las cifras iniciales y el precio acordado de 60.000 EUR antes de IVA.

## Alcance

La estimacion incluye la construccion y configuracion completas de la experiencia: escenografia, props, puzzles, automatismos, electronica, contenidos, montaje y pruebas.

Quedan fuera los trabajos generales del inmueble que no forman parte de la configuracion de la sala, incluidas las adaptaciones legales o arquitectonicas, las instalaciones reglamentarias de seguridad y evacuacion y los sistemas generales de vigilancia ajenos a las nueve camaras PoE previstas para la experiencia.

## Dotacion Del 19 De Noviembre De 2026

- Dos proyectores: `forest-projection` identifica el de la primera sala; `lab-release` incluye el de la ultima dentro de su partida conjunta.
- Al menos cuatro altavoces, quinto opcional, al menos seis microfonos y un amplificador estereo con audio mono. Seleccion mediante reles y maximo dos altavoces activos a la vez.
- Nueve camaras PoE se incorporan al alcance previsto, sustituyendo su exclusion anterior. Red, potencia, monitorizacion y posible grabacion pendientes de definir.
- La nota de `integration-av` recoge audio compartido y camaras. Cantidad 1 significa un lote, no un unico equipo de cada tipo.

No se han alterado precios, cantidades economicas, IDs ni la clave de almacenamiento; se conservan los ajustes guardados del usuario. El precio acordado de 60.000 EUR antes de IVA y la estimacion anterior no se recalculan automaticamente. Las nuevas notas no son una cotizacion ni garantizan que la dotacion completa quepa en esa asignacion: hay que valorar modelos, accesorios e integracion antes de comprar.

Ver [av-infrastructure.md](av-infrastructure.md) para cantidades tecnicas, validaciones y limites de funcionamiento.
