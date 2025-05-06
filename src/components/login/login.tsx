import { useAuth } from '../../hooks/useAuth'
import { Card, Typography } from 'antd'
import Button from '../button'

const { Title } = Typography

const Login = () => {
  const { login, loading } = useAuth()

  return (
    <Card style={{ maxWidth: 350, margin: '2rem auto', textAlign: 'center' }}>
      <Title level={3}>Sign in to your Todo App</Title>
      <Button onClick={login} type="primary" block loading={loading}>
        Sign in with Google
      </Button>
    </Card>
  )
}

export default Login 