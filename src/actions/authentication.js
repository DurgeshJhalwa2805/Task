import {LOGIN_USER,CHANGE_PASSWORD,LOGGEDOUT} from './actionType'


export const Login = (username,password) => dispatch => {

    dispatch({
        type:LOGIN_USER,
        payload:{
            username,
            password
        }
    })

}

export const changePassword = (newPassword) => dispatch => {

    dispatch({
        type:CHANGE_PASSWORD,
        payload:newPassword
    })

}
export const logout=()=>dispatch=>{
    dispatch({
        type:LOGGEDOUT
    })
}