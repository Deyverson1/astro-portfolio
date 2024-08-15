import ArrowRandom from "../icons/ArrowRandom"
import { ChevronLeft } from "../icons/ChevronLeft";
import { ChevronRight } from "../icons/ChevronRight";
import { StopIcon } from "../icons/StopIcon";
import { PlayIcon } from "../icons/PlayIcon";

export default function ControlPlayer({ isPlaying, playPreviousTrack, playNextTrack, isRandom, setRandom, setIsPlaying, audioRef, display }) {

  function togglePlayPause() {
    setIsPlaying(prevState => !prevState);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }
  function handleRandom() {
    if (!isRandom) {
      setRandom(true)
    } else {
      setRandom(false)
    }
    console.log(isRandom)
  }
  return (
    <section className="w-full gap-8 pb-1 flex items-center justify-center pr-8">
      <button onClick={handleRandom}><ArrowRandom stroke={isRandom ? 'green' : 'white'} size={'size-5'} />
      </button>
      <button onClick={playPreviousTrack} className={`${display} lg:block`}> <ChevronLeft /></button>
      <button onClick={togglePlayPause}>{isPlaying ? <StopIcon /> : <PlayIcon />}</button>
      <button onClick={playNextTrack} className={`${display} lg:block`}><ChevronRight /></button>
    </section>
  )
}