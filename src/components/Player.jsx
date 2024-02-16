import { useEffect, useRef, useState } from "react";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // Corregir la inicialización del estado
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.src = 'music/Someone To Spend Time With.mp3';
  }, []);

  function handleClick() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      audioRef.current.volume = 0.9;
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <section>
      <main className="relative">
        <div className="absolute bottom-0 left-0 ">
          <audio controls ref={audioRef}>
            <source src="music/Someone To Spend Time With.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </div>
        <img
          src="https://i.scdn.co/image/ab67616d0000b273a1f060b534d1d9c859acc73f"
          className="rounded-2xl"
          alt="Portada del audio"
        />
      </main>
      <button onClick={handleClick} className="pt-8">{isPlaying ? 'pause' : 'play'}</button> {/* Cambiar el texto del botón dependiendo del estado de reproducción */}
    </section>
  );
}

export default AudioPlayer;
