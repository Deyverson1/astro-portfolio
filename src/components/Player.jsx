import { useEffect, useRef, useState } from "react";

function AudioPlayer() {
  const data = [
    { title: 'Someone To Spend Time With', subTitle: 'Los retros', src: 'music/Someone To Spend Time With.mp3', image: "https://i.scdn.co/image/ab67616d0000b273a1f060b534d1d9c859acc73f" },
    { title: "Surround Sound (feat. 21 Savage & Baby Tate) ", subTitle: 'JID, 21 Savage, Baby Tate', src: 'music/JIDSurroundSound.mp3', image: 'https://i.scdn.co/image/ab67616d0000b2736de37e432e720323f4e31edc' },
    { title: "Heathens", subTitle: 'Twenty One Pilots',src: 'music/Heathens.mp3', image: "https://i.scdn.co/image/ab67616d0000b2732ca3ba8f334ca5a5f0312efb" }
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
  function playNextTrack() {
    const nextIndex = (currentTrackIndex + 1) % data.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(audioRef.current.pause())
  }

  function playPreviousTrack() {
    const previousIndex = (currentTrackIndex - 1 + data.length) % data.length;
    setCurrentTrackIndex(previousIndex);
    setIsPlaying(audioRef.current.pause())

  }
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

  function handleClick(event) {
    const clickedPositionX = event.pageX - progressBarRef.current.offsetLeft;
    const progressBarWidth = progressBarRef.current.offsetWidth;
    const newPositionInSeconds = (clickedPositionX / progressBarWidth) * duration;
    audioRef.current.currentTime = newPositionInSeconds;
    setCurrentTime(newPositionInSeconds);
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
      <section className="pb-20 flex flex-col">
        {data.map((dato, index) => (
          <article key={index} className="px-2 lg:px-40 cursor-pointer ">
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
          onClick={handleClick}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="w-full flex justify-between pt-2">
          <p>{formattedTime}</p>
          <p>{formattedDuration}</p>
        </div>
        <section className="w-full pt-4 gap-8 flex items-center justify-center">
          <button onClick={playPreviousTrack} ><svg xmlns="http://www.w3.org/2000/svg" class="size-12 icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></button>
          <button onClick={togglePlayPause}>{isPlaying ? <svg xmlns=" http://www.w3.org/2000/svg" class="size-12 icon icon-tabler icon-tabler-player-pause" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" class="size-12 icon icon-tabler icon-tabler-player-play-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" stroke-width="0" fill="currentColor" /></svg>}</button>
          <button onClick={playNextTrack}><svg xmlns="http://www.w3.org/2000/svg" class="size-12 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg></button>
        </section>
      </section>

    </section>
  );
}

export default AudioPlayer;
