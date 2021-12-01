import { FETCH_SINGLE_POST_FAIL, FETCH_SINGLE_POST_REQUEST, FETCH_SINGLE_POST_SUCCESS } from "../constants/postConstant";

export const singlePostReducer=(state={loading:true},action)=>{
    switch(action.type){
        case FETCH_SINGLE_POST_REQUEST:
            return{loading:true}
        case FETCH_SINGLE_POST_SUCCESS:
            return{loading:false,post:action.payload}
        case FETCH_SINGLE_POST_FAIL:
            return{loading:false,error:action.payload}
        default:
            return state;
    }
}