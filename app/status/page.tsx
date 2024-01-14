import StatusItem from "@/components/StatusItem"

const page = () => {
  return (
    <div className="w-full my-20 flex justify-center px-6">

      <div className="max-w-5xl flex flex-col w-full justify-center">

        <div className="mb-10 text-center">
          <h1 className="text-5xl font-semibold mb-2">Status</h1>
          <p className="text-gray-400 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eveniet!</p>
          <div className="flex flex-row items-center justify-center space-x-16 mt-6">
            <div className="flex flex-row space-x-3 items-center border-2 p-2 rounded-full px-4 border-neutral-700 bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 cursor-pointer">
              <span className="w-4 h-4 rounded-full bg-green-600 drop-shadow-2xl"></span>
              <span>Good</span>
            </div>
            <div className="flex flex-row space-x-3 items-center border-2 p-2 rounded-full px-4 border-neutral-700 bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 cursor-pointer">
              <span className="w-4 h-4 rounded-full bg-orange-600"></span>
              <span>Interruptions</span>
            </div>
            <div className="flex flex-row space-x-3 items-center border-2 p-2 rounded-full px-4 border-neutral-700 bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 cursor-pointer">
              <span className="w-4 h-4 rounded-full bg-red-600"></span>
              <span>Offline</span>
            </div>
          </div>
        </div>


        <div className="flex flex-col  overflow-hidden border-white space-y-4 rounded-xl p-4 sm:p-[4rem] bg-neutral-900 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px]">

          <StatusItem status="good" title="Some title here" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, beatae!" />
          <StatusItem status="interruptions" title="Some title here" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, beatae!" />
          <StatusItem status="offline" title="Some title here" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, beatae!" />
          <StatusItem status="offline" title="Some title here" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, beatae!" />
          <StatusItem status="good" title="Some title here" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, beatae!" />

        </div>
      </div>

    </div>
  )
}

export default page