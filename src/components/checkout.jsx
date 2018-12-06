import React, { Component } from 'react';
import axios from 'axios';
import Cart from './cart';
import Signup from './signup';
import Login from './login';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import StarRatingComponent from 'react-star-rating-component';
import Modal from 'react-bootstrap4-modal';


class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedout: false,
            username: '',
            rating:1,
            show: false,
            show1: false,
            newaddress: false,
            userdata: {},
            delivery_address: "",
            listData:[],
            userdata:{
                uid:"",
            },
            listData2: {
                "cust_id":0,
                "product_name":"",
                "product_image": "",
                "product_category":"",		
                "shop_category":"",
                "rating":0,		
                "size":0,
                "price":0,
                "quantity":0,		
                "brand_name":0,
                "discount":0,
                "tax":0,
                "shop_name":"",
                "product_id":0,
                "review":"",
                "total":0,
                "order_status":"proceed",
                "provider_mobile_number":0,
                "customer_mobile_number":0,
                "delivery_address":"",
                "provider_id":0,
                "payment_option":"",
                "customer_email":"",
                "invoice_number":"",
                "delivered_on":"45 minutes"
            },
            modal:false,
            listData1: {},
            combine:[],
            payment:"nothing",
            total:"",
            invoice_number:"",
            delivered_on:"45 mins",
        }
        this.state.userdata = JSON.parse(localStorage.getItem("user"));
        this.state.listData = JSON.parse(localStorage.getItem("final"));
        this.state.listData1 = JSON.parse(localStorage.getItem("provider"));
        console.log(this.state.userdata);
        console.log(this.state.listData1)
        console.log(this.state.listData)
        this.addrtoggle = this.addrtoggle.bind(this);
        this.changeaddr = this.changeaddr.bind(this);
        if((this.state.listData)&&(this.state.userdata)!=undefined){
        this.state.total=this.state.listData[0].total;
        this.state.delivery_address=this.state.userdata.address;
        console.log(this.state.total)
        }
    }
    componentDidMount() {
       

        

    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
        console.log(this.state.rating)
        console.log(nextValue)
      }
     
    login() {
        this.props.history.push('/login');
        this.setState({ show: true });
        this.setState({ show1: false });
    }
    signup() {
        this.props.history.push('/signup');
        this.setState({ show1: true });
        this.setState({ show: false });
    }
    addrtoggle() {
        this.setState({ newaddress: true });
    }
    changeaddr() {
        // var address = this.state.delivery_address;
        // axios.put("http://node-api-011.herokuapp.com/users/" + this.state.userdata.uid, address).then(response => {
        //     console.log("sucessfully updated" + response);
        // }).catch(error => console.log(error)
        // )
        alert("Address changed");
    }
    confirmorder(){
       this.setState({modal:true}) ;
       
    }
