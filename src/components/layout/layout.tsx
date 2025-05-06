import styles from './styles.module.css'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layoutContainer}>
      <header className={styles.header}>
        <h1>Todo App</h1>
      </header>
      <main className={styles.mainContent}>{children}</main>
    </div>
  )
}

export default Layout 