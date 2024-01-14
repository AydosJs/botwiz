'use client'

type Steps = {
  id: string;
  title: string;
  context: string
}

const Stepper = () => {

  const STEPS: Steps[] = [
    {
      "title": "Galactic Rhythm", // Randomly generated title
      "context": "Dreamy synthwave echoes through cosmic constellations, inviting exploration of uncharted nebulas.", // Randomly generated context
      "id": "3f54a754-ed6b-454a-9540-d54a15854835" // Unique UUID
    },
    {
      "title": "Midnight Odyssey", // Randomly generated title
      "context": "Under a velvet sky, embark on a voyage through midnight whispers and celestial tapestries.", // Randomly generated context
      "id": "a6548c35-9b7f-4321-8e9d-1f2354a98762" // Unique UUID
    },
    {
      "title": "Stardust Serenade", // Randomly generated title
      "context": "A symphony of starlight dances across the void, weaving tales of ancient wisdom and celestial beauty.", // Randomly generated context
      "id": "4d25a987-e123-4c56-987f-654a321b5489" // Unique UUID
    }
  ];

  const getBackgroundClass = (index: number, lengthArray: number): string => {
    switch (true) {
      case index === 0 && lengthArray === 1:
        // If the array has only one item
        return 'bg-gradient-to-b from-black via-white to-black';
      case index === 0:
        // If it's the first item of multiple
        return 'bg-gradient-to-b from-black to-white';
      case index === lengthArray - 1:
        // If it's the last item
        return 'bg-gradient-to-t from-black to-white';
      default:
        // For all other items
        return 'bg-white';
    }
  }

  return (
    <section className="w-full">

      <div className="mb-10 flex flex-col justify-center items-center">
        <h1 className="font-semibold text-4xl mb-4">ROADMAP TO USE</h1>
        <p className="text-md text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, recusandae?</p>
      </div>

      <div className="flex flex-col w-full">
        {STEPS.map((step, index) => (
          <div key={step.id} className="flex relative pt-10 pb-10 sm:items-center">

            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className={`h-full w-1 pointer-events-none ${getBackgroundClass(index, STEPS.length)}`}></div>
            </div>
            <div className="-left-2 flex-shrink-0 w-10 h-10 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#FA4D6B] text-white relative title-font font-medium text-md">
              {++index}
              <span className="hidden sm:block -z-10 w-16 bg-white h-1 absolute left-9 my-auto top-1/2 bottom-1/2"></span>
            </div>

            <div className="cursor-pointer hover:shadow-[5px_5px_0px_0px_rgba(255,255,255)] relative flex-grow sm:py-10 bg-neutral-900 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] rounded-xl ml-0 sm:ml-12 md:p-8 p-6 flex sm:items-center items-start flex-col sm:flex-row">
              <span className="w-6 h-6 hidden sm:block my-auto absolute -left-3 -z-10 rounded-full bg-white"></span>
              <div className="flex-shrink-0 w-24 h-24 bg-[#320f15] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-[#FA4D6B] rounded-full inline-flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-white mb-1 text-2xl">
                  {step.title}
                </h2>
                <p className="leading-relaxed text-gray-400">
                  {step.context}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Stepper