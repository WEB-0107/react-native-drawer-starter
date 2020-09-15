import {COOKIE_GET_ERR, COOKIE_GET_REQ, COOKIE_GET_SUC} from "../constants";

const initialState = {
    loading: false,
    cookies: [],
    error: null
}

export const CookieReducer = (state = initialState, action) => {
    switch (action.type) {
        case COOKIE_GET_REQ:
            return {
                ...state,
                loading: true
            }
        case COOKIE_GET_SUC:
            return {
                ...state,
                loading: false,
                cookies: action.data,
            }
        case COOKIE_GET_ERR:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
}
