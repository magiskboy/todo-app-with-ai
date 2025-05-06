import { Button as AntdButton } from 'antd'
import type { ButtonProps as AntdButtonProps } from 'antd'

interface ButtonProps extends AntdButtonProps {
  children: React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <AntdButton {...props}>{children}</AntdButton>
}

export default Button 