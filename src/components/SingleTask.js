import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'

const SingleTask = ({task}) => {
    
useEffect(()=> {
    
},[])

    return(<Fragment>
    {task  ? <h1>Click Add task </h1> :
         
            <tr>
        <td>{task.id}</td>
        <td>{task.title}</td>
        <td>{task.completed}</td>
        <td><button>Delete</button></td>
      </tr>
       
        
        
    }
    </Fragment>
        
         
    )
}
const mapStateToProps = state => ({
    // task:state.getReq.taskToDo
})

export default connect(mapStateToProps)(SingleTask)