import Layout from './components/layout'
import Button from './components/button'
import Login from './components/login'
import { AuthProvider, useAuthContext } from './contexts/AuthContext'

function AppContent() {
  const { user, loading } = useAuthContext()
  if (loading) return <div>Loading...</div>
  if (!user) return <Login />
  return (
    <Layout>
      <h2>Welcome to the Todo App</h2>
      <Button>Example Button</Button>
    </Layout>
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
