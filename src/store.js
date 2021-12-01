import {createStore,compose,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { postReducer } from './reducer/postReducer';
import { singlePostReducer } from './reducer/singlrPost';

const initialState={}
const reducer=combineReducers({
    postList:postReducer,
    signlePostList:singlePostReducer
})
const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;