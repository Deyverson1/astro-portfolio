/* The code is defining an array of project objects in TypeScript. Each project object
represents a specific project with properties such as title, description, link, github repository,
image, tags, color, and id. The `import { tags } from "../components/Tags.astro";` statement is
importing a module that contains tag constants used to categorize the projects. */
import { tags } from '../components/Tags.astro';
export const projects = [
  {
    title: 'Bancolombia - Clon IU/UX',
    description:
      'Clon funcional de UI/UX del sitio web de Bancolombia, desarrollado con Astro y enfocado en estructura, rendimiento y responsividad',
    github: 'https://github.com/Deyverson1/bancolombia-replic',
    link: 'https://practica-iu-ix-bancolombia.netlify.app/',
    image: 'BancolombiaTry.png',
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
  {
    title: 'Script de Python - Clonar repositorios',
    description:
      'Consiste en un script de Python que automatiza el proceso de clonación de todos los repositorios públicos de un usuario de GitHub en un directorio específico en el sistema local.',
    link: '',
    github:
      'https://github.com/Deyverson1/clone-respositories/blob/master/clone-repos.py',
    image: '/projects/script-repos.png',
    tags: [tags.Python],
    color: 'border-blue-600',
    id: '',
  },
  {
    title: 'Replica de Netflix',
    description:
      'Este proyecto tiene objetivo la replica/adaptación tanto de la Landing page de la pagina web https://www.netflix.com/co/, como de su browser principal el cual se encarga de la búsqueda de contenido disponible en la plataforma de Netflix ',
    link: 'https://netflix-replic.vercel.app/',
    github: 'https://github.com/Deyverson1/netflix-replic',
    image: '/projects/netflix-replic.png',
    tags: [tags.TypeScript, tags.React, tags.Tailwind],
    color: 'border-red-500',
    id: '5',
  },
  {
    title: 'Anime Search - Consumo de APIs',
    description:
      'Tiene como objetivo la implementación de búsqueda de anime a partir del consumo de varias APIS como https://jikan.moe/, https://animechan.xyz/, https://nekos.best/, presento una implementación de TypeScript para mejorar la calidad del código con respecto a los errores',
    github: 'https://github.com/Deyverson1/anime-search',
    link: 'https://anime-search-deyverson1.vercel.app/',
    image: '/projects/animesearch.webp',
    tags: [tags.TypeScript, tags.Tailwind, tags.React],
    color: 'border-yellow-600',
    id: '2',
  },

  {
    title: 'Search Movies and books!',
    description:
      'Fue creado con el propósito de aprender acerca de Svelte, actualmente presenta dos funciones principales las cuales son la búsqueda de libros y películas',
    link: 'https://search-movies-and-books.vercel.app/',
    github: 'https://github.com/Deyverson1/search-movies-and-books',
    image: '/projects/searchmovie.webp',
    tags: [tags.Svelte, tags.JavaScript, tags.Css],
    color: 'border-sky-500',
    id: '4',
  },
  {
    title: 'Proyecto de CRUD en PHP',
    description:
      'Proyecto basado en CRUD, desarrollado como proyecto de aprendizaje, esta creado principalmente en el lenguaje de Php con la ayuda de base de datos de MySQL. Se basa en el control de empleados para una organización.',
    link: '',
    github: 'https://github.com/Deyverson1/mechatronic-digital-logic',
    image: '/projects/crud-picture.png',
    tags: [tags.Php, tags.MySql],
    color: 'border-violet-500',
    id: '',
  },

  {
    title: 'Implementación de sensores',
    description:
      'Este proyecto contiene código de Arduino y Processing para la medida con los sensores SHT-30, HC-SR04, Termistor.',
    github:
      'https://github.com/Deyverson1/SHT-30-Humidity-HC-SR04-Distance-Termistor-Temperatura',
    link: '',
    documentation: '/mechatronics/documentation',
    image: '/projects/sensores.webp',
    color: 'border-pink-600',
    tags: [tags.C],
  },
];
