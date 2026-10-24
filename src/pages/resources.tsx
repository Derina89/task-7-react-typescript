import { useEffect, useState } from 'react'
import ResourceCard from '../components/resourceCard'
import Loading from '../components/loading'
import { getResources, type Resource } from '../services/api'

function Resources() {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadResources() {
      try {
        const data = await getResources()
        setResources(data)
      } catch {
        setError('Unable to load resources. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadResources()
  }, [])

  if (loading) {
    return (
      <main className="page-container">
        <Loading />
      </main>
    )
  }

  if (error) {
    return (
      <main className="page-container">
        <div className="state-message error-state">
          <h2>Something went wrong</h2>
          <p>{error}</p>
        </div>
      </main>
    )
  }

  if (resources.length === 0) {
    return (
      <main className="page-container">
        <div className="state-message">
          <h2>No resources found</h2>
          <p>There are currently no learning resources available.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="page-container">
      <section className="page-heading">
        <span>LEARNING LIBRARY</span>
        <h1>Explore Resources</h1>
        <p>
          Discover learning materials across frontend, backend,
          databases, and development tools.
        </p>
      </section>

      <section className="resource-grid">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
          />
        ))}
      </section>
    </main>
  )
}

export default Resources