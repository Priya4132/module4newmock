import app from "@/firebaseConfig";
import axios from "axios";
import { getAuth,GoogleAuthProvider ,signInWithPopup, signOut} from "firebase/auth";
export const SIGIN_SUCCESS="SIGIN_SUCCESS"
export const LOGOUT_SUCCESS="LOGOUT_SUCCESS";

export const FETCH_NOTES="FETCH_NOTES";
export const ADD_NOTES="ADD_NOTES"
export const DELETE_NOTES="DELETE_NOTES"

const firebase_URL=`https://my-first-app-48c24-default-rtdb.firebaseio.com/notes.json`

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

export const googleSigin=()=>async(dispatch)=>{
try{
const userCredentials =await signInWithPopup(auth,googleProvider);
const user=userCredentials.user;
console.log(user)
dispatch({type:SIGIN_SUCCESS,payload:user});
}
catch(error){
console.log(error)
}
}

//logi=ut function

export const logout=()=>async(dispatch)=>{
    try{
        signOut(auth);
        dispatch({type:LOGOUT_SUCCESS})
    }catch(error){
        console.log(error)
    }
}

export const fetchNotes=()=>async(dispatch)=>{
    try{
const response=await axios.get(firebase_URL)
console.log(response.data.name, "notes id")
dispatch({type:FETCH_NOTES,payload:response.data})
    }
    catch(error){
        console.log(error)
    }

}

//add notes
export const addNotes=(newData)=>async(dispatch)=>{
    try{
const res=axios.post(firebase_URL,{...newData});
dispatch({type:ADD_NOTES,payload: {
    id:res.data.name,...newData
}})
console.log(res.data.name, "payload id")
    }catch(error){
        console.log(error)
    }
}

//delete notes
export const removeNotes=(id)=>async(dispatch)=>{
    try{
await axios.delete(`https://my-first-app-48c24-default-rtdb.firebaseio.com/notes/${id}.json`)
dispatch({type:DELETE_NOTES, payload:{id}})    
}catch(error){
        console.log(error.message)
    }
    }