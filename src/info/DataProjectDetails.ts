export const dataDetails: {
  [key: string]: {
    title: string;
    description: string;
    points: string[];
    image: string;
    imageInfoMobile: string;
    imageInfoDesktop: string;
    video: string;
  };
} = {
  '1': {
    title: 'Dropi.co - Replica con ReactJS',
    description:
      ' Tiene como objetivo replicar la página web existente en https://dropi.co utilizando ReactJS principalmente, por medio del cual busco mejorar el rendimiento utilizando el enfoque SPA, ademas de presentar ciertos aportes propios con respecto al diseño de la pagina.',
    points: [
      'Mejora de la adaptabilidad en diversos dispositivos.',
      'Integración de SPA.',
      'Actualizaciones en el diseño de la interfaz.',
      'Optimización de la navegación.',
      'Implementación de la metodología BEM.',
    ],
    image: 'DropiDetailsImage.png',
    imageInfoMobile: 'DropiMobile.png',
    imageInfoDesktop: 'MockupDropiDesktop.png',
    video: '/video/DropiWeb.mp4',
  },
  '2': {
    title: 'Anime Search - Consumo de APIs',
    description:
      'Tiene como objetivo la implementación de búsqueda de anime a partir del consumo de varias APIS como https://jikan.moe/, https://animechan.xyz/, https://nekos.best/, presento una implementación de TypeScript para mejorar la calidad del código con respecto a los errores',
    points: [
      'Diseño responsivo.',
      'Consumo de APIs.',
      'Manejo de datos.',
      'Respuesta rápida',
    ],
    imageInfoMobile: 'SearchMobile.png',
    imageInfoDesktop: 'SearchDesktop.png',
    image: '/projects/animesearch.webp',
    video: '/video/AnimeVideo.mp4',
  },
  '3': {
    title: 'Bancolombia - Replica con Astro',
    description:
      'Actualmente en proceso de replica del sitio web de Bancolombia https://www.bancolombia.com/personas, esta desarrollado principalmente con Astro, ademas de una pequeña integración de TypeScript, por la parte los estilos se realizan por medio de Tailwind',
    points: [
      'Diseño adaptable.',
      'Integración SPA (Mejora de rendimiento y navegación).',
      'Manejo de eventos optimizado.',
      'Componentización de código',
    ],
    imageInfoMobile: 'BancolombiaMobile.png',
    imageInfoDesktop: 'MockupBancolombia.png',
    image: 'BancolombiaDetails.png',
    video: '/video/BancolombiaVideo.mp4',
  },
  '4': {
    title: 'Search Movies and books!',
    description:
      'Fue creado con el propósito de aprender acerca de Svelte, actualmente presenta dos funciones principales las cuales son la búsqueda de libros y películas',
    points: [],
    imageInfoMobile: 'MovieMobile.png',
    imageInfoDesktop: 'MovieDesktop.png',
    image: '/projects/searchmovie.webp',
    video: '/video/BooksVideo.mp4',
  },
};
