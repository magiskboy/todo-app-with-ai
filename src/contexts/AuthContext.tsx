import React, { createContext, useContext, useEffect, useState } from 'react'
import { FirebaseService } from '../services/FirebaseService'
import type { User } from 'firebase/auth'

interface AuthUser {
  uid: string
  displayName: string | null
  photoURL: string | null
  email: string | null
}

interface AuthContextType {
  user: AuthUser | null
  loading: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)
  const firebase = FirebaseService.getInstance()

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChanged((firebaseUser: User | null) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          email: firebaseUser.email,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const login = async () => {
    setLoading(true)
    try {
      await firebase.signInWithGoogle()
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      await firebase.signOut()
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuthContext must be used within AuthProvider')
  return ctx
} 