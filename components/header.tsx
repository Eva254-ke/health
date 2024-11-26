import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/input" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Data Input
            </Link>
          </li>
          <li>
            <Link href="/results" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Results
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 hover:text-blue-600 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

