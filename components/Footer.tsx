import Link from "next/link"

const Footer = () => {
  return (
    <footer className="p-6 px-20 border-t border-neutral-800">
      <div className="flex flex-row justify-between  items-center">
        <div>
          <p className="text-xl font-semibold">
            <Link href="/">BOTWIZ</Link>
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium">
            © 2024 BOTWIZ
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer