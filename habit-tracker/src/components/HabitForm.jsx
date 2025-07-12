import { useState } from 'react'

function HabitForm({ onAdd }) {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return alert("Nama habit wajib diisi")

    const newHabit = {
      id: String(+new Date()),
      name,
      description: desc,
      isDoneToday: false,
      createdAt: new Date().toLocaleDateString()
    }

    onAdd(newHabit)
    setName("")
    setDesc("")
  }

  return (
    <form onSubmit={handleSubmit} className="habit-form">
      <input
        type="text"
        placeholder="Nama habit"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Deskripsi (opsional)"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  )
}

export default HabitForm
