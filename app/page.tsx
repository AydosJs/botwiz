import Stepper from "@/components/Stepper";

export default function Home() {
  return (
    <main className={`flex justify-center w-full py-20 p-6`}>


      <div className="max-w-5xl">

        <div className="min-h-[calc(100vh-280px)] flex items-center justify-center">
          <div className="">
            <div className="flex items-center justify-center">
              <span className="inline-block bg-primary-dark p-6 cursor-pointer rounded-full border-4 border-primary drop-shadow-2xl  animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-12 h-12 sm:w-20 sm:h-20 text-primary">
                  <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
                  <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
                </svg>
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6 mt-10 text-center">
              No Code,
              No Problem!
            </h1>
            <p className="text-sm sm:text-lg text-gray-400 text-center">
              Discover the best-in-class Discord bot creator! Our code-free platform empowers you to easily craft and customize sophisticated bots. With an intuitive interface and robust features, we make bot creation a breeze. Elevate your Discord server with us today!
            </p>
          </div>
        </div>

        <div className="mt-40">
          <div className="grid gap-32">

            <div className="flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row md:space-x-4 text-left items-center">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl mb-4 font-semibold text-primary">
                  Before they sold out ready made gluten
                </h1>
                <p className="leading-relaxed text-gray-400">
                  Copper mug try-hard pitchfork pour-over free gan heirloom neutral air plant cold-pressed tacos poke beard tote bag. Heirloom echo park milkshake tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
              <div className="w-full md:w-1/2 h-[300px]">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/500x300" />
              </div>
            </div>

            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 text-left items-center">
              <div className="w-full md:w-1/2 h-[300px]">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/500x300" />
              </div>
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl mb-4 font-semibold text-primary">
                  Before they sold out ready made gluten
                </h1>
                <p className="leading-relaxed text-gray-400">
                  Copper mug try-hard pitchfork pour-over free gan heirloom neutral air plant cold-pressed tacos poke beard tote bag. Heirloom echo park milkshake tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
            </div>

            <div className="flex flex-col-reverse space-y-4 md:space-y-0 md:flex-row md:space-x-4 text-left items-center">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl mb-4 font-semibold text-primary">
                  Before they sold out ready made gluten
                </h1>
                <p className="leading-relaxed text-gray-400">
                  Copper mug try-hard pitchfork pour-over free gan heirloom neutral air plant cold-pressed tacos poke beard tote bag. Heirloom echo park milkshake tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
              <div className="w-full md:w-1/2 h-[300px]">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/500x300" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40">
          <Stepper />
        </div>

      </div>
    </main>
  )
}
