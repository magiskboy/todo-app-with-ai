import { useTasks } from '../../hooks/useTasks'
import TaskItem from './TaskItem'
import { List, Card } from 'antd'

const TaskList = () => {
  const { tasks, loading } = useTasks()

  if (loading) return <div>Loading tasks...</div>
  if (!tasks.length) return <div>No tasks found.</div>

  return (
    <Card>
      <List
        dataSource={tasks}
        renderItem={task => <TaskItem key={task.id} task={task} />}
        itemLayout="vertical"
      />
    </Card>
  )
}

export default TaskList 