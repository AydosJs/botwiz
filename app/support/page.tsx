import Accordion from "@/components/Accordion"

const page = () => {
  return (
    <div className="flex justify-center py-20">

      <div className="max-w-6xl">

        <div className="mb-10 text-center">
          <h1 className="text-5xl font-semibold mb-4">Support</h1>
          <p className="text-gray-400 text-md">
            Have any questions? We{"'"}d love to hear from you.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] flex flex-col justify-between p-6 rounded-xl pt-8 relative overflow-hidden bg-neutral-900">
            <span className="absolute top-0 w-full h-2 left-0 bg-blue-600" />
            <div>
              <h1 className="text-2xl font-semibold mt-4">Press</h1>
              <p className="text-lg font-medium mt-8 text-gray-400">
                Are you interested in our latest news or working on a Grammarly story and need to get in touch?
              </p>
            </div>
            <button className=" border-2 border-neutral-700 hover:bg-neutral-600 rounded-md p-4 mt-14 text-md font-semibold">Visit press page</button>
          </div>


          <div className="bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] flex flex-col justify-between p-6 rounded-xl pt-8 relative overflow-hidden bg-neutral-900">
            <span className="absolute top-0 w-full h-2 left-0 bg-green-600" />
            <div>
              <h1 className="text-2xl font-semibold mt-4">Help & Support</h1>
              <p className="text-lg font-medium mt-8 text-gray-400">
                Our support team is spread across the globe to give you answers fast.
              </p>
            </div>
            <button className="border-2 border-neutral-700 bg-neutral-700 hover:bg-neutral-600 rounded-md p-4 mt-14 text-md font-semibold">
              Visit discord page
            </button>
          </div>


          <div className="bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] flex flex-col justify-between p-6 rounded-xl pt-8 relative overflow-hidden bg-neutral-900">
            <span className="absolute top-0 w-full h-2 left-0 bg-blue-600" />
            <div>
              <h1 className="text-2xl font-semibold mt-4">Sales </h1>
              <p className="text-lg font-medium mt-8 text-gray-400">
                Get in touch with our sales team to see how we can work together.
              </p>
            </div>

            <button className=" border-2 border-neutral-700 hover:bg-neutral-600 rounded-md p-4 mt-14 text-md font-semibold">
              Contact sales
            </button>
          </div>

        </div>

        <div className="mt-40">

          <h1 className="font-semibold text-3xl mb-10">FAQ</h1>

          <div className="flex flex-col space-y-2">
            <hr className="border-neutral-800" />

            <Accordion title="If dreams were portals to parallel universes, what unique skills or memories would you bring back from your travels?" content="
          I'd return with the ability to speak every language ever conceived, from the chirps of ancient birds to the clicks of deep-sea creatures. Plus, a recipe for the most euphonious lullaby known to any star system!" />
            <hr className="border-neutral-800" />
            <Accordion
              title="Imagine technology allows us to communicate telepathically. What unexpected consequences would arise from a world where everyone can hear everyone else's thoughts?"
              content="Libraries would be replaced by mental bookstores, first dates would consist of silent mind-maps, and polite white lies would become a distant memory. On the upside, therapy sessions would be a breeze, and surprise parties would be truly shocking!" />
            <hr className="border-neutral-800" />
            <Accordion title="If animals could hold elections, who would be the most likely candidates and what would their campaign promises be?"
              content="Imagine Oscar the grouch for President, promising universal naps and mandatory belly rubs. Meanwhile, Luna the cat runs on a platform of laser pointer redistribution and sunbeam nap optimization. It'd be a purr-fectly chaotic election!" />

          </div>
        </div>


      </div>

    </div>
  )
}

export default page