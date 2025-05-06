import { initializeApp } from 'firebase/app'
import type { FirebaseApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import type { Auth, User } from 'firebase/auth'
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, onSnapshot, Timestamp } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBb-uRrI0GTfoA2HSjOCV7cfP3Jdtn3y90",
  authDomain: "friendlychat-6de88.firebaseapp.com",
  databaseURL: "https://friendlychat-6de88.firebaseio.com",
  projectId: "friendlychat-6de88",
  storageBucket: "friendlychat-6de88.appspot.com",
  messagingSenderId: "24966899346",
  appId: "1:24966899346:web:6d03ecb39fad29c3a2284b"
}

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

export class FirebaseService {
  private static instance: FirebaseService
  private app: FirebaseApp
  private auth: Auth
  private db: Firestore
  private provider = new GoogleAuthProvider()

  private constructor() {
    this.app = initializeApp(FIREBASE_CONFIG)
    this.auth = getAuth(this.app)
    this.db = getFirestore(this.app)
  }

  static getInstance() {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService()
    }
    return FirebaseService.instance
  }

  signInWithGoogle() {
    return signInWithPopup(this.auth, this.provider)
  }

  signOut() {
    return signOut(this.auth)
  }

  onAuthStateChanged(callback: (user: User | null) => void) {
    return this.auth.onAuthStateChanged(callback)
  }

  getCurrentUser() {
    return this.auth.currentUser
  }

  // --- Task CRUD ---
  async addTask(task: Omit<Task, 'id' | 'created_at' | 'userId'>, userId: string): Promise<void> {
    await addDoc(collection(this.db, 'tasks'), {
      ...task,
      status: task.status,
      created_at: Timestamp.now().toDate().toISOString(),
      userId,
    })
  }

  async updateTask(taskId: string, updates: Partial<Omit<Task, 'id' | 'userId' | 'created_at'>>): Promise<void> {
    const ref = doc(this.db, 'tasks', taskId)
    await updateDoc(ref, updates)
  }

  async deleteTask(taskId: string): Promise<void> {
    const ref = doc(this.db, 'tasks', taskId)
    await deleteDoc(ref)
  }

  async getTasks(userId: string): Promise<Task[]> {
    const q = query(collection(this.db, 'tasks'), where('userId', '==', userId))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as Task))
  }

  subscribeTasks(userId: string, callback: (tasks: Task[]) => void) {
    const q = query(collection(this.db, 'tasks'), where('userId', '==', userId))
    return onSnapshot(q, (snapshot) => {
      const tasks = snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() } as Task))
      callback(tasks)
    })
  }
} 