import React, { Fragment ,useEffect} from 'react'
import Information from './Information'
import {getInfo} from '../actions/getInformation'
import {connect} from 'react-redux'
const Dropdown = ({data,getInfo}) => {
        var status
        const onChange = (e) => {
        
        const p = document.createElement('p')
        status=e.target.value
        
        getInfo(e.target.value)
    }
    return(<Fragment>
        <form className='form'>
        <div className='form-group' id='dive'>
        <select className="Dropdown" name='status' value={status} onChange={e => onChange(e)}>
        <option value='0'>Select Language</option>
        <option value='Java'>Java</option>
        <option value='Python'>Python</option>
        <option value='C'>C++</option>
        <option value='JavaScript'>JavaScript</option>
        <option value='Swift'>Swift</option>
        </select>
        <p id='text'></p>
    </div>  
      </form>
      <Information data={data}/>
    </Fragment>
    )}

    const mapStateToProps = (state) => ({
        data:state.getInfo.data
    })


// Connecting State with following component

export default connect(mapStateToProps,{getInfo})(Dropdown)