import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./reducers/authReducers";
import { bookReducer } from "./reducers/bookReducers";

const rootReducer = combineReducers({
    auth: authReducer,
    books: bookReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))