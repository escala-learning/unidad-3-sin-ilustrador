/* =========================================================
   CURSO · Gobierno, calidad y protección de datos (Unidad 3 · demo)
   ---------------------------------------------------------
   Cliente:   Scala Learning
   Insumo:    ../insumos/DI_Unidad3_comentarios.docx   (DI vigente, 2026-10-08)
   Audiencia: Profesionales del área de Ingeniería de Sistemas con Mención de
              Ingeniería de Software, en el contexto peruano
   Duración:  [PENDIENTE · el DI no la declara]
   Preset visual: scala  (ver instituciones/scala-learning/INSTITUCION.md)
   Versión template: hibrida

   DEMO (decisión del cliente, 2026-10-08): se desarrolla solo el Tema 1, como
   ejemplo de cómo se comporta el OVA. Sin Conclusión (será una sección aparte
   del curso) ni Glosario (va en el LMS). Una sola pregunta de evaluación. El PDF
   y el video se usan como ejemplo. Ver insumos/ERRORES-ORIGEN-2026-10-07.md §E.

   VERSIÓN DERIVADA · SIN ILUSTRACIONES (2026-10-08). Copia de `unidad-3-con-ilustrador` (la
   maestra) sin las cuatro ilustraciones del agente ilustrador: en la introducción,
   la de apertura (ilustracion-cadena) y la de cuerpo (ilustracion-dos-errores,
   2026-10-09); en el tema 1, la de apertura (ilustracion-quien-decide) y la de
   cuerpo (ilustracion-dos-cifras).
   NO SE EDITA A MANO: todo cambio se hace en `unidad-3-con-ilustrador` y esta carpeta se
   vuelve a derivar (copiar y quitar esos cuatro <figure class="sl-ilustracion">,
   cada uno con su comentario y la línea en blanco que lo sigue).
   Las reglas CSS .sl-ilustracion--rotulada quedan en los extras sin uso: se dejan
   para que la copia difiera de la maestra solo en esos cuatro bloques.
   Comprobación: `diff -r` de los dos dist/multipagina solo muestra esos bloques.
   ========================================================= */

module.exports = {

  brand: {
    // Logo negativo (blanco + arco amarillo): el que va sobre el sidebar navy.
    name: '',
    sub:  '',
    logo:       'assets/img/logos/scala-logo.svg',
    logoMobile: 'assets/img/logos/scala-sello.svg',
  },

  course: {
    code:             'UNIDAD 3',
    name:             'Gobierno, calidad y protección de datos',
    subtitle:         'Datos y Persistencia Avanzada: Diseño, Performance y Gobierno',
    duration:         '',
    iso:              '',
    licencia:         '',
    preset:           'scala',
    pdf:              '',            // sin cuaderno de aprendizaje en insumos/
    portadaFullBleed: true,
  },

  /* MENÚ · el orden ES la numeración: mover una línea renumera todo al compilar.
       - `tipo: 'especial'`  → estructurales (inicio, contenido, evaluación,
                               referencias). Llevan icono, no número.
       - `tipo: 'tema'`      → contenido temático. Numerado 1, 2, 3…
     Las secciones son los subtítulos de la pantalla; su `ancla` es el id del
     <section> en el HTML y alimenta el menú lateral. */
  menu: [
    { id: 'portada',         titulo: 'Inicio',                                    tipo: 'especial', icon: 'mdi:home-outline' },
    { id: 'temario',         titulo: 'Contenido de la unidad',                    tipo: 'especial', icon: 'mdi:map-outline' },

    { id: 'introduccion',    titulo: 'Introducción',                              tipo: 'especial', icon: 'mdi:information-variant',
      secciones: [ { titulo: '¿Qué va a lograr en esta unidad?', ancla: 'que-va-a-lograr' } ] },

    { id: 'tema1',           titulo: 'Gobierno de datos',                         tipo: 'tema', numero: 1,
      secciones: [ { titulo: 'Gobierno, gestión y administración de datos', ancla: 'gobierno-gestion' },
                   { titulo: 'Roles, políticas, responsabilidades y ciclo de vida del dato', ancla: 'roles-politicas' } ] },

    { id: 'evaluacion',      titulo: 'Evaluación de la unidad',                   tipo: 'especial', icon: 'mdi:clipboard-check-outline', nota: '1 pregunta' },
    { id: 'referencias',     titulo: 'Referencias',                               tipo: 'especial', icon: 'mdi:bookmark-outline' },
  ],

  /* REFERENCIAS · APA literal del DI §Referencias */
  referencias: [
    'Apache Software Foundation. (s. f.). Apache Atlas documentation.',
    'DAMA International. (2024). The DAMA-DMBOK 2.0 revised edition: Data management body of knowledge. Technics Publications.',
    'LexLatin. (2026, 10 de junio). Perú reforma su régimen de protección de datos personales: qué cambia para las empresas en 2026.',
    'National Institute of Standards and Technology. (2020). NIST Privacy Framework: A tool for improving privacy through enterprise risk management, Version 1.0. U.S. Department of Commerce.',
    'National Institute of Standards and Technology. (2025). NIST Privacy Framework 1.1 (Initial Public Draft, CSWP 40).',
    'OpenLineage Community. (s. f.). OpenLineage documentation.',
    'OpenMetadata. (s. f.). Data lineage. OpenMetadata Documentation.',
    'Perú. Congreso de la República. (2011, 3 de julio). Ley N.º 29733, Ley de Protección de Datos Personales. Diario Oficial El Peruano.',
    'Perú. Ministerio de Justicia y Derechos Humanos. (2024, 30 de noviembre). Decreto Supremo N.º 016-2024-JUS: Reglamento de la Ley N.º 29733, Ley de Protección de Datos Personales. Diario Oficial El Peruano.',
    'PostgreSQL Global Development Group. (2026). Row security policies. PostgreSQL 18 Documentation.',
  ],

  creditos: {
    institucion: 'Scala Learning',
  },
};
