import axios from "axios";
import baseUrl from "./utils/BaseUrl";

export const loginCall = async (userDetails, dispatch) => {
    dispatch({type: "LOGIN_START"});
    try{
        const res = await axios.post(baseUrl + "/api/login", userDetails);
        dispatch({type: "LOGIN_SUCCESS", payload: res.data})
    }catch(err){
        dispatch({type: "LOGIN_FAULIRE", payload: err})
    }
}