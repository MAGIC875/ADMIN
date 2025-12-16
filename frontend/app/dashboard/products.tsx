'use client'

import { useEffect, useState } from 'react'
import { fetchWithToken } from '../lib/api'
import AddProduct from './add-product'

interface ProductsTableProps {
  categories: { id: number; name: string }[]
}

export default function ProductsTable({ categories }: ProductsTableProps) {
  const [products, setProducts] = useState<any[]>([])
  const [categoryId, setCategoryId] = useState('')

  const fetchProducts = () => {
    const query = categoryId ? `?categoryId=${categoryId}` : ''
    fetchWithToken('/products' + query)
      .then(setProducts)
      .catch(console.error)
  }

  useEffect(() => {
    fetchProducts()
  }, [categoryId])

  const handleDelete = async (id: number) => {
    if (!confirm('Удалить товар?')) return
    try {
      await fetchWithToken(`/products/${id}`, { method: 'DELETE' })
      fetchProducts()
    } catch (err) {
      console.error(err)
      alert('Ошибка удаления товара')
    }
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h2>Товары</h2>
      <AddProduct onAdded={fetchProducts} categories={categories} />

      <label>
        Фильтр по категории:{' '}
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Все категории</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </label>
      {/* <button onClick={fetchProducts} style={{ marginLeft: 10 }}>
        Применить
      </button> */}

      <table border={1} cellPadding={5} style={{ marginTop: 10 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Категория</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={5}>Товаров нет</td>
            </tr>
          ) : (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category.name}</td>
                <td>
                  <button onClick={() => handleDelete(p.id)}>Удалить</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}