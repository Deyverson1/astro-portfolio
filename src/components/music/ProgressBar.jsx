import { useRef, useState } from "react";

export default function ProgressBar({ handleMouseDown, handleMouseMove, handleMouseUp, handleProgressBarClick, duration, minutes, seconds, currentTime, setCurrentTime, audioRef, display }) {

  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef();


  const totalDurationMinutes = Math.floor(duration / 60)
  const totalSecondDuration = Math.floor(duration % 60)
  const progress = duration ? (currentTime / duration) * 100 : 0;
  const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  const formattedDuration = `${totalDurationMinutes}:${totalSecondDuration}`


  function handleMouseUp() {
    setIsDragging(false);
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

  return (
    <section className={`${display} lg:flex w-full justify-center items-center gap-2`}>
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
  )
}