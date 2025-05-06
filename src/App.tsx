import Layout from './components/layout'
import Login from './components/login'
import { AuthProvider, useAuthContext } from './contexts/AuthContext'
import { TaskProvider } from './contexts/TaskContext'
import { TaskList, TaskForm } from './components/task'
import { useState } from 'react'
import { Button, Modal, message } from 'antd'

function AppContent() {
  const { user, loading } = useAuthContext()
  const [modalOpen, setModalOpen] = useState(false)

  if (loading) return <div>Loading...</div>
  if (!user) return <Login />

  const handleAddTaskSuccess = () => {
    setModalOpen(false)
    message.success('Task added successfully!')
  }

  return (
    <TaskProvider>
      <Layout>
        <Button type="primary" onClick={() => setModalOpen(true)} block style={{ marginBottom: 16 }}>
          Add Task
        </Button>
        <Modal
          open={modalOpen}
          onCancel={() => setModalOpen(false)}
          footer={null}
          title="Add Task"
          destroyOnClose
        >
          <TaskForm onSuccess={handleAddTaskSuccess} />
        </Modal>
        <TaskList />
      </Layout>
    </TaskProvider>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
