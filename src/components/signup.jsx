import React, { Component } from 'react';
import axios from 'axios';
import './signup.css';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            userdata:{
                "name": "",
                "password": "",
                
                "email": "",
                "phno":"" ,
                "address":"" ,
                "securityquestion": "",
                "securityanswer": "",


            },
            confirmpassword:"",
        }
        this.signup=this.signup.bind(this);
    }

   signup(){
    console.log( this.state.userdata);
       if(this.state.confirmpassword === this.state.userdata.password){
        axios.post('http://node-api-011.herokuapp.com/users',this.state.userdata).then(
            response=>{
                console.log("successfully sent", this.state.userdata,response);
            }
        ).catch(error=>{
            console.log(error)
        })
       }
       else{
           alert("password didnt match");
       }
   }

    render(){
        return(

<div id="manoj">
<div className="row main" >
    <div className="main-login main-center">
    <h5>Sign up once </h5>
        
            
            <div className="form-group">
                <label for="name" className="cols-sm-2 control-label">Your Name</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="name" id="name"  placeholder="Enter your Name" onChange={event => this.setState({userdata:Object.assign(this.state.userdata,{"name":event.target.value})})} />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label for="email" className="cols-sm-2 control-label">Your Email</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email" onChange={event => this.setState({userdata:Object.assign(this.state.userdata,{"email":event.target.value})})}/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label for="address" className="cols-sm-2 control-label">address</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                        <input type="text" className="form-control" name="address" id="address"  placeholder="Enter your address"onChange={event => this.setState({userdata:Object.assign(this.state.userdata,{"address":event.target.value})})}/>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label for="phno" className="cols-sm-2 control-label">phonenumber</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
                        <input type="number" className="form-control" name="phno" id="phno"  placeholder="Enter your phone number"onChange={event => this.setState({userdata:Object.assign(this.state.userdata,{"phno":event.target.value})})}/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label for="password" className="cols-sm-2 control-label">Password</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                        <input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"onChange={event => this.setState({userdata:Object.assign(this.state.userdata,{"password":event.target.value})})}/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label for="confirm" className="cols-sm-2 control-label">Confirm Password</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                        <input type="password" className="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"onChange={event => this.setState({confirmpassword:event.target.value})}/>
                    </div>
                </div>
            </div>

            <div className="form-group ">
                <button type="submit" onClick={() => this.signup()}>Signup</button>
            </div>
            
       
    </div>
</div>
</div>
        )
    }
}
export default Signup;