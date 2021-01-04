import React, { Fragment, useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { ADD_TASK } from '../actions/actionType'
import {getReq,addTask} from '../actions/getRequest'

import SingleTask from './SingleTask'



const Task = ({task,taskToDo,getReq,singleTask,changeCount,isAuthenticated,history,addTask}) => {

    useEffect(() => {
        getReq();          
    }, [])

    const [tasktodo,addtask]  = useState([])
    // if(!isAuthenticated){
    //     history.push('/')
    // }

    var count = 0;
const onClick =(e) => {
    
    console.log(count)
     task.map((item,index) => {
        if(index <= count){
            
            return addtask(taskToDo.push(item))
       }
    })
}


return(<Fragment>
    
    
<table>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Status</th>
    <th>Delete</th>
  </tr>
 {<SingleTask task={taskToDo}/>}
     
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
export default connect(mapStateToProps,{getReq,addTask})(withRouter(Task) )