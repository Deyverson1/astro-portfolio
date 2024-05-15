import { ChevronDown } from "../icons/ChevronDown";
import ControlPlayer from "./ControlPlayer";
import ProgressBar from "./ProgressBar";

export default function MobileBar({ handleMusicMobile, image, props, propsControl, title, subTitle }) {
  return (
    <section className="absolute top-0 flex flex-col  bottom-0 left-0 right-0 z-10 min-h-screen bg-black pt-8 px-5">
      <div className=" pb-10 flex ">
        <div onClick={handleMusicMobile}>
          <ChevronDown />
        </div>
        <span className="flex justify-center flex-col items-center w-full pr-10">
          <h1 className="text-gray-200 tracking-widest uppercase text-[10px]">Playing from Playlist</h1>
          <h2 className="text-[14px] tracking-wide">Valking</h2>
        </span>
      </div>
      <section className="px-8 pt-8">
        <h1 className="text-gray-100 text-[16px]">{title}</h1>
        <h2 className="text-gray-400 text-[13px]">{subTitle}</h2>
      </section>
      <section className="flex pt-4 justify-center items-center">
        <img src={image} alt="" className="w-10/12 h-72 object-cover rounded-xl" />
      </section>
      <main className="flex pt-10 mx-5 flex-col justify-center items-center gap-y-5">
        <ProgressBar {...props} display='flex' />
        <div className="flex pr-8">
          <ControlPlayer {...propsControl} display='flex' />
        </div>
      </main>
    </section>
  )
}