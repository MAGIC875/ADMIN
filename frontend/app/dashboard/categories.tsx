'use client'

// import { useEffect, useState } from 'react'
import { fetchWithToken } from '../lib/api'
import AddCategory from './add-category'

export default function CategoriesTable({
    categories,
    onCategoriesUpdated
  }: {
    categories: { id: number; name: string }[]
    onCategoriesUpdated?: () => void
  }) {
    
    const handleDelete = async (id: number) => {
      if (!confirm('Удалить категорию?')) return
      try {
        await fetchWithToken(`/categories/${id}`, { method: 'DELETE' })
        if (onCategoriesUpdated) onCategoriesUpdated()  
      } catch (err) {
        console.error(err)
        alert('Ошибка удаления категории')
      }
    }
  
    return (
      <div style={{ marginTop: 20 }}>
        <h2>Категории</h2>
        <AddCategory onAdded={onCategoriesUpdated} />
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Название</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan={3}>Категорий нет</td>
              </tr>
            ) : (
              categories.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.name}</td>
                  <td>
                    <button onClick={() => handleDelete(cat.id)}>Удалить</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    )
  }