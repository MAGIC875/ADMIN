'use client'

import { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { fetchWithToken } from '../lib/api'

Chart.register(ArcElement, Tooltip, Legend)

export default function Analytics() {
  const [data, setData] = useState<{ category: string; count: number }[]>([])

  useEffect(() => {
    fetchWithToken('/analytics/products-by-category')
      .then(setData)
      .catch(console.error)
  }, [])

  const chartData = {
    labels: data.map((d) => d.category),
    datasets: [
      {
        label: 'Товары по категориям',
        data: data.map((d) => d.count),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
      },
    ],
  }

  return (
    <div style={{ marginTop: 40, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
        Аналитика: распределение товаров по категориям
      </h2>
      {data.length > 0 ? (
        <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
      ) : (
        <p style={{ textAlign: 'center' }}>Данные загружаются...</p>
      )}
    </div>
  )
}