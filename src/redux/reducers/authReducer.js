import { LOGOUT_SUCCESS, SIGIN_SUCCESS } from "../actions/actions";

const initialState = {
    user: null,
    loading: false,
    error: null,
   };

export const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SIGIN_SUCCESS:
            localStorage.setItem("user", JSON.stringify(action.payload));
           return {...state,user:action.payload};
           case LOGOUT_SUCCESS:
            localStorage.removeItem("user")
            return{ ...state,user:null}
        default :
        return state;
        
    }
}