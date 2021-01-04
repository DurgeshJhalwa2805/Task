import {COUNT,LOAD_DATA,ADD_TASK, SINGLE_TASK} from '../actions/actionType'

const initialState = {
    task:[],
    taskToDo :[],
    count :[]
}

export default function (state=initialState,action){
    
    const {type,payload} = action
    
    switch (type) {
        case LOAD_DATA:
            return{...state,
                task:payload}

        case SINGLE_TASK:
            return{
                ...state,
                taskToDo:payload}

        case COUNT:
            return{
                ...state,
                count:payload
            }
    
        default:
            return{
                ...state
            }
    }
}