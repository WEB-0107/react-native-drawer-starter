import {
    MEXICAN_GET_ERR,
    MEXICAN_GET_REQ,
    MEXICAN_GET_SUC
} from "../constants";
import {getMexicanFood} from "../../service/MexicanService";

export const getMexicanFoodAction = () => {
    return (dispatch, getState) => {
        dispatch({type: MEXICAN_GET_REQ});
        getMexicanFood().then((res) => {
            console.log('mexican action res ==========================>', res)
            dispatch({type: MEXICAN_GET_SUC, data: res});
        }).catch(error => {
            dispatch({type: MEXICAN_GET_ERR, error: error});
        })
    }
}
