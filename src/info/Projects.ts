/* The code snippet is exporting an array of objects named `projects`. Each object
represents a project and contains properties such as `title`, `description`, `link`, `github`,
`image`, `tags`, `color`, and `id`. These objects describe different projects with details like
their titles, descriptions, links to the project and GitHub repository, images, tags indicating
technologies used, colors for styling, and unique identifiers. */
import { tags } from '../components/Tags.astro';
export const ProjectData = [
  // {
  //   title: "Anime Search - Consumo de APIs",
  //   description:
  //     "Tiene como objetivo la implementación de búsqueda de anime a partir del consumo de varias APIS como https://jikan.moe/, https://animechan.xyz/, https://nekos.best/, presento una implementación de TypeScript para mejorar la calidad del código con respecto a los errores",
  //   github: "https://github.com/Deyverson1/anime-search",
  //   link: "https://anime-search-deyverson1.vercel.app/",
  //   image: "/projects/animesearch.webp",
  //   tags: [tags.TypeScript, tags.Tailwind],
  //   color: "border-yellow-600",
  //   id: "2",
  // },
  {
    title: 'Bancolombia - Clon IU/UX',
    description:
      'Clon funcional de UI/UX del sitio web de Bancolombia, desarrollado con Astro y enfocado en estructura, rendimiento y responsividad',
    github: 'https://github.com/Deyverson1/bancolombia-replic',
    link: 'https://practica-iu-ix-bancolombia.netlify.app/',
    image: '/projects/bancolombia.webp',
    tags: [tags.Astro, tags.TypeScript, tags.Tailwind],
    color: 'border-green-500',
    id: '3',
  },
  {
    title: 'Dropi.co - Clon IU/UX',
    description:
      'Clon funcional de UI/UX de Dropi.co con mejoras enfocadas en rendimiento SPA',
    link: 'https://dropi-replic.vercel.app/',
    github: 'https://github.com/Deyverson1/dropi-replic',
    image: '/projects/DropiTry.png',
    tags: [tags.React, tags.JavaScript, tags.Css],
    color: 'border-orange-500',
    id: '1',
  },
];
