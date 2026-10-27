/* The code is defining an array of project objects in TypeScript. Each project object
represents a specific project with properties such as title, description, link, github repository,
image, tags, color, and id. The `import { tags } from "../components/Tags.astro";` statement is
importing a module that contains tag constants used to categorize the projects. */
import { tags } from '../components/Tags.astro';
export const projects = [
  {
    title: 'MaintaX CMMS - Gestión de mantenimiento industrial',
    description:
      'MaintaX CMMS es una plataforma de gestión de mantenimiento industrial que centraliza órdenes de trabajo, inventario de repuestos, requisiciones, compras y control de maquinaria. Busca facilitar la planificación, el seguimiento y el control de costos. En desarrollo continuo.',
    // link: '',
    // github: '',
    image: 'maintax-dashboard.png',
    tags: [tags.React, tags.JavaScript, tags.Tailwind],
    color: '',
    id: '',
  },
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
    image: 'CloneRepos.png',
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
    image: 'NetflixImage.png',
    tags: [tags.TypeScript, tags.React, tags.Tailwind],
    color: 'border-red-500',
    id: '5',
  },

  {
    title: 'Implementación de sensores',
    description:
      'Este proyecto contiene código de Arduino y Processing para la medida con los sensores SHT-30, HC-SR04, Termistor.',
    github:
      'https://github.com/Deyverson1/SHT-30-Humidity-HC-SR04-Distance-Termistor-Temperatura',
    link: '',
    documentation: '/mechatronics/documentation',
    image: 'Sensores.png',
    color: 'border-pink-600',
    tags: [tags.C],
  },
];
