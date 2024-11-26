'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DataInput() {
  const [formData, setFormData] = useState({
    patientId: '',
    age: '',
    gender: '',
    medicalHistory: '',
    symptoms: '',
  })
  const [file, setFile] = useState<File | null>(null)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form data:', formData)
    console.log('File:', file)
    // For demonstration purposes, we'll just navigate to the results page
    router.push('/results')
  }

  const handleClear = () => {
    setFormData({
      patientId: '',
      age: '',
      gender: '',
      medicalHistory: '',
      symptoms: '',
    })
    setFile(null)
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Data Input</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label htmlFor="patientId" className="block mb-2">Patient ID</label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            aria-describedby="patientIdHelp"
          />
          <p id="patientIdHelp" className="text-sm text-gray-600 mt-1">Enter the unique identifier for the patient.</p>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="medicalHistory" className="block mb-2">Medical History</label>
          <textarea
            id="medicalHistory"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="symptoms" className="block mb-2">Symptoms</label>
          <textarea
            id="symptoms"
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="medicalReport" className="block mb-2">Upload Medical Report</label>
          <input
            type="file"
            id="medicalReport"
            onChange={handleFileChange}
            className="w-full p-2 border rounded"
            accept=".pdf,.doc,.docx"
          />
        </div>
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
          <button type="button" onClick={handleClear} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Clear
          </button>
        </div>
      </form>
    </div>
  )
}

