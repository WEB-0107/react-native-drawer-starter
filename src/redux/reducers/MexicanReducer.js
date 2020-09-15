import {
    MEXICAN_GET_ERR,
    MEXICAN_GET_REQ,
    MEXICAN_GET_SUC
} from "../constants";

const initialState = {
    loading: false,
    mexicanFood: [],
    error: null
}

export const MexicanReducer = (state = initialState, action) => {
    switch (action.type) {
        case MEXICAN_GET_REQ:
            return {
                ...state,
                loading: true
            }
        case MEXICAN_GET_SUC:
            return {
                ...state,
                loading: false,
                mexicanFood: action.data,
            }
        case MEXICAN_GET_ERR:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default:
            return state;
    }
}
