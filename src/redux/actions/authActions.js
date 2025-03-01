import { auth } from "@/firebase/firebaseConfig";
import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export const REGISTER_USER = "REGISTER_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER = "SET_USER"


export const registerUser = (userCreds) => async (dispatch) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, userCreds.email, userCreds.password)
        dispatch({type: REGISTER_USER, payload: res.user})
        alert('User registered!')
    } catch (error) {
        if(error.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).'){
            alert('Please give a password that consists of 6 characters')
        } else if (error.message == 'Firebase: Error (auth/email-already-in-use).'){
            alert('User already registered, Please try logging in')
        }
        else{
            console.log(error)
        }
    }
}

export const loginUser = (userCreds) => async (dispatch) => {
    try {
        const res = await signInWithEmailAndPassword(auth, userCreds.email, userCreds.password)
        dispatch({type: LOGIN_USER, payload: res.user})
        alert('User logged in!')
    } catch (error) {
        console.log(error)
    }
}