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
      <div className="flex items-center justify-center w-full">
        <div className="relative flex flex-col items-center justify-center w-3/4 col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
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
        <section className="fixed top-0 z-50 w-full h-screen p-0 -ml-5 text-white bg-black bg-opacity-95 md:-ml-5 md:bg-opacity-90">
          <div
            className="absolute z-50 cursor-pointer right-5 top-10 hover:animate-pulse md:right-40"
            onClick={handleExit}
          >
            <Exit />
          </div>
          <main>
            <div className="w-full h-full">
              {Object.keys(dataDetails).map((dataId) => {
                const numericId = parseInt(dataId);
                if (!isNaN(numericId) && numericId === parseInt(id)) {
                  return (
                    <div key={dataId} className="w-full h-full">
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
                        <div className="flex flex-col items-center justify-center h-screen gap-x-8 md:flex-row">
                          <main className="w-9/12 md:w-4/12">
                            <h1 className="text-3xl font-semibold">
                              {dataDetails[dataId].title}
                            </h1>
                            <p className="w-full">
                              {dataDetails[dataId].description}
                            </p>
                          </main>
                          <div className="w-9/12 pt-10 md:w-5/12">
                            <img
                              className="bg-opacity-100 rounded-3xl"
                              src={dataDetails[dataId].image}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-center h-full gap-x-8">
                          <main className="flex flex-col items-center justify-center w-10/12 h-creen gap-x-8 md:flex-row">
                            <img
                              src={dataDetails[dataId].imageInfoMobile}
                              className="flex items-center justify-center w-4/12 pb-8 md:w-3/12 md:pb-0"
                              alt=""
                            />
                            <div className="flex flex-col items-center justify-center w-10/12 h-1/3 md:w-5/12">
                              <img
                                src={dataDetails[dataId].imageInfoDesktop}
                                className="hidden w-8/12 h-full md:block"
                                alt=""
                              />
                              <ul className="flex flex-col gap-y-2">
                                {dataDetails[dataId].points.map(
                                  (point, index) => (
                                    <li
                                      key={index}
                                      className="flex w-full md:max-w-10/12 gap-x-4"
                                    >
                                      <div>
                                        <Checkbox />
                                      </div>{' '}
                                      {point}
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