async confirmorder1(){
  
        this.state.listData2.cust_id=this.state.listData[0].cust_id;
        this.state.listData2.product_name=this.state.listData[0].product_name;
        this.state.listData2.product_image=this.state.listData[0].product_image;
        this.state.listData2.product_category=this.state.listData[0].product_category;
        this.state.listData2.rating=this.state.rating;
        this.state.listData2.shop_category=this.state.listData[0].shop_category;
        this.state.listData2.size=this.state.listData[0].size;
        this.state.listData2.price=this.state.listData[0].price;
        this.state.listData2.quantity=this.state.listData[0].quantity;
        this.state.listData2.brand_name=this.state.listData[0].brand_name;
        this.state.listData2.discount=this.state.listData[0].discount;
        this.state.listData2.tax=this.state.listData[0].tax;
        this.state.listData2.shop_name=this.state.listData[0].shop_name;
        this.state.listData2.product_id=this.state.listData[0].product_id;
        this.state.listData2.review=this.state.listData[0].review;
        this.state.listData2.total=this.state.listData[0].total;
        this.state.listData2.provider_mobile_number=this.state.listData[0].provider_mobile_number;
        this.state.listData2.customer_mobile_number=this.state.listData[0].customer_mobile_number;
        this.state.listData2.delivery_address=this.state.delivery_address;
        this.state.listData2.provider_id=this.state.listData[0].provider_id;
        this.state.listData2.payment_option=this.state.payment;
        this.state.listData2.customer_email=this.state.listData[0].customer_email;
        this.state.listData2.invoice_number=Date.now();
                

        this.state.invoice_number=Date.now();
        console.log(this.state.invoice_number);
        var product = Object.assign(this.state.combine, { payment_option: this.state.payment,invoice_number:this.state.invoice_number,delivered_on:this.state.delivered_on });
        var product1=Object.assign(this.state.listData,this.state.combine)
        console.log(this.product1);
        console.log(this.state.listData[0].product_id)
        console.log(this.state.listData1)
        console.log(this.state.listData2)
        axios.put("http://localhost:3001/provider/"+this.state.listData1.provider_id, this.state.listData1).then(response => {
            console.log(response);
          }).catch(error => console.log(error)
          )
          axios.post("http://localhost:3001/orders", this.state.listData2).then(response => {
          console.log(response);
        }).catch(error => console.log(error)
        );
      
        // send message bymsg91
       // axios.get('http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles='+this.state.listData2.customer_mobile_number+'&authkey=243177AyunGcNGL5bc6ed47&message='+this.state.userdata.name+' has purchased. Total amount is '+this.state.listData2.total,{ headers: { 'crossDomain': true, }});
    }
    logout(){
         
        localStorage.setItem('user',JSON.stringify(null));
       // localStorage.clear();

     }
     close(){
         this.setState({modal:false});
         this.confirmorder1();
     }

    render() {
        const { rating } = this.state;
       // console.log(this.state.listData);
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
            console.log("The payment was succeeded!", payment);
            this.confirmorder();
            // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: 'AZOydPphjOEGhm-gS8iPiBdESForP9ExEeUsUXQkOg4Y_TM97VH9ZKUrpUbkt_ePXbmCEm1wVC1-2vHm',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        

        return (
            <div>
               {this.state.userdata!=undefined && this.state.listData!=undefined ?(
                <div id="manoj">
                
                    <div className="float-right">
                                <button type="button" style={{ backgroundColor: "#9092a8" }} className="btn btn-secondary"  onClick={() => this.logout()}>Logout</button>
                                </div>
                        
                    <section className="container py-4" >
                   
                        <div className="row">
                       
                            <div className="col-sm-6 col-md-12 col-lg-10 col-xs-12">
                                <h2>CheckOut Page</h2>
                                
                                <ul id="tabsJustified" className="nav nav-tabs">
                                    <li className="nav-item"><a href="" data-target="#myprof" data-toggle="tab" className="nav-link small text-uppercase active">My Profile</a></li>
                                    <li className="nav-item"><a href="" data-target="#orders" data-toggle="tab" className="nav-link small text-uppercase ">Orders</a></li>
                                    <li className="nav-item"><a href="" data-target="#fav" data-toggle="tab" className="nav-link small text-uppercase ">Address</a></li>
                                    <li className="nav-item"><a href="" data-target="#addr" data-toggle="tab" className="nav-link small text-uppercase ">Payment</a></li>
                                </ul>
                                <br />

                                <div id="tabsJustifiedContent" className="tab-content">
                                    <div id="myprof" className="tab-pane fade active show">
                                        {this.state.userdata==undefined ? (
                                            <div className="list-group">
                                                <div className="btn-group" role="group" aria-label="Basic example" >
                                                    <button type="button" className="btn btn-secondary" onClick={() => this.login()}>Login</button>
                                                    <button type="button" className="btn btn-secondary" onClick={() => this.signup()}>Sign up</button>

                                                </div>
                                                </div>
                                                ) : (
                                                    <div>
                                                    

                                                        <p><strong>welcome,</strong>{this.state.userdata.name}</p>


                                                
                                                </div>
                                                )}
                                         

                                    </div>
                                    
                                            <div id="orders" className="tab-pane fade ">
                                                <div className="row pb-2">
                                                    <div className="col-md-7">

                                                        <p> <strong> Orders</strong></p>
                                                        {this.state.listData.map(a =>

                                                            <p>{a.price}</p>


                                                        )}


                                                    </div>

                                                </div>
                                            </div>


                                            <div id="fav" className="tab-pane fade">
                                                <div className="list-group">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label><b>Your address</b></label>
                                                            <p>{this.state.delivery_address}</p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <button onClick={() => this.addrtoggle()} className="btn btn-outline-primary">Add new address</button><br /><br />
                                                            {this.state.newaddress ? (
                                                                <div>
                                                                    <textarea placeholder="write something..." required onChange={event => this.setState({ delivery_address: event.target.value })} />
                                                                    <input type="submit" onClick={() => this.changeaddr()} className="btn btn-outline-secondary" />
                                                                </div>
                                                            ) : []}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div id="addr" className="tab-pane fade">
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" onChange={() =>this.setState({payment:"cod"})}/>
                                                    <label className="custom-control-label" htmlFor="defaultGroupExample1">COD</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" className="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" onChange={() =>this.setState({payment:"online"})}/>
                                                    <label className="custom-control-label" htmlFor="defaultGroupExample2">Online</label>
                                                </div>  
                                                 {this.state.payment==="cod"?(
                                                     <button className="btn btn-success" onClick={()=>this.confirmorder()}>buynow</button>
                                                 ):[]}
                                                 {this.state.payment === "online"?(
                                                    <PaypalExpressBtn env={env} client={client} currency={currency} total={this.state.total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                                                 ):[]}
                                                  
                                                   
                                                
                                            </div>
                                </div>
        
                            </div>

                                </div>
                    </section>
                        </div>
               ):(
                   alert("You have not selected any items and provide  u  R valid data")
               )}


                <Modal visible={this.state.modal} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">give u r ratings!</h5>
        </div>
        <div className="modal-body">
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={() => this.close()}>
            Close
          </button>
        
        </div>
      </Modal>
            </div>
                    );
                }
            }
export default CheckOut;