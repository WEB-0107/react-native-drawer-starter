import { combineReducers } from 'redux'
import {CookieReducer} from "./CookieReducer";
import {MexicanReducer} from "./MexicanReducer";

const rootReducer = combineReducers({
    cookieData: CookieReducer,
    mexicanFood: MexicanReducer,
})

export default rootReducer;
