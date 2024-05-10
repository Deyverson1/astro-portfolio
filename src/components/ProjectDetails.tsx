import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Exit } from "./icons/Exit";
import { Checkbox } from "./icons/CheckIcon";


interface Props {
  image: string;
  title: string;
  id: string;
  active: boolean;
}

function ProjectDetails({ image, title, id, active }: Props) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const data: { [key: string]: { title: string; description: string; points: string[]; image: string; imageInfoMobile: string, imageInfoDesktop: string, video: string; } } = {
    '1': { title: 'Dropi.co - Replica con ReactJS', description: ' Tiene como objetivo replicar la página web existente en https://dropi.co utilizando ReactJS principalmente, por medio del cual busco mejorar el rendimiento utilizando el enfoque SPA, ademas de presentar ciertos aportes propios con respecto al diseño de la pagina.', points: ['Mejora de la adaptabilidad en diversos dispositivos.', 'Integración de SPA.', 'Actualizaciones en el diseño de la interfaz.', 'Optimización de la navegación.', 'Implementación de la metodología BEM.'], image: '/projects/dropies.webp', imageInfoMobile: 'DropiMobile.png', imageInfoDesktop: 'DropiDesktop.png', video: '/video/DropiWeb.mp4' },
    '2': { title: 'Anime Search - Consumo de APIs', description: 'Tiene como objetivo la implementación de búsqueda de anime a partir del consumo de varias APIS como https://jikan.moe/, https://animechan.xyz/, https://nekos.best/, presento una implementación de TypeScript para mejorar la calidad del código con respecto a los errores', points: ['Diseño responsivo.', 'Consumo de APIs.', 'Manejo de datos.', 'Respuesta rápida'], imageInfoMobile: 'SearchMobile.png', imageInfoDesktop: 'SearchDesktop.png', image: '/projects/animesearch.webp', video: '/video/AnimeVideo.mp4' },
    '3': { title: 'Bancolombia - Replica con Astro', description: 'Actualmente en proceso de replica del sitio web de Bancolombia https://www.bancolombia.com/personas, esta desarrollado principalmente con Astro, ademas de una pequeña integración de TypeScript, por la parte los estilos se realizan por medio de Tailwind', points: ['Diseño adaptable.', 'Integración SPA (Mejora de rendimiento y navegación).', 'Manejo de eventos optimizado.', 'Componentización de código'], imageInfoMobile: 'BancolombiaMobile.png', imageInfoDesktop: 'BancolombiaDesktop.png', image: '/projects/bancolombia.webp', video: '/video/BancolombiaVideo.mp4' },
    '4': { title: 'Search Movies and books!', description: 'Fue creado con el propósito de aprender acerca de Svelte, actualmente presenta dos funciones principales las cuales son la búsqueda de libros y películas', points: [], imageInfoMobile: 'MovieMobile.png', imageInfoDesktop: 'MovieDesktop.png', image: '/projects/searchmovie.webp', video: '/video/BooksVideo.mp4' },
  }


  function handleDetails(id: string) {
    setDetailsOpen(!detailsOpen);
  }
  function handleExit() {
    setDetailsOpen(!detailsOpen);

  }

  return (
    <>
      <div className="w-full flex items-center justify-center md:w-1/2">
        <div className="relative flex flex-col items-center justify-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            onClick={() => handleDetails(id)}
            className="object-cover cursor-pointer object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            src={image}
            alt={"Extraido de" + title}
            id={id}
          />
        </div>
      </div>
      {detailsOpen && active && (
        <section className="fixed z-50 -ml-5 md:-ml-5 p-0 w-full h-screen top-0 bg-black bg-opacity-95 md:bg-opacity-90 text-white">
          <div className="absolute z-50 top-10 right-5 md:right-40 cursor-pointer hover:animate-pulse" onClick={handleExit}>
            <Exit />
          </div>
          <main>
            <div className='w-full h-full'>
              {Object.keys(data).map(dataId => {
                const numericId = parseInt(dataId);
                if (!isNaN(numericId) && numericId === parseInt(id)) {
                  return (
                    <div key={dataId} className="h-full w-full">
                      <Carousel
                        className='w-full'
                        arrows={true}
                        responsive={responsive}
                        draggable={true}
                        swipeable={true}
                        // autoPlay={true}
                        // autoPlaySpeed={4000}
                        shouldResetAutoplay
                        minimumTouchDrag={100}
                        rewind={true}
                      >
                        <div className="h-screen flex flex-col md:flex-row justify-center gap-x-8 items-center">
                          <main className="w-9/12 md:w-4/12">
                            <h1 className="text-3xl font-semibold">{data[dataId].title}</h1>
                            <p className="w-full">
                              {data[dataId].description}
                            </p>
                          </main>
                          <div className="w-9/12 pt-10 md:w-5/12">
                            <img className="bg-opacity-100 rounded-3xl" src={data[dataId].image} alt="" />
                          </div>
                        </div>
                        <div className="h-full flex justify-center gap-x-8 items-center">
                          <main className="w-10/12 h-creen gap-x-8 items-center flex flex-col md:flex-row justify-center">
                            <img src={data[dataId].imageInfoMobile} className="flex justify-center items-center w-4/12 pb-8 md:pb-0 md:w-3/12 " alt="" />
                            <div className="w-10/12 md:w-5/12 h-1/3 flex flex-col items-center justify-center">
                              <img src={data[dataId].imageInfoDesktop} className="w-8/12 hidden md:block h-full" alt="" />
                              <ul className="flex flex-col gap-y-2">
                                {data[dataId].points.map((point, index) => (
                                  <li key={index} className="flex gap-x-4 w-full md:max-w-10/12">
                                   <div>
                                   <Checkbox />
                                    </div> {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </main>
                        </div>
                        <div className="flex justify-center items-center w-full h-full">
                          <video src={data[dataId].video} className="aspect-video flex items-center justify-center w-12/12 md:w-6/12 md:h-2/3" autoPlay loop muted></video>
                        </div>
                      </Carousel>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </main>
        </section>
      )}



    </>
  );
}

export default ProjectDetails;
