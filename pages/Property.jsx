import { useParams } from 'react-router-dom'

export default function Property() {
  const { id } = useParams()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Property Details - #{id}</h1>
      <p>This is a placeholder for the property detail page.</p>
    </div>
  )
}
