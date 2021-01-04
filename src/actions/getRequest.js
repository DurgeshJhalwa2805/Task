import React from 'react'
import axios from 'axios'
import {COUNT, LOAD_DATA, SINGLE_TASK} from './actionType'




export  const getReq = () =>async dispatch =>{
    console.log("Inside getReq")
const url='http://jsonplaceholder.typicode.com/todos'
const res = await axios.get(url)

dispatch({
    type:LOAD_DATA,
    payload:res.data
})

}

export const addTask = (addtask) => dispatch => {
    console.log(addtask)
    dispatch({
        type:SINGLE_TASK,
        payload:addtask
    })

}

var count = 0;
export const changeCount = () => dispatch => {
    count++
    dispatch({
        type:COUNT,
        payload:count
    })
}