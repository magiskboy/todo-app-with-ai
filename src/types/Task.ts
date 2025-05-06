export enum TaskStatus {
  New = 'New',
  InProgress = 'In progress',
  Done = 'Done',
  Cancelled = 'Cancelled',
}

export interface Task {
  id: string
  name: string
  description: string
  created_at: string
  due_date: string
  status: TaskStatus
  userId: string
} 