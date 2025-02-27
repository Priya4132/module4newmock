import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { thunk } from "redux-thunk";
import { notesReducer } from "./reducers/notesReducer";


const rootReducer=combineReducers({
    auth:authReducer,
    notes:notesReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunk));

