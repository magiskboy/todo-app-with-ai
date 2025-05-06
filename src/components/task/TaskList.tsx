import { useTasks } from '../../hooks/useTasks'
import TaskItem from './TaskItem';
import styles from './styles.module.css'

const TaskList = () => {
  const { tasks, loading } = useTasks()

  if (loading) return <div>Loading tasks...</div>
  if (!tasks.length) return <div>No tasks found.</div>

  return (
    <div className={styles.taskList}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList 