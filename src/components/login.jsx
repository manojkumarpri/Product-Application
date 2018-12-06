import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import Home from './home.jsx';

import {browserHistory,withRouter} from "react-router-dom"

class Login extends Component {
   constructor(props){
       super(props);
       this.state={
		  userdata1:{},
		  userdata2:[],
	   }
	   this.login=this.login.bind(this);
       
   }
   componentDidMount(){
	axios.get('http://node-api-011.herokuapp.com/users').then(
		response=>{
			console.log("successfully get", response);
			this.setState({userdata2:response.data})
		}
	).catch(error=>{
		console.log(error)
	})
   }
   login(){
	
	var login=false;
	this.state.userdata2.map(a =>{
		if((a.name===this.state.userdata1.name) && (a.password===this.state.userdata1.password)){
			alert("successfully logged in"+this.state.userdata1.name);
			 localStorage.setItem('user',JSON.stringify(a));
             this.props.history.push("/");
            login=true;
		}
		
	})
	if(login===false){
		alert("invalid username or password");
	}
    
   }
   render(){
       return(
		<div id="manoj">
        <div className="card card-container" >
           
            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
            <p id="profile-name" className="profile-name-card"></p>
            
                <span id="reauth-email" className="reauth-email"></span>
                <input type="text" id="inputEmail" className="form-control" placeholder="username " required autofocus onChange={event => this.setState({userdata1:Object.assign(this.state.userdata1,{"name":event.target.value})})}/>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required  onChange={event => this.setState({userdata1:Object.assign(this.state.userdata1,{"password":event.target.value})})}/>
                <div id="remember" className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" / > Remember me 
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={() => this.login()}>Sign in</button>
                       <a  className="forgot-password">
                Forgot the password?
            </a>
        </div>
    </div>
       )
   }

}
export default Login;