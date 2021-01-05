import React from 'react';
import {connect} from 'react-redux';
const Information = ({data}) =>
 {
    return(   
    <div className="information">
    {data}
    </div> 
    )
}

const mapStateToProps = (state) => ({
    data:state.getInfo.data
})

export default connect(mapStateToProps)(Information)