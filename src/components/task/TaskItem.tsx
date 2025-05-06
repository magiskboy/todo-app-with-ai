import type { Task } from '../../services/FirebaseService'
import { Card, Tag, Typography } from 'antd'

interface TaskItemProps {
  task: Task
}

const statusColor: Record<string, string> = {
  'New': 'blue',
  'In progress': 'gold',
  'Done': 'green',
  'Cancelled': 'red',
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <Card
      type="inner"
      title={<span>{task.name} <Tag color={statusColor[task.status]}>{task.status}</Tag></span>}
      style={{ marginBottom: 16 }}
    >
      <Typography.Paragraph>{task.description}</Typography.Paragraph>
      <div style={{ fontSize: 13, color: '#888' }}>
        <span>Due: {task.due_date}</span> | <span>Created: {task.created_at}</span>
      </div>
      {/* Actions (edit, delete, status update) will be added here */}
    </Card>
  )
}

export default TaskItem 