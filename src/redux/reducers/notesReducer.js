import { useEffect } from "react";
import { ADD_NOTES, DELETE_NOTES, FETCH_NOTES, fetchNotes } from "../actions/actions";


const initialState = {
    notes: [],
    loading: false,
    error: null,
   };
 

   export const notesReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_NOTES:
            return {
                ...state,notes:action.payload
            }
            case ADD_NOTES:
                return  {
                    ...state,notes:action.payload
                }
                case DELETE_NOTES:
                   // const updatedNotes=state.notes.filter((note)=>note.id!=action.payload.id)
            return {
                ...state,notes:action.payload
            }
                    default:
                return state
    }
   }