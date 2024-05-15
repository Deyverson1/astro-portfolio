import { ChevronDown } from "../icons/ChevronDown";

export default function MobileBar({ handleMusicMobile, image }) {
  return (
    <section className="absolute top-0 flex flex-col gap-y-20 bottom-0 left-0 right-0 z-10 min-h-screen bg-black">
      <div className="pt-8 pl-5 flex ">
        <div onClick={handleMusicMobile}>
          <ChevronDown />
        </div>
        <span className="flex justify-center items-center w-full pr-10">
          <h1>Playing song</h1>
        </span>
      </div>
      <section className="flex justify-center items-center">
        <img src={image} alt="" className="w-10/12 h-72 object-cover rounded-md"/>
      </section>
    </section>
  )
}