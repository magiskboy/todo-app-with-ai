import type { Task } from '../../services/FirebaseService'
import styles from './styles.module.css'

interface TaskItemProps {
  task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.taskHeader}>
        <span className={styles.taskName}>{task.name}</span>
        <span className={styles.taskStatus}>{task.status}</span>
      </div>
      <div className={styles.taskMeta}>
        <span>Due: {task.due_date}</span>
        <span>Created: {task.created_at}</span>
      </div>
      <div className={styles.taskDescription}>{task.description}</div>
      {/* Actions (edit, delete, status update) will be added here */}
    </div>
  )
}

export default TaskItem 