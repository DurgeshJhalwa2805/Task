import {createStore , applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import getInfo from './reducers/information'
import getReq from './reducers/Request'
import auth from './reducers/authentication'

const rootReducer = combineReducers({
    getInfo,getReq,auth
})
const initialState = {
}

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;