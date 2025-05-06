import React, { useState } from 'react'
import { useTasks } from '../../hooks/useTasks'
import { TaskStatus } from '../../services/FirebaseService'
import styles from './styles.module.css'
import Button from '../button'

interface TaskFormProps {
  onSuccess?: () => void
}

const initialState = {
  name: '',
  description: '',
  due_date: '',
  status: TaskStatus.New,
}

const TaskForm: React.FC<TaskFormProps> = ({ onSuccess }) => {
  const { addTask } = useTasks()
  const [form, setForm] = useState(initialState)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await addTask(form)
      setForm(initialState)
      onSuccess?.()
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Task name"
        required
        className={styles.input}
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className={styles.textarea}
      />
      <input
        name="due_date"
        value={form.due_date}
        onChange={handleChange}
        type="date"
        required
        className={styles.input}
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className={styles.select}
      >
        {Object.values(TaskStatus).map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
      <Button type="submit" disabled={loading}>
        {loading ? 'Saving...' : 'Add Task'}
      </Button>
    </form>
  )
}

export default TaskForm 