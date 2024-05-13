/* The code snippet is a React functional component named `PlayList` that renders a list of items based
on the `data` prop passed to it. Each item in the list is displayed within an `<article>` element
and includes an image, title, and subtitle. The `handleClick` function is called when an item is
clicked. */
import { Spotify } from "../icons/Spotify";

export default function PlayList({ data, handleClick }) {
  return (
    <section className="pb-6 flex flex-col  mx-auto container lg:max-w-4xl md:max-w-2xl">
      {data.map((dato, index) => (
        <article key={index} className="px-1 lg:px-40 cursor-pointer" onClick={(event) => handleClick(event, index)}>
          <section className="hover:bg-gray-500 dark:hover:bg-gray-800 hover:text-white  rounded-md">
            <main className="flex gap-x-2 p-2 items-center ">
              <div className="w-1/12 h-1/12">
                <img src={dato.image} alt={`Image from ${dato.title}`} className="w-full object-cover aspect-square rounded-md" />
              </div>
              <div>
                <h1 className="w-full  hover:underline">{dato.title}</h1>
                <h2 className="text-sm  dark:text-gray-400">{dato.subTitle}</h2>
              </div>
            </main>
          </section>
        </article>
      ))}
      <footer className="flex items-center justify-center pt-5 gap-1 pb-28">
        Puedes encontrar más en <a href="https://open.spotify.com/playlist/4l8qi8XKy2LLr0tMxwNOlr?si=lklsHrGOSoKmKDm5eODvxg" target="_blank" className="flex items-center underline gap-x-1">Spotify <Spotify size={20} dark:fill="white" /></a>
      </footer>
    </section>
  )
}