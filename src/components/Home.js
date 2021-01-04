import React from 'react'
import Navbar from './Navbar'
import Dropdown from './Dropdown'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

const Home = ({history,isAuthenticated}) => {
    
    if(!isAuthenticated){
        history.push('/')
    }
    
    return (
    <div>
    
    <Dropdown/>
    </div>)
}

const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps)(withRouter(Home) ) 