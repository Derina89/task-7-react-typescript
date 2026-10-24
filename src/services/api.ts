export interface Resource {
  id: number
  name: string
  category: string
  description: string
}

const API_URL = 'http://localhost:3000/api'

export async function getResources(): Promise<Resource[]> {
  const response = await fetch(`${API_URL}/items`)

  if (!response.ok) {
    throw new Error('Failed to load resources')
  }

  const data = await response.json()

  return data.items
}