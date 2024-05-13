/* The code snippet is exporting an array of objects named `projects`. Each object
represents a project and contains properties such as `title`, `description`, `link`, `github`,
`image`, `tags`, `color`, and `id`. These objects describe different projects with details like
their titles, descriptions, links to the project and GitHub repository, images, tags indicating
technologies used, colors for styling, and unique identifiers. */
import { tags } from "../components/Tags.astro";
export const projects = [
  {
    title: "Dropi.co - Replica con ReactJS",
    description:
      "Tiene como objetivo replicar la página web existente en https://dropi.co utilizando ReactJS principalmente, por medio del cual busco mejorar el rendimiento utilizando el enfoque SPA, ademas de presentar ciertos aportes propios con respecto al diseño de la pagina.",
    link: "https://dropi-replic.vercel.app/",
    github: "https://github.com/Deyverson1/dropi-replic",
    image: "/projects/dropies.webp",
    tags: [tags.React, tags.JavaScript, tags.Css],
    color: "border-orange-500",
    id: "1",
  },
  {
    title: "Anime Search - Consumo de APIs",
    description:
      "Tiene como objetivo la implementación de búsqueda de anime a partir del consumo de varias APIS como https://jikan.moe/, https://animechan.xyz/, https://nekos.best/, presento una implementación de TypeScript para mejorar la calidad del código con respecto a los errores",
    github: "https://github.com/Deyverson1/anime-search",
    link: "https://anime-search-deyverson1.vercel.app/",
    image: "/projects/animesearch.webp",
    tags: [tags.TypeScript, tags.Tailwind, tags.React],
    color: "border-yellow-600",
    id: "2",
  },
  {
    title: "Bancolombia - Replica con Astro",
    description:
      "Actualmente en proceso de replica del sitio web de Bancolombia https://www.bancolombia.com/personas, esta desarrollado principalmente con Astro, ademas de una pequeña integración de TypeScript,  por la parte los estilos se realizan por medio de Tailwind",
    github: "https://github.com/Deyverson1/bancolombia-replic",
    link: "https://bancolombia-replic.vercel.app/",
    image: "/projects/bancolombia.webp",
    tags: [tags.Astro, tags.Tailwind, tags.TypeScript],
    color: "border-green-500",
    id: "3",
  },
  {
    title: "Search Movies and books!",
    description:
      "Fue creado con el propósito de aprender acerca de Svelte, actualmente presenta dos funciones principales las cuales son la búsqueda de libros y películas",
    link: "https://search-movies-and-books.vercel.app/",
    github: "https://github.com/Deyverson1/search-movies-and-books",
    image: "/projects/searchmovie.webp",
    tags: [tags.Svelte, tags.JavaScript, tags.Css],
    color: "border-sky-500",
    id: "4",
  },
];