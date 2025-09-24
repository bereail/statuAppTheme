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
];

// Helper simple (opcional)
export function getStatueBySlug(slug: string) {
  return statuesData.find((s) => s.slug === slug) ?? null;
}
