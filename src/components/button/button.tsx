import styles from './styles.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button 