export const estatuasCards = [
  {
    id: 1,
    slug: "busto-isaac-newell",
    title: "Busto de Isaac Newell",
    image: "/images/estatuas/busto_isacc_newells_2.jpg",
    urlGithub: "https://github.com/bereail",
  },
  {
    id: 2,
    slug: "monumento-a-la-madre",
    title: "Monumento a la Madre",
    image: "/images/estatuas/monumento_madre_rosario_1.jpg",
    urlGithub: "#!",
  },
  {
    id: 3,
    slug: "monumento-a-leandro-n-alem",
    title: "Monumento a Leandro N. Alem",
    image: "/images/estatuas/monumento_alem_rosario_1.jpg",
    urlGithub: "#!",
  },
  {
    id: 4,
    slug: "estatua-de-carlos-gardel",
    title: "Estatua de Carlos Gardel",
    image: "/images/estatuas/estatua_gardel_casa_tango_1.jpg",
    urlGithub: "#!",
  },
].map((x) => ({ ...x, urlDemo: `/estatuas/${x.slug}` }));
