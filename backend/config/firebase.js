
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../src/config/firebaseConfig'
import {getAuth, GoogleAuthProvider } from 'firebase/auth'

export const firebase = initializeApp(firebaseConfig); 

export const auth = getAuth()

export const Providers = {google: new GoogleAuthProvider() } 