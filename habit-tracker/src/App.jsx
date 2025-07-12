import React, { useEffect, useState } from 'react'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import SearchBar from './components/SearchBar'

const LOCAL_KEY = 'habit-tracker'

function App() {
  const [habits, setHabits] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEY)) || []
    setHabits(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(habits))
  }, [habits])

  const addHabit = (habit) => {
    setHabits([habit, ...habits])
  }

  const deleteHabit = (id) => {
    if (window.confirm("Yakin ingin menghapus habit ini?")) {
      setHabits(habits.filter(h => h.id !== id))
    }
  }

  const toggleHabit = (id) => {
    setHabits(habits.map(h =>
      h.id === id ? { ...h, isDoneToday: !h.isDoneToday } : h
    ))
  }

  const filteredHabits = habits.filter(h =>
    h.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <h1>📝 Habit Tracker</h1>
      <HabitForm onAdd={addHabit} />
      <SearchBar search={search} setSearch={setSearch} />
      <HabitList
        habits={filteredHabits}
        onDelete={deleteHabit}
        onToggle={toggleHabit}
      />
    </div>
  )
}

export default App
