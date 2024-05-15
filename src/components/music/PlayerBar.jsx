/**
 * The `BarMusicPlayer` component in JavaScript React manages a music player interface with features
 * like play/pause, track navigation, volume control, and progress tracking.
 */
import { useEffect, useRef, useState } from "react";
import { data } from '../../info/DataBaseMusic'
import Volume from "../icons/Volume";
import VolumeOff from "../icons/VolumeOff";
import PlayList from "./Playlist";
import MobileBar from "./MobileBar";
import ScrollTop from "../ScrollTop";
import ProgressBar from "./ProgressBar";
import ControlPlayer from "./ControlPlayer";

export default function BarMusicPlayer() {
  const [active, setActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVolumeOff, setVolumeOff] = useState(false)
  const [varMobile, setVarMobile] = useState(false)
  const [isRandom, setRandom] = useState(false)
  const [volumePosition, setVolumePosition] = useState(50)
  const [currentTime, setCurrentTime] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef();
  const volumeRef = useRef()

  //VARIABLES
  const volumeProgress = volumePosition;

  // Variables for progress bar component 
  const PropsProgressBar = {
    currentTime: currentTime,
    setCurrentTime: setCurrentTime,
    duration: duration,
    minutes: minutes,
    seconds: seconds,
    audioRef: audioRef
  }

  const PropsControl = {
    playNextTrack: playNextTrack,
    playPreviousTrack: playPreviousTrack,
    isPlaying: isPlaying,
    setRandom: setRandom,
    isRandom: isRandom,
    setIsPlaying: setIsPlaying, 
    audioRef: audioRef
  }
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

  // URL 
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(window.location.pathname.includes("/music"));
    }, 1000);

    return () => clearInterval(interval)
  }, [])

  // FUNCTIONS
  function handleMusicMobile() {
    setVarMobile(!varMobile)
    ScrollTop()
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


  function handleVolume(e) {
    const clickedPositionX = e.pageX - volumeRef.current.offsetLeft;
    const progressVolumeRef = volumeRef.current.offsetWidth;
    const setVolume = (clickedPositionX / progressVolumeRef);
    const newPositionInSeconds = (clickedPositionX / progressVolumeRef) * 100;
    setVolumePosition(newPositionInSeconds)
    audioRef.current.volume = setVolume
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
            <div onClick={handleMusicMobile} className="flex flex-col pl-2 justify-center">
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
          <ControlPlayer {...PropsControl} display='hidden'/>
          <ProgressBar {...PropsProgressBar} display='hidden' />
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
      {varMobile == true && (
        <MobileBar handleMusicMobile={handleMusicMobile} title={data[currentTrackIndex].title} subTitle={data[currentTrackIndex].subTitle} image={data[currentTrackIndex].image} props={PropsProgressBar} propsControl={PropsControl}/>
      )}
    </section>
  )
}