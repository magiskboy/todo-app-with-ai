import Layout from './components/layout'
import Login from './components/login'
import { AuthProvider, useAuthContext } from './contexts/AuthContext'
import { TaskProvider } from './contexts/TaskContext'
import { TaskForm, TaskList } from './components/task'

function AppContent() {
  const { user, loading } = useAuthContext()
  if (loading) return <div>Loading...</div>
  if (!user) return <Login />
  return (
    <TaskProvider>
      <Layout>
        <TaskForm />
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
