import { Layout as AntdLayout, Avatar, Typography, Button as AntdButton } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { useAuth } from '../../hooks/useAuth'

const { Header, Content } = AntdLayout
const { Title } = Typography

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { user, logout } = useAuth()

  return (
    <AntdLayout style={{ minHeight: '100vh', background: '#f9f9f9' }}>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#222', color: '#fff', padding: '0 1rem' }}>
        <Title level={3} style={{ color: '#fff', margin: 0 }}>Todo App</Title>
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar src={user.photoURL || undefined} icon={!user.photoURL && <UserOutlined />} alt={user.displayName || 'User'} />
            <span style={{ color: '#fff', fontWeight: 500 }}>{user.displayName}</span>
            <AntdButton icon={<LogoutOutlined />} onClick={logout} size="small">
              Logout
            </AntdButton>
          </div>
        )}
      </Header>
      <Content style={{ maxWidth: 600, margin: '0 auto', width: '100%', padding: '1rem' }}>
        {children}
      </Content>
    </AntdLayout>
  )
}

export default Layout 