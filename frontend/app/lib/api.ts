// export async function fetchWithToken(url: string, options: RequestInit = {}) {
//     const token = localStorage.getItem('token')
//     const headers = {
//       ...options.headers,
//       Authorization: `Bearer ${token}`,
//     }
  
//     const res = await fetch('http://localhost:3000' + url, {
//       ...options,
//       headers,
//     })
  
//     if (!res.ok) throw new Error('Ошибка запроса')
//     return res.json()
//   }
export async function fetchWithToken(
    path: string,
    options: RequestInit = {}
  ) {
    const token = localStorage.getItem('token')
    if (!token) throw new Error('No token found')
  
    const res = await fetch(`http://localhost:3000${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        ...(options.headers || {}),
      },
    })
  
    if (!res.ok) {
      const text = await res.text()
      throw new Error(text || 'Request failed')
    }
  
    return res.json()
  }