import {combineReducers, configureStore} from "@reduxjs/toolkit"
import authSlice from "./auth-slice";

const reducers = {
    auth: authSlice.reducer
}
const reducer = combineReducers(reducers);
const store = configureStore({
    reducer
})
export default store;