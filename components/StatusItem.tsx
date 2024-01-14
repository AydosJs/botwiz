'use client'
import { useState } from "react";

type Status = 'good' | 'interruptions' | 'offline'

type Props = {
  title: string;
  content: string;
  status: Status
}

const StatusItem = ({ title, content, status }: Props) => {

  const [open, setOpen] = useState<boolean>(false)

  const statusToBackground = (status: Status): string | null => {
    switch (status) {
      case 'good':
        return 'bg-green-600';
      case 'interruptions':
        return 'bg-orange-600';
      case 'offline':
        return 'bg-red-600';
      default:
        return null;
    }
  };

  return (
    <div className="relative cursor-pointer overflow-hidden backdrop-blur-sm backdrop-filter border border-white border-opacity-20 hover:bg-neutral-800 group">
      <span className={`h-full absolute w-2 ${statusToBackground(status)} top-0 left-0`}></span>

      <div onClick={() => setOpen(!open)} className="p-6 px-[2rem] flex flex-row justify-between w-full items-center">
        <div className="w-full">
          <h1 className="text-md w-full">
            {title}
          </h1>
        </div>

        <span>
          {!open ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
            </svg>
          }
        </span>
      </div>

      {open &&
        <div className="p-6 px-[2rem] bg-neutral-900 group-hover:bg-neutral-800">
          <p className="text-md text-gray-400 font-medium">
            {content}
          </p>
        </div>
      }
    </div>
  )
}

export default StatusItem