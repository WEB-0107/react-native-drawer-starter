import {COOKIE_GET_ERR, COOKIE_GET_REQ, COOKIE_GET_SUC} from "../constants";
import {getCookies} from "../../service/CookieService";

export const getFeedAction = () => {
    return (dispatch, getState) => {
        dispatch({type: COOKIE_GET_REQ});
        getCookies().then((res) => {
            dispatch({type: COOKIE_GET_SUC, data: res});
        }).catch(error => {
            dispatch({type: COOKIE_GET_ERR, error: error});
        })
    }
}
