import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Exit } from "./icons/Exit";


interface Props {
  image: string;
  title: string;
}

function ProjectDetails({ image, title }: Props) {
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


  function handleDetails() {
    setDetailsOpen(!detailsOpen);
  }
  function handleExit(){
    setDetailsOpen(!detailsOpen);
    console.log('Click')
  }

  return (
    <>
      <div className="w-full md:w-1/2">
        <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            onClick={handleDetails}
            className="object-cover cursor-pointer object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            src={image}
            alt={"Extraido de" + title}
          />
        </div>
      </div>
      {
        detailsOpen && (
          <section className="fixed z-50 -ml-5 md:-ml-5 p-0 w-full h-screen top-0 bg-black bg-opacity-40 md:bg-opacity-90 text-white">
            <div className="absolute z-50 top-10 right-40 cursor-pointer hover:animate-spin" onClick={handleExit}>
              <Exit/>
            </div>
            <main>
              <div className='w-full h-full'>

                <div className="h-full w-full">
                  <Carousel
                    className='w-full'
                    arrows={true}
                    responsive={responsive}
                    draggable={true}
                    swipeable={true}
                    autoPlay={true}
                    autoPlaySpeed={300000}
                    rewind={true}
                  // centerMode={true}
                  >
                    <div className="h-screen flex justify-center gap-x-8 items-center">
                      <main className="w-4/12">
                        <h1 className="text-3xl font-semibold">Dropi.co - Replica con ReactJS</h1>
                        <p className="w-full">
                          Tiene como objetivo replicar la página web existente en https://dropi.co utilizando ReactJS principalmente, por medio del cual busco mejorar el rendimiento utilizando el enfoque SPA, ademas de presentar ciertos aportes propios con respecto al diseño de la pagina.
                        </p>
                      </main>
                      <div className="w-5/12">
                        <img className="bg-opacity-100" src="/projects/dropies.webp" alt="" />
                      </div>
                    </div>
                    <div className="h-full flex justify-center gap-x-8 items-center">
                      <main className="w-4/12">
                        <h1 className="text-3xl font-semibold">Dropi.co - Replica con ReactJS</h1>
                        <p className="w-full">
                          Tiene como objetivo replicar la página web existente en https://dropi.co utilizando ReactJS principalmente, por medio del cual busco mejorar el rendimiento utilizando el enfoque SPA, ademas de presentar ciertos aportes propios con respecto al diseño de la pagina.
                        </p>
                      </main>
                      <div className="w-5/12">
                        <img className="bg-opacity-100" src="/projects/dropies.webp" alt="" />
                      </div>
                    </div>

                  </Carousel>
                </div>
              </div>

            </main>
          </section>
        )
      }
    </>
  );
}

export default ProjectDetails;
