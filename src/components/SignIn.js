import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {Login} from '../actions/authentication';
import {changePassword} from '../actions/authentication'
import {logout} from '../actions/authentication'



function SignIn({Login,isAuthenticated,username,password,changePassword,logout}) {

    

    const onSubmit = e => {
        
        const username = e.target[0].value
        const password = e.target[1].value
        Login(username,password);
        
    }
    
    

    return (
        <Fragment>
            {
                isAuthenticated ? <div className="user_form">
                    <h2>Username : {username}</h2>
                    <form onSubmit={e =>{
                        e.preventDefault();
                        changePassword(e.target[0].value);
                    }} >
                    <input className="password_input" type='password' placeholder={password} onChange={e => {
                        e.target.name = e.target.value
                    }} />   
                    <button className="change_button" type='submit'>Change Password</button>
                    </form>

                    <button type='onClick' className="logout" onClick={e => logout()}> logout </button>

                </div>:
        <div className="login">
        <Link to="/">
        <img className="login__logo" src="https://www.logolynx.com/images/logolynx/62/625af92dc3f818b8dab5d3d96ecd6ae8.jpeg" />
         </Link> 
         <div className="login__container">
         <h1>Sign-In</h1>

         <form onSubmit={e => {
             e.preventDefault();
          
             onSubmit(e)}}>
        
        
        
         <h5> Email</h5>
         <input type="text" name='username' />
         <h5>Password</h5>
         <input type="password" name='password'  />
         <button className="login__signInButton" type='submit' >Sign In</button>
         </form>
         </div>  
        </div>

            }
            
        </Fragment>
    )
}
const mapStateToProps = state => ({ 
    isAuthenticated:state.auth.isAuthenticated,
    username:state.auth.username,
    password:state.auth.password
})
export default connect(mapStateToProps,{Login,changePassword,logout})(SignIn) 
