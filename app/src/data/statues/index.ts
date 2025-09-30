export type Media = {
  id: number;
  tipo: "foto" | "audio" | "doc";
  url: string;
  pie?: string | null;
  credito?: string | null;
};

export type StatueDetailApi = {
  slug: string;
  titulo: string;
  barrio?: string | null;
  anio?: number | null;
  material?: string | null;
  descripcion_md?: string | null;
  resumen_corto?: string | null;
  resumen_extenso?: string | null;
  dato_curioso?: string | null;
  lat?: number | null;
  lng?: number | null;
  author?: { id: number; nombre: string } | null;
  location?: {
    id: number;
    nombre: string;
    direccion?: string | null;
    barrio?: string | null;
    lat?: number | null;
    lng?: number | null;
  } | null;
  medias?: Media[];

  // opcional: si querés mantener compat con componentes que ya usen esto
  imagen_url?: string | null;
  github_url?: string | null;
};

export const statuesData: StatueDetailApi[] = [

  // 1) BUSTO ISAAC NEWELL
  {
    slug: "busto-isaac-newell",
    titulo: "Busto de Isaac Newell",
    barrio: "Parque Independencia",
    material: "Cemento (réplica 2022 a partir de molde de caucho); original s/d",
    resumen_corto:
      "Busto homenaje a Isaac Newell (1853–1907), maestro inglés, fundador del Colegio Comercial Anglo Argentino e inspirador del Club Atlético Newell's Old Boys.",
    resumen_extenso: `El busto se ubica en la intersección de **Av. Centenario Newell’s Old Boys** y **Av. Intendente Morcillo**, frente al estadio **Marcelo Bielsa**, en el Parque de la Independencia.

**Hecho vandálico (2021)**  
— Madrugada del **14/11/2021 (~02:45)**: el busto fue **decapitado**; circularon imágenes del hecho en redes.  
— El club repudió el ataque e inició gestiones para su reposición.

**Restauración y reposición (2022)**  
— El **11/05/2022** el club informó la **restauración y reposición**: se realizó un **molde de caucho** duradero; se produjo una **réplica en cemento**, terminada a mano por escultores y coordinada junto al **Departamento de Cultura** y la **Dirección de Restauración de la Municipalidad de Rosario**.  
— El molde permite generar **copias futuras** sin retirar la pieza original.

**Isaac Newell**  
Docente inglés radicado en Rosario; junto a su esposa fundó en **1884** el **Colegio Comercial Anglo Argentino**; su legado educativo y deportivo inspiró la creación del **Club Atlético Newell’s Old Boys** (1903).`,
    dato_curioso:
      "Para la reposición se creó un molde permanente que permite hacer copias sin mover la pieza original, a fin de protegerla y facilitar reposiciones futuras.",
    author: { id: 1, nombre: "No identificado públicamente" },
    location: {
      id: 1,
      nombre: "Ingreso Estadio Marcelo Bielsa",
      direccion: "Av. Centenario Newell’s O.B. e Int. Morcillo",
      barrio: "Parque Independencia",
      lat: -32.9581,
      lng: -60.6628,
    },
    lat: -32.9581,
    lng: -60.6628,
    medias: [
      { id: 1, tipo: "foto", url: "/images/estatuas/busto_isacc_newells_1.webp", pie: "Vista frontal", credito: "StatuApp" },
      { id: 2, tipo: "foto", url: "/images/estatuas/busto_isacc_newells_2.jpg",  pie: "Vista lateral", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/busto_isacc_newells_3.jpg",  pie: "Detalle",       credito: "StatuApp" },
      { id: 4, tipo: "foto", url: "/images/estatuas/busto_isacc_newells_4.jpg",  pie: "Ubicación",     credito: "StatuApp" },
      { id: 5, tipo: "foto", url: "/images/estatuas/busto_isacc_newells_5.jpg",  pie: "Otra toma",     credito: "StatuApp" },
    ],
    imagen_url: "/images/estatuas/busto_isacc_newells_1.webp",
  },

  // 2) MONUMENTO A LEANDRO N. ALEM
  {
    slug: "monumento-a-leandro-n-alem",
    titulo: "Monumento a Leandro N. Alem",
    anio: 1943,
    material: "Bronce fundido (pedestal de granito)",
    barrio: "Zona Norte (Parque Alem)",
    resumen_corto:
      "Monumento en bronce trasladado al Parque Alem en 1943. Lema: «Que se rompa, pero que no se doble».",
    resumen_extenso: `El **Monumento a Leandro N. Alem** es una obra del escultor **Guillermo Gianinazzi** en **bronce fundido** sobre **pedestal de granito**. Fue **inaugurada en 1922** en el Parque Independencia y **trasladada el 17/07/1943** a su ubicación actual en el **Parque Alem**.

El conjunto recuerda al líder político y fundador de la Unión Cívica Radical. En el basamento puede leerse el lema partidario: **«Que se rompa, pero que no se doble»**.

**Cronología breve**  
- 1922: inauguración en Parque Independencia.  
- 1943: reubicación al Parque Alem (zona norte).

**Ubicación**  
Parque Leandro N. Alem, sector próximo al puente Leandro N. Alem y al complejo de piletas.`,
    dato_curioso:
      "El basamento lleva el lema radical «Que se rompa, pero que no se doble». La obra estuvo primero en el Parque Independencia y en 1943 se trasladó al parque que hoy lleva su nombre.",
    author: { id: 2, nombre: "Guillermo Gianinazzi" },
    location: {
      id: 2,
      nombre: "Parque Leandro N. Alem",
      barrio: "Zona Norte",
      lat: -32.91061,
      lng: -60.67779,
    },
    lat: -32.91061,
    lng: -60.67779,
    medias: [
      { id: 1, tipo: "foto", url: "/images/estatuas/monumento_alem_rosario_1.jpg", pie: "Vista 1", credito: "StatuApp" },
      { id: 2, tipo: "foto", url: "/images/estatuas/monumento_alem_rosario_2.jpg", pie: "Vista 2", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/monumento_alem_rosario_3.jpg", pie: "Vista 3", credito: "StatuApp" },
    ],
    imagen_url: "/images/estatuas/monumento_alem_rosario_1.jpg",
  },

  // 3) ESTATUA DE CARLOS GARDEL (Casa del Tango)
  {
    slug: "estatua-de-carlos-gardel",
    titulo: "Estatua de Carlos Gardel",
    anio: 1975,
    material: "Bronce patinado",
    barrio: "Centro — Frente a la Casa del Tango (Av. Illia y España)",
    resumen_corto:
      "Obra en bronce de Reynaldo Baduna (1975); reinstalada en 2017 frente a la Casa del Tango.",
    resumen_extenso: `La estatua de **Carlos Gardel** (c. **2,50 m**, **bronce patinado**) fue creada por el escultor rosarino **Reynaldo Baduna** y **inaugurada el 24 de junio de 1975** en la **Plazoleta Gardel** (Cafferata y Córdoba). Posteriormente fue **trasladada** a la esquina de **Córdoba y Vera Mujica** y, en **2017**, **reinstalada** frente a la **Casa del Tango** (Av. Illia y España), coincidiendo con el **Día del Tango**.

**Iconografía**  
Traje con **chaleco**, **moño**, pañuelo en la solapa y **llavero** colgando del bolsillo derecho; mano izquierda en el bolsillo y en la derecha un **cigarrillo** casi consumido.

**Carácter y simbolismo**  
Se considera la **primera escultura de cuerpo entero** de Gardel emplazada en Argentina (exceptuando la del mausoleo de **La Chacarita**). En **1975** se colocó en la base un **cofre con tierra de Toulouse**, su ciudad natal.

**Cronología breve**  
- **24/06/1975**: inauguración en Plazoleta Gardel.  
  Traslado a **Córdoba y Vera Mujica**.  
- **2017**: reinstalada frente a la **Casa del Tango** (Costa Central).`,
    dato_curioso:
      "En 1975 se colocó en el basamento un cofre con tierra de Toulouse; y la pieza es señalada como la primera Gardel de cuerpo entero en el país (salvo la de su mausoleo).",
    author: { id: 3, nombre: "Reynaldo Baduna" },
    location: {
      id: 3,
      nombre: "Casa del Tango",
      direccion: "Av. Illia y España",
      barrio: "Centro",
    },
    medias: [
      { id: 1, tipo: "foto", url: "/images/estatuas/estatua_gardel_casa_tango_1.jpg", pie: "Vista 1", credito: "StatuApp" },
      { id: 2, tipo: "foto", url: "/images/estatuas/estatua_gardel_casa_tango_2.jpg", pie: "Vista 2", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/estatua_gardel_casa_tango_3.jpg", pie: "Vista 3", credito: "StatuApp" },
      { id: 4, tipo: "foto", url: "/images/estatuas/estatua_gardel_casa_tango_4.jpg", pie: "Vista 4", credito: "StatuApp" },
      { id: 5, tipo: "foto", url: "/images/estatuas/estatua_gardel_casa_tango_5.webp", pie: "Vista 5", credito: "StatuApp" },
      { id: 6, tipo: "foto", url: "/images/estatuas/estatua_gardel_casa_tango_6.jpg", pie: "Vista 6", credito: "StatuApp" },
    ],
    imagen_url: "/images/estatuas/estatua_gardel_casa_tango_1.jpg",
  },

  // 4) MONUMENTO A LA MADRE (Rosedal)
  {
    slug: "monumento-a-la-madre",
    titulo: "Monumento a la Madre",
    anio: 1967,
    material: "Bronce (cera perdida)",
    barrio: "Parque Independencia",
    resumen_corto:
      "Obra en bronce de José Gerbino, inaugurada el 10/12/1967 en el Rosedal del Parque de la Independencia. Representa a una madre con sus hijos sobre un globo, como símbolo de la madre universal.",
    resumen_extenso: `Inaugurado el **10 de diciembre de 1967**, en un acto presidido por el intendente **Luis Beltramo**, el Monumento a la Madre se erigió en el **Rosedal** del Parque de la Independencia.

La obra del escultor **José Gerbino** representa a una mujer en la plenitud de la vida junto a sus hijos, de pie sobre un **globo terráqueo** que simboliza a la **madre universal**. Se levanta sobre una **espiral alegórica** que evoca elevación espiritual.

**Proceso de realización**  
- El modelado se efectuó en un espacio cedido en los “Viejos Tribunales” (hoy **Facultad de Derecho**).  
- Al finalizar, debió **demoler** la parte superior de la habitación para poder retirarla por no haberse previsto su tamaño final.  
- Fue fundida en **bronce a la cera perdida** en **Gentile Hnos.**, con aportes de ideas del arq. **Mario Segovia Mayer**.  

**Impulso y financiamiento**  
- Iniciativa del **Círculo de la Publicidad de Rosario** (presidido por **Alfredo Solina**).  
- Emisión de **bonos** y campaña para que la población donara **objetos de bronce**.  
- Fue el **cuarto** monumento en Rosario en honor a la madre.  
- **Altura** aproximada: **12 m**. **Costo**: **4 millones de pesos** (de la época).  

**Inscripción en la base** : “La ciudad de Rosario, a todas las madres del mundo”. 

**Acta y hechos posteriores**  
- En el interior se depositaron un **acta**, diarios y otros objetos, con la idea de abrirlo en **2067** (a 100 años).  
- Años más tarde el monumento fue **vandalizado**: se agujereó el **globo** y **no** se hallaron los elementos guardados.`,
    dato_curioso:
      "Cápsula del tiempo: Dentro del globo se depositaron un mensaje, el acta, diarios y películas de la época, con la idea de abrirlos en 2067 (a los 100 años). En 1984 la obra fue vandalizada, se abrió el globo y se robó el contenido; aún hoy puede verse el parche de soldadura.",
    author: { id: 4, nombre: "José Gerbino" },
    location: {
      id: 4,
      nombre: "Rosedal — Parque de la Independencia",
      barrio: "Parque Independencia",
      lat: -32.9572,
      lng: -60.662,
    },
    lat: -32.9572,
    lng: -60.662,
    medias: [
      { id: 1, tipo: "foto", url: "/images/estatuas/monumento_madre_rosario_1.jpg", pie: "Vista 1", credito: "StatuApp" },
      { id: 2, tipo: "foto", url: "/images/estatuas/monumento_madre_rosario_2.jpg", pie: "Vista 2", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/monumento_madre_rosario_3.jpg", pie: "Vista 3", credito: "StatuApp" },
      { id: 4, tipo: "foto", url: "/images/estatuas/monumento_madre_rosario_4.jpg", pie: "Vista 4", credito: "StatuApp" },
      { id: 5, tipo: "foto", url: "/images/estatuas/monumento_madre_rosario_5.webp", pie: "Vista 5", credito: "StatuApp" },
    ],
    imagen_url: "/images/estatuas/monumento_madre_rosario_1.jpg",
  },

  // 5) MONUMENTO A LA CONSTITUCIÓN (Plaza 25 de Mayo)
  {
    slug: "monumento-a-la-constitucion",
    titulo: "Monumento a la Constitución",
    anio: 1855, // si preferís 1856, cambiá aquí y listo
    material: "Columna jónica de mampostería; verja de hierro",
    barrio: "Centro",
    resumen_corto:
      "Primer monumento público de Rosario: columna jónica con alegoría de la Libertad, inaugurada el 25/05/1855 en el centro de Plaza 25 de Mayo. Fue retirada hacia 1879–1882 y en 1883 se la reemplazó por la Columna a la Libertad de Alejandro Biggi.",
    resumen_extenso: `Ubicada en el punto central de la **Plaza 25 de Mayo**, la obra —atribuida al arquitecto/escultor **Demetrio Isola**— consistía en una **columna jónica** sobre pedestal con **remate alegórico** y un **cercado de hierro** perimetral. Fue el **primer monumento público** de la ciudad, erigido para conmemorar la **Constitución Nacional de 1853**.

**Cronología breve**  
- **25/05/1855** (*otras crónicas mencionan **25/05/1856***): inauguración de la columna.  
- **1879–1882**: deterioro y **retiro/demolición** (algunas versiones hablan de caída por temporal).  
- **09/07/1883**: inauguración de la **Columna a la Libertad** (Monumento a la Independencia) de **Alejandro Biggi**, que ocupa su lugar.

**Contexto**  
La pieza, recordada en fuentes como “**Pirámide/Columna de la Constitución**”, representaba el primer intento de monumentalización cívica en Rosario, previo al ciclo monumental de fines del siglo XIX.`,
    dato_curioso:
      "En algunas referencias se menciona también a **Tomás Fuhr** en relación con la alegoría del remate. La obra aparece en crónicas con los nombres “Pirámide” o “Columna de la Constitución”, célebre por su **verja de hierro**.",
    author: { id: 5, nombre: "Demetrio Isola (atr.)" },
    location: {
      id: 5,
      nombre: "Plaza 25 de Mayo",
      direccion: "Entre Santa Fe, Buenos Aires, Laprida y Córdoba",
      barrio: "Centro",
      lat: -32.94717,
      lng: -60.63337,
    },
    lat: -32.94717,
    lng: -60.63337,
    medias: [
      { id: 1, tipo: "foto", url: "/images/estatuas/monumento_constitucion_1.jpg", pie: "Columna en Plaza 25 de Mayo (reconstrucción/archivo)", credito: "StatuApp" },
      { id: 2, tipo: "foto", url: "/images/estatuas/monumento_constitucion_2.jpg", pie: "Detalle de la base y verja", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/monumento_constitucion_3.jpg", pie: "Vista histórica de la plaza", credito: "StatuApp" },
      { id: 4, tipo: "foto", url: "/images/estatuas/monumento_constitucion_4.jpg", pie: "Vista histórica de la plaza", credito: "StatuApp" }
    ],
    imagen_url: "/images/estatuas/monumento_constitucion_1.jpg",
  },

  // 6) COLUMNA A LA LIBERTAD (Plaza 25 de Mayo)
  {
    slug: "columna-libertad",
    titulo: "Columna a la Libertad (Monumento a la Independencia)",
    anio: 1883,
    material: "Mármol de Carrara (columna y esculturas)",
    barrio: "Centro",
    resumen_corto:
      "Conjunto monumental de Alejandro Biggi inaugurado el 09/07/1883: columna con la Libertad en la cúspide y estatuas de San Martín, Belgrano, Moreno y Rivadavia en el basamento.",
    resumen_extenso: `Obra del escultor italiano **Alejandro Biggi** en **mármol de Carrara**, inaugurada el **9 de julio de 1883** en el centro de la **Plaza 25 de Mayo**. El conjunto se organiza en un basamento con cuatro figuras (**San Martín**, **Belgrano**, **Mariano Moreno** y **Bernardino Rivadavia**), del que surge un pedestal **octogonal** y la **columna** coronada por la **Libertad** con **gorro frigio**. La figura sostiene la **bandera argentina** y apoya sus pies en un **yugo** y una **cadena rota**, emblemas de emancipación. Ocupa el sitio del antiguo **Monumento a la Constitución** (1855/56).`,
    dato_curioso:
      "Crónicas locales señalan que la obra fue tallada en Italia y trasladada por barco para su montaje en la plaza; se dice que la estatua mira hacia el río Paraná.",
    author: { id: 6, nombre: "Alejandro Biggi" },
    location: {
      id: 6,
      nombre: "Plaza 25 de Mayo",
      direccion: "Entre Santa Fe, Buenos Aires, Laprida y Córdoba",
      barrio: "Centro",
      lat: -32.94717,
      lng: -60.63337,
    },
    lat: -32.94717,
    lng: -60.63337,
    medias: [
      { id: 1, tipo: "foto", url: "/images/estatuas/columna_libertad_1.jpg", pie: "Vista general", credito: "StatuApp" },
      { id: 2, tipo: "foto", url: "/images/estatuas/columna_libertad_2.jpg", pie: "La Libertad (detalle)", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/columna_libertad_3.jpg", pie: "La Libertad (detalle)", credito: "StatuApp" },
      { id: 4, tipo: "foto", url: "/images/estatuas/columna_libertad_4.webp", pie: "Próceres en la base", credito: "StatuApp" }
    ],
    imagen_url: "/images/estatuas/columna_libertad_rosario_1.jpg",
  },

  // 7) MONUMENTO A DOMINGO F. SARMIENTO (Plaza Sarmiento)
  {
    slug: "monumento-sarmiento",
    titulo: "Monumento a Domingo Faustino Sarmiento",
    anio: 1911,
    material: "Bronce y piedra",
    barrio: "Centro",
    resumen_corto:
      "Obra del escultor Víctor de Pol inaugurada el 20 de diciembre de 1911 en la Plaza Sarmiento. Sustituyó a la antigua fuente central y rinde homenaje al educador y presidente argentino.",
    resumen_extenso: `El **Monumento a Domingo Faustino Sarmiento** se emplazó en el centro de la **Plaza Sarmiento** (ex Plaza Santa Rosa) tras un concurso de maquetas. Fue realizado por el escultor ítalo-argentino **Víctor de Pol** y se inauguró el **20 de diciembre de 1911**, fecha elegida por coincidir con el **centenario del natalicio de Sarmiento**, declarada feriado en toda la provincia de Santa Fe.  
La obra combina un pedestal de piedra con la figura de **Sarmiento en bronce**, acompañado por una alegoría de la **Historia**, inspirada en la actriz italiana **Aida Laura Argia Gramática**. El monumento fue concebido como hito cívico y cultural en homenaje al rol de Sarmiento como **maestro de América** y reformador educativo.  
Tras su instalación se modificó la traza urbana: en marzo de 1912 se autorizó la apertura y pavimentación de la calle **San Juan** con una calzada poligonal rodeando el monumento.`,
    dato_curioso:
      "El modelo de la figura alegórica de la Historia fue la actriz italiana Aida Gramática. La inauguración se postergó un año por la demora en el traslado de la obra desde Europa.",
    author: { id: 7, nombre: "Víctor de Pol" },
    location: {
      id: 7,
      nombre: "Plaza Sarmiento",
      direccion: "Entre San Luis, Entre Ríos, San Juan y Corrientes",
      barrio: "Centro",
      lat: -32.95185,
      lng: -60.64352
    },
    lat: -32.95185,
    lng: -60.64352,
    medias: [
      { id: 1, tipo: "foto", url: "/images/estatuas/monumento_sarmiento_1.jpg", pie: "Vista general del monumento", credito: "StatuApp" },
      { id: 2, tipo: "foto", url: "/images/estatuas/monumento_sarmiento_2.jpg", pie: "Figura de Sarmiento", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/monumento_sarmiento_3.jpg", pie: "Detalle alegoría de la Historia", credito: "StatuApp" },
      { id: 4, tipo: "foto", url: "/images/estatuas/monumento_sarmiento.jpg",   pie: "Detalle alegoría de la Historia", credito: "StatuApp" }
    ],
    imagen_url: "/images/estatuas/sarmiento_1.jpg"
  },

  // 8) ESTATUA ECUESTRE DE JOSÉ DE SAN MARTÍN (Plaza San Martín)
  {
    slug: "monumento-san-martin",
    titulo: "Estatua ecuestre de José de San Martín",
    anio: 1913,
    material: "Bronce (escultura) y piedra (basamento)",
    barrio: "Centro",
    resumen_corto:
      "Monumento ecuestre en honor al General José de San Martín, inaugurado el 21 de mayo de 1913 en la Plaza San Martín de Rosario. Es una réplica de la estatua de Boulogne-sur-Mer (Francia).",
    resumen_extenso: `El **Monumento ecuestre a José de San Martín** se ubica en la **Plaza San Martín**, en pleno centro de Rosario. Fue inaugurado el **21 de mayo de 1913** y consiste en una réplica de la célebre estatua emplazada en **Boulogne-sur-Mer (Francia)**, ciudad donde murió el Libertador en 1850.  
La obra muestra al prócer montado a caballo en actitud de marcha, sobre un **basamento de piedra** con relieves alegóricos y placas conmemorativas. Su instalación formó parte de un plan de la Municipalidad de Rosario para dotar a la ciudad de monumentos cívicos que recordaran a las figuras fundamentales de la historia nacional.  
El conjunto se convirtió en punto de encuentro para actos patrióticos y escolares, y consolidó a la **Plaza San Martín** como espacio público dedicado al homenaje del Libertador de América.`,
    dato_curioso:
      "La estatua fue encargada como réplica de la de Boulogne-sur-Mer, ciudad francesa donde falleció San Martín; varias ciudades argentinas poseen copias similares.",
    author: { id: 8, nombre: "Réplicas autorizadas del original de Boulogne-sur-Mer" },
    location: {
      id: 8,
      nombre: "Plaza San Martín",
      direccion: "Entre Córdoba, Dorrego, Moreno y Santa Fe",
      barrio: "Centro",
      lat: -32.94297,
      lng: -60.64643
    },
    lat: -32.94297,
    lng: -60.64643,
    medias: [
      { id: 1, tipo: "foto", url: "/images/estatuas/monumento_san_martin_1.jpg", pie: "Vista general del monumento", credito: "StatuApp" },
      { id: 2, tipo: "foto", url: "/images/estatuas/monumento_san_martin_2.jpg", pie: "Detalle de la figura ecuestre", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/monumento_san_martin_3.jpg", pie: "Placas conmemorativas en el basamento", credito: "StatuApp" }
    ],
    imagen_url: "/images/estatuas/monumento_san_martin_1.jpg"
  },

// 10) MONUMENTO A MANUEL BELGRANO (Plaza Belgrano)
{
  slug: "monumento-belgrano",
  titulo: "Monumento a Manuel Belgrano",
  anio: 1957,
  material: "Bronce (figura) y granito (basamento)",
  barrio: "Plaza Belgrano — Barrio Alberdi",
  resumen_corto:
    "Monumento en honor al creador de la Bandera, inaugurado en 1957 en la Plaza Belgrano.",
  resumen_extenso: `El monumento a **Manuel Belgrano** se inauguró en **1957** en la **Plaza Belgrano**, ubicada en el barrio Alberdi.  
La obra muestra al prócer en actitud firme, sosteniendo un pliego en la mano, como símbolo de su rol en la creación de la **Bandera Nacional** en Rosario (1812).  
Se realizó en **bronce** y descansa sobre un **basamento de granito**.`,
  dato_curioso:
    "Rosario tiene dos homenajes centrales a Belgrano: este monumento en Plaza Belgrano y el Monumento Nacional a la Bandera.",
  author: { id: 10, nombre: "No identificado públicamente" },
  location: {
    id: 10,
    nombre: "Plaza Belgrano",
    barrio: "Alberdi",
    lat: -32.9185,
    lng: -60.6841,
  },
  lat: -32.9185,
  lng: -60.6841,
  medias: [
    { id: 1, tipo: "foto", url: "/images/estatuas/monumento_belgrano_1.jpg", pie: "Vista general", credito: "StatuApp" },
     { id: 2, tipo: "foto", url: "/images/estatuas/monumento_belgrano_2.jpg", pie: "Vista general", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/monumento_belgrano_3.jpg", pie: "Vista general", credito: "StatuApp" },
  ],
  imagen_url: "/images/estatuas/monumento_belgrano_1.jpg",
},

// 11) MONUMENTO A MARIANO MORENO (Plaza Mariano Moreno)
{
  slug: "monumento-mariano-moreno",
  titulo: "Monumento a Mariano Moreno",
  anio: 1910,
  material: "Bronce y granito",
  barrio: "Plaza Mariano Moreno",
  resumen_corto:
    "Monumento inaugurado en 1910 en la plaza que lleva su nombre, obra del escultor Arnoldo Zocchi.",
  resumen_extenso: `El monumento a **Mariano Moreno**, secretario de la Primera Junta, se inauguró en **1910** con motivo del **Centenario de la Revolución de Mayo**.  
La obra, del escultor italiano **Arnoldo Zocchi**, muestra a Moreno de pie con gesto enérgico, sobre un pedestal de granito adornado con relieves alegóricos.`,
  dato_curioso:
    "Forma parte de los monumentos conmemorativos instalados en Rosario durante las celebraciones del Centenario (1910).",
  author: { id: 11, nombre: "Arnoldo Zocchi" },
  location: {
    id: 11,
    nombre: "Plaza Mariano Moreno",
    barrio: "Echesortu",
    lat: -32.9504,
    lng: -60.6747,
  },
  lat: -32.9504,
  lng: -60.6747,
  medias: [
    { id: 1, tipo: "foto", url: "/images/estatuas/mariano_moreno_1.jpg", pie: "Vista general", credito: "StatuApp" },
     { id: 2, tipo: "foto", url: "/images/estatuas/mariano_moreno_2.jpg", pie: "Vista general", credito: "StatuApp" },
      { id: 3, tipo: "foto", url: "/images/estatuas/mariano_moreno_3.jpg", pie: "Vista general", credito: "StatuApp" }
  ],
  imagen_url: "/images/estatuas/mariano_moreno_1.jpg",
},

/*// 12) MONUMENTO A LISANDRO DE LA TORRE (Parque Independencia)
{
  slug: "monumento-lisandro-de-la-torre",
  titulo: "Monumento a Lisandro de la Torre",
  anio: 1946,
  material: "Bronce y piedra",
  barrio: "Parque Independencia",
  resumen_corto:
    "Monumento al político y orador Lisandro de la Torre, inaugurado en 1946 en el Parque Independencia.",
  resumen_extenso: `Este monumento homenajea a **Lisandro de la Torre** (1868–1939), senador y líder político de la democracia progresista.  
Fue inaugurado en **1946** en el Parque Independencia. La obra combina un pedestal de piedra con una figura en bronce que lo representa de pie en actitud oratoria.`,
  dato_curioso:
    "Lisandro de la Torre es considerado uno de los políticos más influyentes de Rosario; su busto también figura en otros espacios públicos.",
  author: { id: 12, nombre: "No identificado públicamente" },
  location: {
    id: 12,
    nombre: "Parque Independencia",
    barrio: "Centro",
    lat: -32.9580,
    lng: -60.6625,
  },
  lat: -32.9580,
  lng: -60.6625,
  medias: [
    { id: 1, tipo: "foto", url: "/images/estatuas/monumento_lisandro_torre_1.jpg", pie: "Vista general", credito: "StatuApp" }
  ],
  imagen_url: "/images/estatuas/monumento_lisandro_torre_1.jpg",
},*/

// 9) MONUMENTO A CRISTÓBAL COLÓN (Plaza Italia)
{
  slug: "monumento-colon",
  titulo: "Monumento a Cristóbal Colón",
  anio: 1892,
  material: "Mármol de Carrara",
  barrio: "Centro — Plaza Italia",
  resumen_corto:
    "Monumento en mármol inaugurado el 12 de octubre de 1892 en la Plaza Italia, obra de Arsenio Vincenzo.",
  resumen_extenso: `El monumento a **Cristóbal Colón** se erige en la **Plaza Italia**, inaugurado el **12 de octubre de 1892** para conmemorar los 400 años del descubrimiento de América.  
La escultura fue realizada por el artista italiano **Arsenio Vincenzo** en **mármol de Carrara**, y representa a Colón de pie, señalando hacia el horizonte.  
Constituye uno de los primeros monumentos de gran porte emplazados en la ciudad.`,
  dato_curioso:
    "Fue inaugurado en coincidencia con el cuarto centenario del viaje de Colón.",
  author: { id: 9, nombre: "Arsenio Vincenzo" },
  location: {
    id: 9,
    nombre: "Plaza Italia",
    barrio: "Centro",
    lat: -32.9452,
    lng: -60.6399,
  },
  lat: -32.9452,
  lng: -60.6399,
  medias: [
    { id: 1, tipo: "foto", url: "/images/estatuas/monumento_colon_1.jpg", pie: "Vista general", credito: "StatuApp" },
    { id: 2, tipo: "foto", url: "/images/estatuas/monumento_colon_2.jpg", pie: "Detalle", credito: "StatuApp" }
  ],
  imagen_url: "/images/estatuas/monumento_colon_1.jpg",
},

// 10) MONUMENTO A MANUEL BELGRANO (Plaza Belgrano)
{
  slug: "monumento-belgrano",
  titulo: "Monumento a Manuel Belgrano",
  anio: 1957,
  material: "Bronce (figura) y granito (basamento)",
  barrio: "Plaza Belgrano — Barrio Alberdi",
  resumen_corto:
    "Monumento en honor al creador de la Bandera, inaugurado en 1957 en la Plaza Belgrano.",
  resumen_extenso: `El monumento a **Manuel Belgrano** se inauguró en **1957** en la **Plaza Belgrano**, ubicada en el barrio Alberdi.  
La obra muestra al prócer en actitud firme, sosteniendo un pliego en la mano, como símbolo de su rol en la creación de la **Bandera Nacional** en Rosario (1812).  
Se realizó en **bronce** y descansa sobre un **basamento de granito**.`,
  dato_curioso:
    "Rosario tiene dos homenajes centrales a Belgrano: este monumento en Plaza Belgrano y el Monumento Nacional a la Bandera.",
  author: { id: 10, nombre: "No identificado públicamente" },
  location: {
    id: 10,
    nombre: "Plaza Belgrano",
    barrio: "Alberdi",
    lat: -32.9185,
    lng: -60.6841,
  },
  lat: -32.9185,
  lng: -60.6841,
  medias: [
    { id: 1, tipo: "foto", url: "/images/estatuas/monumento_belgrano_1.jpg", pie: "Vista general", credito: "StatuApp" },
    { id: 2, tipo: "foto", url: "/images/estatuas/monumento_belgrano_2.jpg", pie: "Vista general", credito: "StatuApp" },
  ],
  imagen_url: "/images/estatuas/monumento_belgrano_1.jpg",
},

// 11) MONUMENTO A MARIANO MORENO (Plaza Mariano Moreno)
{
  slug: "monumento-mariano-moreno",
  titulo: "Monumento a Mariano Moreno",
  anio: 1910,
  material: "Bronce y granito",
  barrio: "Plaza Mariano Moreno",
  resumen_corto:
    "Monumento inaugurado en 1910 en la plaza que lleva su nombre, obra del escultor Arnoldo Zocchi.",
  resumen_extenso: `El monumento a **Mariano Moreno**, secretario de la Primera Junta, se inauguró en **1910** con motivo del **Centenario de la Revolución de Mayo**.  
La obra, del escultor italiano **Arnoldo Zocchi**, muestra a Moreno de pie con gesto enérgico, sobre un pedestal de granito adornado con relieves alegóricos.`,
  dato_curioso:
    "Forma parte de los monumentos conmemorativos instalados en Rosario durante las celebraciones del Centenario (1910).",
  author: { id: 11, nombre: "Arnoldo Zocchi" },
  location: {
    id: 11,
    nombre: "Plaza Mariano Moreno",
    barrio: "Echesortu",
    lat: -32.9504,
    lng: -60.6747,
  },
  lat: -32.9504,
  lng: -60.6747,
  medias: [
    { id: 1, tipo: "foto", url: "/images/estatuas/monumento_mariano_moreno_1.jpg", pie: "Vista general", credito: "StatuApp" }
  ],
  imagen_url: "/images/estatuas/monumento_mariano_moreno_1.jpg",
},
// MONUMENTO A OVIDIO LAGOS (Boulevard Oroño)
{
  slug: "monumento-ovidio-lagos",
  titulo: "Monumento a Ovidio Lagos",
  anio: 1930,
  material: "Bronce (busto) sobre pedestal de piedra",
  barrio: "Parque Independencia",
  resumen_corto:
    "Busto en honor a Ovidio Lagos, fundador del diario La Capital, inaugurado en 1930 en el Boulevard Oroño, frente al Parque Independencia.",
  resumen_extenso: `El Monumento a **Ovidio Lagos** fue inaugurado en **1930** y se encuentra en el tradicional **Boulevard Oroño**, a la altura del Parque Independencia.  
La obra, realizada por el escultor **José Fioravanti**, consiste en un busto de **bronce** que representa a Lagos con porte sobrio y decidido, montado sobre un pedestal de piedra.  
Ovidio Lagos fue el fundador del diario **La Capital** en 1867, el más antiguo en actividad de la Argentina, y un destacado defensor de la **libertad de prensa**.`,
  dato_curioso:
    "El diario La Capital, fundado por Ovidio Lagos, es actualmente el periódico en actividad más antiguo del país.",
  // 👇 asegurate que el id no choque con otro (cambialo si ya existe)
  author: { id: 12, nombre: "José Fioravanti" },
  location: {
    id: 12,
    nombre: "Boulevard Oroño y Jujuy",
    direccion: "Boulevard Oroño y Jujuy",
    barrio: "Parque Independencia",
    lat: -32.9467,
    lng: -60.6555,
  },
  // si preferís, podés mover lat/lng al root y quitar de location
  lat: -32.9467,
  lng: -60.6555,
  medias: [
    {
      id: 1,
      tipo: "foto",
      url: "/images/estatuas/ovidio_lagos_1.jpg",
      pie: "Vista frontal del busto de Ovidio Lagos",
      credito: "Archivo Municipal de Rosario",
    },
    {
      id: 2,
      tipo: "foto",
      url: "/images/estatuas/ovidio_lagos_2.jpg",
      pie: "Detalle del busto en bronce sobre pedestal",
      credito: "Archivo Municipal de Rosario",
    },
        {
      id: 3,
      tipo: "foto",
      url: "/images/estatuas/ovidio_lagos_3.jpg",
      pie: "Detalle del busto en bronce sobre pedestal",
      credito: "Archivo Municipal de Rosario",
    },
        {
      id: 4,
      tipo: "foto",
      url: "/images/estatuas/ovidio_lagos_4.jpg",
      pie: "Detalle del busto en bronce sobre pedestal",
      credito: "Archivo Municipal de Rosario",
    },
  ],
  
  imagen_url: "/images/estatuas/ovidio_lagos_1.jpg",
}

  
/*// 12) MONUMENTO A LISANDRO DE LA TORRE (Parque Independencia)
{
  slug: "monumento-lisandro-de-la-torre",
  titulo: "Monumento a Lisandro de la Torre",
  anio: 1946,
  material: "Bronce y piedra",
  barrio: "Parque Independencia",
  resumen_corto:
    "Monumento al político y orador Lisandro de la Torre, inaugurado en 1946 en el Parque Independencia.",
  resumen_extenso: `Este monumento homenajea a **Lisandro de la Torre** (1868–1939), senador y líder político de la democracia progresista.  
Fue inaugurado en **1946** en el Parque Independencia. La obra combina un pedestal de piedra con una figura en bronce que lo representa de pie en actitud oratoria.`,
  dato_curioso:
    "Lisandro de la Torre es considerado uno de los políticos más influyentes de Rosario; su busto también figura en otros espacios públicos.",
  author: { id: 12, nombre: "No identificado públicamente" },
  location: {
    id: 12,
    nombre: "Parque Independencia",
    barrio: "Centro",
    lat: -32.9580,
    lng: -60.6625,
  },
  lat: -32.9580,
  lng: -60.6625,
  medias: [
    { id: 1, tipo: "foto", url: "/images/estatuas/monumento_lisandro_torre_1.jpg", pie: "Vista general", credito: "StatuApp" }
  ],
  imagen_url: "/images/estatuas/monumento_lisandro_torre_1.jpg",
},
*/
  ]



// Helper simple (opcional)
export function getStatueBySlug(slug: string) {
  return statuesData.find((s) => s.slug === slug) ?? null;
}
