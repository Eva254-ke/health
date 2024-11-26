'use client'

import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function Results() {
  const [result, setResult] = useState<{
    prediction: string
    confidence: number
    details: { [key: string]: number }
  } | null>(null)

  useEffect(() => {
    // In a real application, you would fetch the results from your backend here
    // For this example, we'll use mock data
    const mockResult = {
      prediction: 'Benign',
      confidence: 0.85,
      details: {
        'Cell Size': 0.3,
        'Cell Shape': 0.4,
        'Marginal Adhesion': 0.2,
        'Single Epithelial Cell Size': 0.5,
        'Bare Nuclei': 0.1,
      }
    }
    setResult(mockResult)
  }, [])

  const chartData = {
    labels: result ? Object.keys(result.details) : [],
    datasets: [
      {
        label: 'Feature Importance',
        data: result ? Object.values(result.details) : [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Feature Importance in Diagnosis',
      },
    },
  }

  const handleDownloadPDF = () => {
    // In a real application, this would generate and download a PDF report
    console.log('Downloading PDF report...')
  }

  if (!result) {
    return <div className="container mx-auto px-6 py-12">Loading results...</div>
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Diagnosis Results</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Prediction</h2>
        <p className="text-xl mb-2">
          The model predicts the tumor is: <strong>{result.prediction}</strong>
        </p>
        <p className="text-lg mb-4">
          Confidence: <strong>{(result.confidence * 100).toFixed(2)}%</strong>
        </p>
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF Report
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Detailed Analysis</h2>
        <div className="h-96">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}

