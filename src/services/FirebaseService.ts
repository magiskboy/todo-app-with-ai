import { initializeApp } from 'firebase/app'
import type { FirebaseApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import type { Auth, User } from 'firebase/auth'

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBb-uRrI0GTfoA2HSjOCV7cfP3Jdtn3y90",
  authDomain: "friendlychat-6de88.firebaseapp.com",
  databaseURL: "https://friendlychat-6de88.firebaseio.com",
  projectId: "friendlychat-6de88",
  storageBucket: "friendlychat-6de88.appspot.com",
  messagingSenderId: "24966899346",
  appId: "1:24966899346:web:6d03ecb39fad29c3a2284b"
}

export class FirebaseService {
  private static instance: FirebaseService
  private app: FirebaseApp
  private auth: Auth;
  private provider = new GoogleAuthProvider()

  private constructor() {
    this.app = initializeApp(FIREBASE_CONFIG)
    this.auth = getAuth(this.app)
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
} 