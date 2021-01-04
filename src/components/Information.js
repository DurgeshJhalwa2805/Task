import React from 'react';
import {connect} from 'react-redux';
const Information = ({data}) =>
 {
   /* const div= document.getElementById("dive");
    const p = document.getElementById("text");*/
    // select 
    
    return(   
    <div>
    {data}
     
    </div> 
    )
}

const mapStateToProps = (state) => ({
    data:state.getInfo.data
})

export default connect(mapStateToProps)(Information)