import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';




const  Navbar = ({isAuthenticated}) => {
    const authLink = (
        <ul>
        
        <li>
        <Link to="/home" > Home </Link>
        </li>
        <li>
        <Link to="/task">   
         Task
         </Link>
        </li>
        <li>
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
