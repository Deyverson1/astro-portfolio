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
  '3': {
    title: 'MaintaX CMMS - Gestión de mantenimiento industrial',
    description:
      'MaintaX CMMS es una plataforma de gestión de mantenimiento industrial que centraliza órdenes de trabajo, inventario de repuestos, requisiciones, compras y control de maquinaria. Busca facilitar la planificación, el seguimiento y el control de costos. En desarrollo continuo.',
    // github: 'https://github.com/Deyverson1/bancolombia-replic',
    // link: 'https://practica-iu-ix-bancolombia.netlify.app/',
    points: [
      'Panel de control con indicadores clave.',
      'alendario de trabajo con alertas de tareas vencidas.',
      'Gestión de órdenes, inventario y requisiciones.',
      'Arquitectura SPA con componentes reutilizables. ',
    ],
    imageInfoMobile: 'BancolombiaMobile.png',
    imageInfoDesktop: 'mockup-maintax-requisiciones.png',
    image: 'work-orders-maintax.png',
    video: '/video/BancolombiaVideo.mp4',
  },
};
