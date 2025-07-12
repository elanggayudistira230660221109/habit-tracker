import HabitItem from "./HabitItem"

function HabitList({ habits, onDelete, onToggle }) {
  if (habits.length === 0) return <p>Tidak ada habit.</p>

  return (
    <ul className="habit-list">
      {habits.map(habit => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  )
}

export default HabitList
