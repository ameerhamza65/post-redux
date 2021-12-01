import {
    FETCH_POST_FAIL, FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS, FETCH_SINGLE_POST_FAIL,
    FETCH_SINGLE_POST_REQUEST, FETCH_SINGLE_POST_SUCCESS
} from "../constants/postConstant"

export const posts = () => async (dispatch) => {
    dispatch({ type: FETCH_POST_REQUEST })
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        dispatch({ type: FETCH_POST_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: FETCH_POST_FAIL, payload: err })
    }
}
export const singlePosts = (id) => async (dispatch) => {
    dispatch({ type: FETCH_SINGLE_POST_REQUEST })
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json();
        dispatch({ type: FETCH_SINGLE_POST_SUCCESS, payload: data })
    } catch (err) {
        dispatch({ type: FETCH_SINGLE_POST_FAIL, payload: err })
    }
}