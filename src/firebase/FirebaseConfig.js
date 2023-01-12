import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, updateProfile,onAuthStateChanged , signInWithEmailAndPassword, signOut} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { toast } from "react-hot-toast";
import store from '../store';
import { login as loginHandle, logout as logoutHandle } from "../store/auth";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAnC38X4kamOOJW7O69PbI8WrQ1indu0p8",
  authDomain: "blogproject-39f5b.firebaseapp.com",
  projectId: "blogproject-39f5b",
  storageBucket: "blogproject-39f5b.appspot.com",
  messagingSenderId: "1000906189376",
  appId: "1:1000906189376:web:29a6dc81fb8c62d0364da5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = async (email, password) => {
  try {
    const {user} = await createUserWithEmailAndPassword(auth, email,password)
  return user
  } catch (error) {
    toast.error(error.message);
  }
}

export const login = async (email, password) => {
 try {
  const { user } =await signInWithEmailAndPassword(auth,email,password)
  return user 
 } catch (error) {
  toast.error(error.message);
 }
}

export const logout = async () => {
  try {
   await signOut(auth)
   return true 
  } catch (error) {
   toast.error(error.message);
  }
 }

export const update = async data => {
try {
  await updateProfile(auth.currentUser, data)
  toast.success('Profile Updated')
  return true
  
} catch (error) {
  toast.error(error.message)
}
}

 onAuthStateChanged(auth, (user) => {
  if (user) {
  store.dispatch(loginHandle(user))
  } else {
    store.dispatch(logoutHandle())
  }
});

export const db = getFirestore(app);
export const storage = getStorage(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
