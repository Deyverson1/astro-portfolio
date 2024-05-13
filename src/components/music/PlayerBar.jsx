/**
 * The `BarMusicPlayer` component in JavaScript React manages a music player interface with features
 * like play/pause, track navigation, volume control, and progress tracking.
 */
import { useEffect, useRef, useState } from "react";
import { data } from '../../database/DataBaseMusic'
import Volume from "../icons/Volume";
import VolumeOff from "../icons/VolumeOff";
import ArrowRandom from "../icons/ArrowRandom";
import PlayList from "./Playlist";

export default function BarMusicPlayer() {
  const [active, setActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isVolumeOff, setVolumeOff] = useState(false)
  const [isRandom, setRandom] = useState(false)
  const [volumePosition, setVolumePosition] = useState(50)
  const [currentTime, setCurrentTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef();
  const volumeRef = useRef()

  //VARIABLES
  const totalDurationMinutes = Math.floor(duration / 60)
  const totalSecondDuration = Math.floor(duration % 60)
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const volumeProgress = volumePosition;
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  const formattedDuration = `${totalDurationMinutes}:${totalSecondDuration}`

  // URL 
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(window.location.pathname.includes("/music"));
    }, 1000);

    return () => clearInterval(interval)
  }, [])

  // FUNCTIONS
  function playNextTrack() {
    if (isRandom) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setCurrentTrackIndex(randomIndex);
      setTimeout(() => {
        setIsPlaying(true);
        audioRef.current.play();
      }, 300);
    } else {
      const nextIndex = (currentTrackIndex + 1) % data.length;
      setCurrentTrackIndex(nextIndex);
      setTimeout(() => {
        setIsPlaying(true);
        audioRef.current.play();
      }, 300);
    }
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

  function togglePlayPause() {
    // console.log('click')
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
  function handleVolume(e) {
    const clickedPositionX = e.pageX - volumeRef.current.offsetLeft;
    const progressVolumeRef = volumeRef.current.offsetWidth;
    const setVolume = (clickedPositionX / progressVolumeRef);
    const newPositionInSeconds = (clickedPositionX / progressVolumeRef) * 100;
    setVolumePosition(newPositionInSeconds)
    audioRef.current.volume = setVolume
  }
  function handleRandom() {
    if (!isRandom) {
      setRandom(true)
    } else {
      setRandom(false)
    }
    console.log(isRandom)
  }

  function handleMouseUp() {
    setIsDragging(false);
  }
  function handleVolumeOff() {
    if (!isVolumeOff) {
      setVolumeOff(true)
      audioRef.current.volume = 0;
      setVolumePosition(0)
    } else {
      setVolumeOff(false)
      audioRef.current.volume = 1;
      setVolumePosition(100)
    }
  }

  //USE EFFECTS
  useEffect(() => {
    const audioElement = audioRef.current;

    const handleEnded = () => {
      if (true) {
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


  return (
    <section>
      {active === true && (
        <PlayList data={data} handleClick={handleClick} />
      )}
      <section className="fixed bottom-0 pb-4 justify-between px-2 py-4 w-full box-sizing flex bg-black  shadow-2xl shadow-white">
        <main className="w-full">
          <div className="w-full flex gap-2 pl-2 items-center">
            <img src={data[currentTrackIndex].image} alt="" className="h-14 aspect-square object-cover rounded-md" />
            <div className="flex flex-col pl-2 justify-center">
              <h1 className="text-xs md:text-base text-white leading-5 tracking-tight">{data[currentTrackIndex].title}</h1>
              <h2 className="text-xs text-gray-400">{data[currentTrackIndex].subTitle}</h2>
            </div>
            <audio ref={audioRef}>
              <source src={data[currentTrackIndex].src} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        </main>
        <section className="flex w-full flex-col justify-center items-center">
          <section className="w-full gap-8 pb-1 flex items-center justify-center">
            <button onClick={handleRandom}><ArrowRandom stroke={isRandom ? 'green' : 'white'} size={'size-5'} />
            </button>
            <button onClick={playPreviousTrack} className="hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" className=" size-7 icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></button>
            <button onClick={togglePlayPause}>{isPlaying ? <svg xmlns=" http://www.w3.org/2000/svg" className="dark:fill-white size-7 icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" fill="#fff" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className=" dark:fill-white size-7 icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="#fff" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="white" /></svg>}</button>
            <button onClick={playNextTrack} className="hidden lg:block"><svg xmlns="http://www.w3.org/2000/svg" className="size-7 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></button>
          </section>

          <section className="hidden lg:flex w-full justify-center items-center gap-2">

            <p className="text-sm text-white">{formattedTime}</p>
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
            <p className="text-sm text-white">{formattedDuration}</p>
          </section>
        </section>
        <section className="hidden px-2 w-full pb-0 lg:flex justify-center items-center gap-x-2">
          <button onClick={handleVolumeOff}>{isVolumeOff ? <VolumeOff stroke={'white'} /> : <Volume stroke={'white'} />}</button>
          <div
            className="w-4/12 gap-8 bg-gray-200 flex justify-between items-center rounded-full h-1 dark:bg-gray-700"
            ref={volumeRef}
            onClick={handleVolume}
          >
            <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${volumeProgress}%` }}></div>
          </div>
        </section>
      </section>
    </section>
  )
}