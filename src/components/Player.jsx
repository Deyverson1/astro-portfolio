import PlayerBar from "./PlayerBar";
function AudioPlayer() {

 
    return (
      <section className="pt-20 w-full ">
        <section className="flex gap-4 px-44  mx-auto container pb-4 lg:max-w-4xl md:max-w-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-playlist" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M17 17v-13h4" /><path d="M13 5h-10" /><path d="M3 9l10 0" /><path d="M9 13h-6" /></svg>
          <h1 className="text-lg">Playlist</h1>
        </section>
        <PlayerBar/>
      </section>
    );
  }

  export default AudioPlayer;
