import SplitterLayout from 'react-splitter-layout';
import React, { Component } from 'react';
import Profilelogo from "../components/images/pic.png";
import SplitPane from 'react-split-pane';
class UserDashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userdata:{
              uid:"",
          },
        }

    }
    logout(){
         
        localStorage.setItem('user',JSON.stringify(this.state.userdata));
       // localStorage.clear();

     }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 bg-alert">
                        <p>mano</p>
                        {/* <SplitterLayout>
   
            <div ><button style={{backgroundColor:"success"}} className="float-right">Editprofile</button>
            <img src={Profilelogo}></img><SplitPane split="horizontal">
            <div style={{alignItems:"bottom"}}>hello mano</div>
            </SplitPane> </div>
              <div>oii</div>
              
                 
          </SplitterLayout> */}

                        <button style={{ backgroundColor: "success" }} className="float-right">Editprofile</button>
                        <img src={Profilelogo}></img>
                    </div>
                    <div className="col-lg-8 col-md-8 bg-success">
                    <div className="float-right">
                                <button type="button" className="btn btn-secondary"  onClick={() => this.logout()}>Logout</button>
                                </div>
                        hoy
                    </div>
                </div>
                <p width="100%" className="bg-danger"> hello</p>
            </div>
        );
    }
}
export default UserDashBoard;
