import Link from "next/link"

const Header = () => {
  return (
    <header className="p-4 px-6 sm:px-20 flex flex-row justify-between items-center">
      <div className="w-1/3">
        <h1 className="text-lg font-bold">
          <Link href={'/'}>
            BOTWIZ
          </Link>
        </h1>
      </div>

      <div className="hidden w-1/3 md:flex justify-center">
        <nav className="flex flex-row space-x-8 text-md list-none">
          <li>
            <Link href="/" className="cursor-pointer hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/status" className="cursor-pointer hover:underline">
              Status
            </Link>
          </li>
          <li>
            <Link href="#" className="cursor-pointer hover:underline">
              Documentation
            </Link>
          </li>
          <li>
            <Link href="/support" className="cursor-pointer hover:underline">
              Support
            </Link>
          </li>
        </nav>
      </div>

      <div className="hidden w-1/3 sm:flex justify-end">
        <div className="flex flex-row space-x-2">
          <button className="p-1 rounded-md px-4">
            <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
              <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"></path></g></g>
            </svg>
          </button>
          <button className="p-1 bg-primary rounded-md px-4">Dashboard</button>
        </div>
      </div>

      {/* burger menu */}

      <button className="border-2 sm:hidden rounded-md p-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M2 6.75A.75.75 0 0 1 2.75 6h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 6.75Zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </button>
    </header>
  )
}

export default Header