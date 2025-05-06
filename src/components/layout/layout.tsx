import styles from './styles.module.css'
import { useAuth } from '../../hooks/useAuth'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { user, logout } = useAuth()

  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <h1>Todo App</h1>
        {user && (
          <div className={styles.userInfo}>
            {user.photoURL && <img src={user.photoURL} alt={user.displayName || 'User'} className={styles.avatar} />}
            <span className={styles.displayName}>{user.displayName}</span>
            <button className={styles.logoutBtn} onClick={logout} title="Logout">Logout</button>
          </div>
        )}
      </header>
      <main className={styles.mainContent}>{children}</main>
    </div>
  )
}

export default Layout 