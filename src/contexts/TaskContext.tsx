import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { FirebaseService, Task, TaskStatus } from '../services/FirebaseService'
import { useAuthContext } from './AuthContext'

interface TaskContextType {
  tasks: Task[]
  loading: boolean
  addTask: (task: Omit<Task, 'id' | 'created_at' | 'userId'>) => Promise<void>
  updateTask: (taskId: string, updates: Partial<Omit<Task, 'id' | 'userId' | 'created_at'>>) => Promise<void>
  deleteTask: (taskId: string) => Promise<void>
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthContext()
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const firebase = FirebaseService.getInstance()

  useEffect(() => {
    if (!user) {
      setTasks([])
      setLoading(false)
      return
    }
    setLoading(true)
    const unsubscribe = firebase.subscribeTasks(user.uid, (tasks) => {
      setTasks(tasks)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [user])

  const addTask = useCallback(async (task: Omit<Task, 'id' | 'created_at' | 'userId'>) => {
    if (!user) return
    await firebase.addTask(task, user.uid)
  }, [firebase, user])

  const updateTask = useCallback(async (taskId: string, updates: Partial<Omit<Task, 'id' | 'userId' | 'created_at'>>) => {
    await firebase.updateTask(taskId, updates)
  }, [firebase])

  const deleteTask = useCallback(async (taskId: string) => {
    await firebase.deleteTask(taskId)
  }, [firebase])

  return (
    <TaskContext.Provider value={{ tasks, loading, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => {
  const ctx = useContext(TaskContext)
  if (!ctx) throw new Error('useTaskContext must be used within TaskProvider')
  return ctx
}
export { TaskStatus } 