import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/firebase-config'
import { removeLoading, setLoading } from "./ui"
import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
   return ( dispatch ) => {
      dispatch(setLoading());
      firebase.auth().signInWithEmailAndPassword(email,password)
         .then( ({user}) => {
            dispatch(login(user.uid, user.displayName));
            dispatch(removeLoading());
         })
         .catch (e => {
            console.log(e)
            dispatch(removeLoading());
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: e.message,
             })
         })
   }
}

export const startRegisterWithEmailPasswordName = (email,password, name) =>{
   return (dispatch) =>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
         .then( async ({user}) =>{
            await user.updateProfile({
               displayName : name,
            });
            console.log(user);
            dispatch(login(user.uid,user.displayName))
         }).catch (e => {
            Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: e.message,
             })
         })
   }
}

export const startGoogleLogin = () =>{
   return (dispatch) =>{
      firebase.auth().signInWithPopup(googleAuthProvider)
         .then(({user}) =>{
            dispatch(login(user.uid,user.displayName))
         })
   }
}

export const login = (uid, displayName) =>{
   return{
      type : types.login,
      payload : {
         uid,
         displayName
      }
   }
}

export const startLogout = ()=>{
   return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch(logout());
   }
}

export const logout = () =>{
   return {
      type:types.logout,
   };
}