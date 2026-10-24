import type { Resource } from '../services/api'

interface ResourceCardProps {
  resource: Resource
}

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="resource-card">
      <span className="resource-category">
        {resource.category}
      </span>

      <h3>{resource.name}</h3>

      <p>{resource.description}</p>

      <button className="resource-btn">
        Explore Resource
      </button>
    </article>
  )
}

export default ResourceCard