import {FILL_TEXT, GET_INFO} from '../actions/actionType'

const initialState = {
    data:[]
}

export default function (state=initialState,action){
    const {type,payload} = action
    
    switch (type) {
        case GET_INFO:
            return{...state,
                data:payload}
        
        case FILL_TEXT:
            return{...state,
            data:payload}
    
        default:
            return{
                ...state,
                data:"Select Options from DropDown"
            }
    }
}