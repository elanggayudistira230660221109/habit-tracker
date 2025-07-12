function HabitItem({ habit, onDelete, onToggle }) {
  return (
    <li className={`habit-item \${habit.isDoneToday ? 'done' : ''}`}>
      <div>
        <strong>{habit.name}</strong>
        <p>{habit.description}</p>
        <small>Dibuat: {habit.createdAt}</small>
      </div>
      <div>
        <button onClick={() => onToggle(habit.id)}>
          {habit.isDoneToday ? "✅ Selesai" : "⬜ Belum"}
        </button>
        <button onClick={() => onDelete(habit.id)} className="delete-btn">🗑</button>
      </div>
    </li>
  )
}

export default HabitItem
