import React, { Fragment, useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {getReq} from '../actions/getRequest'

const Task = ({task,getReq,isAuthenticated,history}) => {

    useEffect(() => {
        getReq();          
    }, [])

    const [count,setCount] = useState(0)
    const [tasktodo,editTask]  = useState([])
    if(!isAuthenticated){
        history.push('/')
    }

    
const onClick =(e) => {
    
    console.log(count)
     task.map((item,index) => {
        if(index == count){
            
        editTask(arr => [...arr,item])
            setCount(count+1)
            return
       }
    })
}
const Delete = (e,index) =>{
editTask(arr => [...arr.slice(0,index),...arr.slice(index+1)])
    return
}

return(<Fragment>
    
    
<table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Status</th>
    <th>Delete</th>
  </tr>
 {tasktodo.map((task,index) =>  <tr>
        <td>{task.id}</td>
        <td>{task.title}</td>
        <td>{(task.completed).toString()}</td>
        <td><button  className="deletebtn" type='onClick' onClick={e => Delete(e,index)}>Delete</button></td>
      </tr>)}
     
 </table>
    <button className='task'  onClick={ e => onClick(e)
        
        }>Add task</button>
    </Fragment>)
}

const mapStateToProps = (state) => ({
    task:state.getReq.task,
    taskToDo:state.getReq.taskToDo,
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{getReq})(withRouter(Task) )