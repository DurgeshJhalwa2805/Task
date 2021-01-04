import {LOGIN_USER,CHANGE_PASSWORD,LOGGEDOUT} from '../actions/actionType'

const initialState = {
    auth:{
        token:"",
        isAuthenticated:false,
        username:"",
        password:''
    }
}

export default function (state=initialState,action){
    const token = Math.random() * 100   
    const  {type,payload} = action
    switch (type) {
      
        case LOGIN_USER:
            return{
                
                token:token,
                isAuthenticated:true,
                username:payload.username,
                password:payload.password

            }

        case CHANGE_PASSWORD:
            return{
                ...state,
                password:payload
            }
        case LOGGEDOUT:
            return{
                token:"",
                isAuthenticated:false,
                username:"",
                password:''

            }

    
        default:
            return{
                ...state
            }
    }

}