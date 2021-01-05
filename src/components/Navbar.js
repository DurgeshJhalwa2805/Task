import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';




const  Navbar = ({isAuthenticated}) => {
    const authLink = (
        <ul>
        <li><img className="login__logoo" src="https://www.logolynx.com/images/logolynx/62/625af92dc3f818b8dab5d3d96ecd6ae8.jpeg" />
        </li>
        <li className="list">
        <Link to="/home" > Home </Link>
        </li>
        <li className="list">
        <Link to="/task">   
         Task
         </Link>
        </li>
        <li className="list">
        <Link to="/">   
         User
        </Link>
        </li>
        </ul>
    
    )

    const guestLink=(
        <ul>
        
        <li>
        <Link to="/signin" > SignIn </Link>
        </li>
        </ul>
    )
    return (
        <div className='navbar'>
                    {isAuthenticated ?  authLink : guestLink}
        </div>
        
    )}
const mapStateToProps = state => ({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps)(Navbar) 
