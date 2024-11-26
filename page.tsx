import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-pulse">Welcome to Cancer Diagnosis ML Assistant</h1>
      <p className="text-xl text-center mb-12">
        Our advanced machine learning model assists in cancer diagnosis, providing accurate and timely results to support healthcare professionals.
      </p>
      <div className="flex justify-center">
        <Link href="/input" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
          Start Diagnosis
        </Link>
      </div>
    </div>
  )
}

