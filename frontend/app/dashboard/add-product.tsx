'use client'

import { useState } from 'react'
import { fetchWithToken } from '../lib/api'

interface Props {
  onAdded?: () => void
  categories: { id: number; name: string }[]
}

export default function AddProduct({ onAdded, categories }: Props) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    if (!name.trim()||!price||!categoryId) {
      setMessage('Все поля обязательны')
      return
    }

    try {
      await fetchWithToken('/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          price: parseFloat(price),
          categoryId: parseInt(categoryId),
        }),
      })
      setMessage('Товар добавлен')
      setName('')
      setPrice('')
      setCategoryId('')
      if (onAdded) onAdded()
    } catch (err) {
      console.error(err)
      setMessage('Ошибка добавления товара')
    }
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Добавить товар</h3>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">Выберите категорию</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Добавить</button>
      {message && <p>{message}</p>}
    </div>
  )
}