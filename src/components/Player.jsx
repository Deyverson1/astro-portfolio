import { useEffect, useRef, useState } from "react";
import { data } from '../database/DataBaseMusic'
function AudioPlayer() {

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();
  const checkBox = useRef()
  let isHandleCheckRunning = false;

  const handleCheck = () => {
    if (isHandleCheckRunning) {
      return;
    }

    isHandleCheckRunning = true;

    const timing = Math.floor(duration);
    if (timing == currentTime && checkBox.current.checked) {
      playNextTrack();
    } else {
      console.log('no activo');
    }

    isHandleCheckRunning = false;
  };

  function playNextTrack() {
    const nextIndex = (currentTrackIndex + 1) % data.length;
    setCurrentTrackIndex(nextIndex);
    setTimeout(() => {
      setIsPlaying(true);
      audioRef.current.play();
    }, 300);
  }

  function playPreviousTrack() {
    const previousIndex = (currentTrackIndex - 1 + data.length) % data.length;
    setCurrentTrackIndex(previousIndex);
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(true);
      audioRef.current.play();
    }, 300);
  }
  useEffect(() => {
    const audioElement = audioRef.current;

    const handleEnded = () => {
      if (checkBox.current.checked) {
        playNextTrack();
      }
    };

    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.src = data[currentTrackIndex].src;
    audioRef.current.load();
  }, [currentTrackIndex]);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.addEventListener('loadedmetadata', () => {
      setDuration(audioElement.duration);
    });
    const handleTimeUpdate = () => {
      const newCurrentTime = Math.floor(audioElement.currentTime);
      setCurrentTime(newCurrentTime);
      setMinutes(Math.floor(newCurrentTime / 60));
      setSeconds(newCurrentTime % 60);
    };

    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  function togglePlayPause() {
    setIsPlaying(prevState => !prevState);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }

  function handleClick(event, index) {
    event.stopPropagation();
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(true);
      audioRef.current.play();
    }, 300);
  }


  function handleMouseDown(event) {
    setIsDragging(true);
    handleMouseMove(event);
  }

  function handleMouseMove(event) {
    if (isDragging) {
      const clickedPositionX = event.pageX - progressBarRef.current.offsetLeft;
      const progressBarWidth = progressBarRef.current.offsetWidth;
      const newPositionInSeconds = (clickedPositionX / progressBarWidth) * duration;
      audioRef.current.currentTime = newPositionInSeconds;
      setCurrentTime(newPositionInSeconds);
    }
  }
  function handleProgressBarClick(event) {
    const clickedPositionX = event.pageX - progressBarRef.current.offsetLeft;
    const progressBarWidth = progressBarRef.current.offsetWidth;
    const newPositionInSeconds = (clickedPositionX / progressBarWidth) * duration;
    audioRef.current.currentTime = newPositionInSeconds;
    setCurrentTime(newPositionInSeconds);
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  const totalDurationMinutes = Math.floor(duration / 60)
  const totalSecondDuration = Math.floor(duration % 60)

  const progress = duration ? (currentTime / duration) * 100 : 0;

  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  const formattedDuration = `${totalDurationMinutes}:${totalSecondDuration}`

  return (
    <section className="pt-20 w-full ">
      <section className="flex gap-4 px-44  mx-auto container pb-4 lg:max-w-4xl md:max-w-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playlist" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 17v-13h4" /><path d="M13 5h-10" /><path d="M3 9l10 0" /><path d="M9 13h-6" /></svg>
        <h1 className="text-lg">Playlist</h1>
      </section>

      <section className="pb-28 flex flex-col  mx-auto container lg:max-w-4xl md:max-w-2xl">
        {data.map((dato, index) => (
          <article key={index} className="px-1 lg:px-40 cursor-pointer" onClick={(event) => handleClick(event, index)}>
            <section className="hover:bg-gray-800 hover:text-white  rounded-md">
              <main className="flex gap-x-2 p-2 items-center ">
                <div className="w-1/12 h-1/12">
                  <img src={dato.image} alt={`Image from ${dato.title}`} className="w-full rounded-md" />
                </div>
                <div>
                  <h1 className="w-full  hover:underline">{dato.title}</h1>
                  <h2 className="text-sm  dark:text-gray-400">{dato.subTitle}</h2>
                </div>
                <div>
                </div>
              </main>
            </section>
          </article>
        ))}
      </section>
      <section className="fixed bottom-0 pb-4 justify-between px-2 py-4 w-full box-sizing flex bg-black  shadow-2xl shadow-white">
        <main className="w-full">
          <div className="w-full flex gap-2 pl-2 items-center">
            <img src={data[currentTrackIndex].image} alt="" className="h-14 rounded-md" />
            <div className="flex flex-col pl-2 justify-center">
              <h1 className="font-xs text-white leading-5 tracking-tight">{data[currentTrackIndex].title}</h1>
              <h2 className="text-sm text-gray-400">{data[currentTrackIndex].subTitle}</h2>
            </div>
            <audio ref={audioRef}>
              <source src={data[currentTrackIndex].src} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        </main>
        <section className="w-full flex flex-col justify-center items-center">
          <section className="w-full gap-8 pb-1 flex items-center justify-center">
            <label className="hidden cursor-pointer items-center justify-center">
              <input ref={checkBox} checked onClick={handleCheck} type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-11 h-6 bg-gray-20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
            <button onClick={playPreviousTrack}><svg xmlns="http://www.w3.org/2000/svg" className=" size-7 icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></button>
            <button onClick={togglePlayPause}>{isPlaying ? <svg xmlns=" http://www.w3.org/2000/svg" className="dark:fill-white size-7 icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="#fff" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className=" dark:fill-white size-7 icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="#fff" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="white" /></svg>}</button>
            <button onClick={playNextTrack}><svg xmlns="http://www.w3.org/2000/svg" className="size-7 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></button>
          </section>

          <section className="flex w-full justify-center items-center gap-2">

            <p className="text-sm">{formattedTime}</p>
            <div
              className="w-full gap-8 bg-gray-200 flex justify-between items-center rounded-full h-1 dark:bg-gray-700"
              ref={progressBarRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onClick={handleProgressBarClick}
            >
              <div className="bg-blue-600 h-1 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm">{formattedDuration}</p>
          </section>
        </section>
        <section className=" px-2 w-full pb-0 flex">
          <main className="w-full">
            <div className="w-full flex gap-2 items-center justify-end">
              <img src={data[currentTrackIndex].image} alt="" className="h-10" />
              <div className="flex flex-col justify-center">
                <h1 className="font-lg ">{data[currentTrackIndex].title}</h1>
                <h2 className="text-sm text-gray-400">{data[currentTrackIndex].subTitle}</h2>
              </div>
            </div>
          </main>
        </section>
      </section>
    </section>
  );
}

export default AudioPlayer;