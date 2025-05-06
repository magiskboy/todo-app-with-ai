import styles from './styles.module.css'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button = ({ children, onClick, type = 'button', disabled = false }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button 