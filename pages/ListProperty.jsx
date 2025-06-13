import { useState } from 'react'

export default function ListProperty() {
  const [form, setForm] = useState({ name: '', location: '', price: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Property listed! (demo only)')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-4">
      <h1 className="text-2xl font-bold">List Your Property</h1>
      <input className="w-full p-2 border rounded" placeholder="Name" name="name" onChange={handleChange} />
      <input className="w-full p-2 border rounded" placeholder="Location" name="location" onChange={handleChange} />
      <input className="w-full p-2 border rounded" placeholder="Price" name="price" onChange={handleChange} />
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  )
}
