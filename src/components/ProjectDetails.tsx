import { useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Exit } from "./icons/Exit";
import { Checkbox } from "./icons/CheckIcon";
import { dataDetails } from "../info/DataProjectDetails";
import { responsive } from "../info/ResponsiveCarousel";

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
      <div className="w-full flex items-center justify-center">
        <div className="relative w-3/4 flex flex-col items-center justify-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
          <img
            onClick={() => handleDetails(id)}
            className="object-cover cursor-pointer opacity-95 object-top w-full aspect-[16/9] transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
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
              {Object.keys(dataDetails).map(dataId => {
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
                            <h1 className="text-3xl font-semibold">{dataDetails[dataId].title}</h1>
                            <p className="w-full">
                              {dataDetails[dataId].description}
                            </p>
                          </main>
                          <div className="w-9/12 pt-10 md:w-5/12">
                            <img className="bg-opacity-100 rounded-3xl" src={dataDetails[dataId].image} alt="" />
                          </div>
                        </div>
                        <div className="h-full flex justify-center gap-x-8 items-center">
                          <main className="w-10/12 h-creen gap-x-8 items-center flex flex-col md:flex-row justify-center">
                            <img src={dataDetails[dataId].imageInfoMobile} className="flex justify-center items-center w-4/12 pb-8 md:pb-0 md:w-3/12 " alt="" />
                            <div className="w-10/12 md:w-5/12 h-1/3 flex flex-col items-center justify-center">
                              <img src={dataDetails[dataId].imageInfoDesktop} className="w-8/12 hidden md:block h-full" alt="" />
                              <ul className="flex flex-col gap-y-2">
                                {dataDetails[dataId].points.map((point, index) => (
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
                        {/* <div className="flex justify-center items-center w-full h-full">
                          <video src={dataDetails[dataId].video} className="aspect-video flex items-center justify-center w-12/12 md:w-6/12 md:h-2/3" autoPlay loop muted></video>
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
