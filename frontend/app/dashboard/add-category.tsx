'use client'

import { useState } from 'react'
import { fetchWithToken } from '../lib/api'

interface Props {
  onAdded?: () => void
}

export default function AddCategory({ onAdded }: Props) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async () => {
    if (!name.trim()) {
      setMessage('Название категории не может быть пустым')
      return
    }

    try {
      await fetchWithToken('/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // важно для JSON
        body: JSON.stringify({ name }),
      })

      setMessage('Категория добавлена')
      setName('')

      if (onAdded) onAdded()

      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      console.error(err)
      setMessage('Ошибка добавления категории')
    }
  }

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Добавить категорию</h3>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Добавить</button>
      {message && <p>{message}</p>}
    </div>
  )
}