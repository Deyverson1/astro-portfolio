
export default function PlayList({ data, handleClick }) {
  return (
    <section className="pb-6 flex flex-col  mx-auto container lg:max-w-4xl md:max-w-2xl">
      {data.map((dato, index) => (
        <article key={index} className="px-1 lg:px-40 cursor-pointer" onClick={(event) => handleClick(event, index)}>
          <section className="hover:bg-gray-800 hover:text-white  rounded-md">
            <main className="flex gap-x-2 p-2 items-center ">
              <div className="w-1/12 h-1/12">
                <img src={dato.image} alt={`Image from ${dato.title}`} className="w-full rounded-md" />
              </div>
              <div>
                <h1 className="w-full  hover:underline">{dato.title}</h1>
                <h2 className="text-sm  dark:text-gray-400">{dato.subTitle}</h2>
              </div>
              <div>
              </div>
            </main>
          </section>
        </article>
      ))}
    </section>
  )
}





