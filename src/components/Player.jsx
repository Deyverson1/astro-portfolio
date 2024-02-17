import { useEffect, useRef, useState } from "react";

function AudioPlayer() {
  const data = [
    { title: 'Someone To Spend Time With', subTitle: 'Los retros', src: 'music/Someone To Spend Time With.mp3', image: "https://i.scdn.co/image/ab67616d0000b273a1f060b534d1d9c859acc73f" },
    { title: "Surround Sound (feat. 21 Savage & Baby Tate) ", subTitle: 'JID, 21 Savage, Baby Tate', src: 'music/JIDSurroundSound.mp3', image: 'https://i.scdn.co/image/ab67616d0000b2736de37e432e720323f4e31edc' },
    { title: "Heathens", subTitle: 'Twenty One Pilots', src: 'music/Heathens.mp3', image: "https://i.scdn.co/image/ab67616d0000b2732ca3ba8f334ca5a5f0312efb" },
    { title: "Another Love", subTitle: "Tom Odell", src: "music/AnotherLove.mp3", image: "https://i.scdn.co/image/ab67616d0000b2731917a0f3f4152622a040913f" },
    { title: "Trouble", subTitle: "Coldplay", src: "music/Trouble.mp3", image: "https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0" },
    { title: "Sex, Drugs, Etc.", subTitle: "Beach Weather", src: "music/Sex.mp3", image: "https://i.scdn.co/image/ab67616d0000b273d965622035c698fefc8c8a4a" },
    { title: "Teeth", subTitle: "5 Seconds of Summer", src: "music/Teeth.mp3", image: "https://i.scdn.co/image/ab67616d0000b273726005f0f81903e157d9dbc7" },
  ];
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
      return; // Evitar que la función se ejecute si ya está en ejecución
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
      if(checkBox.current.checked){
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
  const formattedDuration = `${totalDurationMinutes} : ${totalSecondDuration}`

  return (
    <section className="pt-20 w-full ">
      <label className="inline-flex w-full pr-4 items-center justify-end mb-5 cursor-pointer">
        <input ref={checkBox} onClick={handleCheck} type="checkbox" value="" className="sr-only peer" />
        <div className="relative w-11 h-6 bg-gray-20 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
      </label>
      <section className="pb-20 flex flex-col">
        {data.map((dato, index) => (
          <article key={index} className="px-1 lg:px-40 cursor-pointer" onClick={(event) => handleClick(event, index)}>
            <section className="hover:bg-gray-800 rounded-md">
              <main className="flex gap-x-2 p-2 items-center ">
                <div className="w-1/12 h-1/12">
                  <img src={dato.image} alt={`Image from ${dato.title}`} className="w-full rounded-md" />
                </div>
                <div>
                  <h1 className="w-full hover:underline">{dato.title}</h1>
                  <h2 className="text-sm text-gray-400">{dato.subTitle}</h2>
                </div>
                <div>
                </div>
              </main>
            </section>
          </article>
        ))}
      </section>
      <section className="bottom-40 px-2 w-full pb-0 box-sizing">
        <main className="w-full">
          <div className="w-full">
            <h1 className="font-lg ">{data[currentTrackIndex].title}</h1>
            <h2 className="pb-4 text-sm text-gray-400">{data[currentTrackIndex].subTitle}</h2>
            <audio ref={audioRef}>
              <source src={data[currentTrackIndex].src} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          </div>
        </main>

        <div
          className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
          ref={progressBarRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleProgressBarClick} 
        >
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="w-full flex justify-between pt-2">
          <p>{formattedTime}</p>
          <p>{formattedDuration}</p>
        </div>
        <section className="w-full pt-4 gap-8 flex items-center justify-center">
          <button onClick={playPreviousTrack}><svg xmlns="http://www.w3.org/2000/svg" className="size-12 icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></button>
          <button onClick={togglePlayPause}>{isPlaying ? <svg xmlns=" http://www.w3.org/2000/svg" className="size-12 icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" className="size-12 icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" strokeWidth="0" fill="currentColor" /></svg>}</button>
          <button onClick={playNextTrack}><svg xmlns="http://www.w3.org/2000/svg" className="size-12 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></button>
        </section>
      </section>
    </section>
  );
}

export default AudioPlayer;
