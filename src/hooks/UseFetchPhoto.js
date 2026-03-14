import { useState, useEffect } from 'react'

export default function useFetchPhotos() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchPhotos() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch('https://picsum.photos/v2/list?limit=30')

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const data = await response.json()

        if (!cancelled) {
          setPhotos(data)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Something went wrong while fetching photos.')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchPhotos()

    return () => {
      cancelled = true
    }
  }, [])

  return { photos, loading, error }
}
