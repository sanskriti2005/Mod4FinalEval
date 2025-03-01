import { auth } from "@/firebase/firebaseConfig";
import axios from "axios";
import { createUserWithEmailAndPassword } from "firebase/auth";



export const REGISTER_USER = "REGISTER_USER";


export const registerUser = (userCreds) => async (dispatch) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, userCreds.email, userCreds.password)
        const resToUsers = await axios.post("https://mod4finaleval-default-rtdb.firebaseio.com/users.json", {uid: res.user.uid, books:[]})
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