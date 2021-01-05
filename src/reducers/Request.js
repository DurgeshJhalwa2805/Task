import {LOAD_DATA} from '../actions/actionType'

const initialState = {
    task:[]
    
}

export default function (state=initialState,action){
    
    const {type,payload} = action
    
    switch (type) {
        case LOAD_DATA:
            return{...state,
                task:payload}
    
        default:
            return{
                ...state
            }
    }
}