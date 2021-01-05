import React from 'react'
import axios from 'axios'
import { LOAD_DATA} from './actionType'




export  const getReq = () =>async dispatch =>{
    console.log("Inside getReq")
const url='http://jsonplaceholder.typicode.com/todos'
const res = await axios.get(url)

dispatch({
    type:LOAD_DATA,
    payload:res.data
})

}
