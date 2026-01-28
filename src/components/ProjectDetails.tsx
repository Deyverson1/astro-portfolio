import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Exit } from './icons/Exit';
import { Checkbox } from './icons/CheckIcon';
import { dataDetails } from '../info/DataProjectDetails';
import { responsive } from '../info/ResponsiveCarousel';

interface Props {
  image: string;
  title: string;
  id: string;
  active: boolean;
}

function ProjectDetails({ image, title, id, active }: Props) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  function handleDetails(id: string) {
    setDetailsOpen(!detailsOpen);
  }
  function handleExit() {
    setDetailsOpen(!detailsOpen);
  }
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="relative col-span-6 row-span-5 flex w-3/4 transform flex-col items-center justify-center gap-8 overflow-clip rounded-xl shadow-xl transition duration-500 ease-in-out sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            onClick={() => handleDetails(id)}
            className="aspect-[16/9] w-full cursor-pointer object-cover object-top opacity-95 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
            src={image}
            alt={'Extraido de' + title}
            id={id}
          />
        </div>
      </div>
      {detailsOpen && active && (
        <section className="fixed top-0 z-50 -ml-5 h-screen w-full bg-black bg-opacity-95 p-0 text-white md:-ml-5 md:bg-opacity-90">
          <div
            className="absolute right-5 top-10 z-50 cursor-pointer hover:animate-pulse md:right-40"
            onClick={handleExit}
          >
            <Exit />
          </div>
          <main>
            <div className="h-full w-full">
              {Object.keys(dataDetails).map((dataId) => {
                const numericId = parseInt(dataId);
                if (!isNaN(numericId) && numericId === parseInt(id)) {
                  return (
                    <div key={dataId} className="h-full w-full">
                      <Carousel
                        className="w-full"
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
                        <div className="flex h-screen flex-col items-center justify-center gap-x-8 md:flex-row">
                          <main className="w-9/12 md:w-4/12">
                            <h1 className="pb-2 text-3xl font-semibold lg:pb-4 2xl:text-4xl">
                              {dataDetails[dataId].title}
                            </h1>
                            <p className="w-full 2xl:text-lg dark:text-gray-300">
                              {dataDetails[dataId].description}
                            </p>
                          </main>
                          <div className="w-9/12 pt-10 md:w-5/12">
                            <img
                              className="rounded-3xl bg-opacity-100"
                              src={dataDetails[dataId].image}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="flex h-full items-center justify-center gap-x-8">
                          <main className="h-creen flex w-full flex-col items-center justify-center gap-x-8 md:flex-row">
                            <div className="flex h-1/3 w-8/12 flex-col items-center justify-center md:w-5/12 xl:w-full">
                              <img
                                src={dataDetails[dataId].imageInfoDesktop}
                                className="aspect-video h-full w-full drop-shadow-2xl xl:w-[90vh]"
                                alt=""
                              />
                              <ul className="flex flex-col gap-y-2 pt-2">
                                {dataDetails[dataId].points.map(
                                  (point, index) => (
                                    <li
                                      key={index}
                                      className="md:max-w-10/12 flex w-full justify-center gap-x-4"
                                    >
                                      <p className="lg:text-xl">✔ {point}</p>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </main>
                        </div>
                        {/* <div className="flex items-center justify-center w-full h-full">
                          <video src={dataDetails[dataId].video} className="flex items-center justify-center aspect-video w-12/12 md:w-6/12 md:h-2/3" autoPlay loop muted></video>
                        </div> */}
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
