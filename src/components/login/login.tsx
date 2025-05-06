import { useAuth } from '../../hooks/useAuth'
import styles from './styles.module.css'
import Button from '../button'

const Login = () => {
  const { login, loading } = useAuth()

  return (
    <div className={styles.loginContainer}>
      <h2>Sign in to your Todo App</h2>
      <Button onClick={login} type="button" disabled={loading}>
        {loading ? 'Signing in...' : 'Sign in with Google'}
      </Button>
    </div>
  )
}

export default Login 