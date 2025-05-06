import React, { useState } from 'react'
import { useTasks } from '../../hooks/useTasks'
import { TaskStatus } from '../../services/FirebaseService'
import { Form, Input, Select, DatePicker, Button as AntdButton, Card } from 'antd'
import type { Task } from '../../types/Task'
interface TaskFormProps {
  onSuccess?: () => void
}

const { TextArea } = Input

const TaskForm: React.FC<TaskFormProps> = ({ onSuccess }) => {
  const { addTask } = useTasks()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: Task) => {
    setLoading(true)
    try {
      await addTask({
        name: values.name,
        description: values.description,
        due_date: values.due_date.toString(),
        status: values.status,
      })
      onSuccess?.()
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card style={{ marginBottom: 24 }}>
      <Form layout="vertical" onFinish={onFinish} initialValues={{ status: TaskStatus.New }}>
        <Form.Item name="name" label="Task name" rules={[{ required: true, message: 'Please enter a task name' }]}> 
          <Input placeholder="Task name" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea placeholder="Description" autoSize={{ minRows: 2, maxRows: 4 }} />
        </Form.Item>
        <Form.Item name="due_date" label="Due date" rules={[{ required: true, message: 'Please select a due date' }]}> 
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name="status" label="Status">
          <Select>
            {Object.values(TaskStatus).map(status => (
              <Select.Option key={status} value={status}>{status}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <AntdButton type="primary" htmlType="submit" loading={loading} block>
            Add Task
          </AntdButton>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default TaskForm 