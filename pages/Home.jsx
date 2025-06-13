import { Link } from 'react-router-dom'

const listings = [
  { id: 1, name: 'Beach House', location: 'Dubai', price: '$200/night' },
  { id: 2, name: 'City Apartment', location: 'Abu Dhabi', price: '$150/night' }
]

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Holiday Homes</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {listings.map(home => (
          <Link key={home.id} to={`/property/${home.id}`} className="block p-4 border rounded shadow hover:bg-gray-50">
            <h2 className="text-xl">{home.name}</h2>
            <p>{home.location}</p>
            <p>{home.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
