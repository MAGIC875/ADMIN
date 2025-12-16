'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login') // редирект если нет токена
    } else {
      setAuthorized(true) // есть токен - показываем контент
    }
  }, [router])

  if (!authorized) return null // пока проверяем токен - ничего не показываем
  return <>{children}</>
}