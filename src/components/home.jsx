 import React, { Component } from 'react';
import axios from 'axios';
import Data from '../components/data';
import Cart from '../components/cart';
import Order from '../components/order.jsx';
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

import './home.css';

function searchingfor(term){
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase())|| !term;
  }
}
class Home extends React. Component {
  constructor(props) {
    super(props);
    this.state = {
      lat1:0,
      lon1:0,
      articles: [],
      
      listData: [],
      listData1: [],
      combine: new Set(),
      data1: "",
      cust_id: "",
      searchterm:"",
      address:'',
     
      //
      provider: new Set(),
      userdata: [],
      combine1: [],
      combine2: [] = {
        Id1: Number,
        img: String,
        name: String,
        price: Number,

        prodCategory: String,
        shopCategory: String,
        shortDesc: String,
        longDesc: String,
        size: Number,
        rating: Number,
        discount: Number,
        BrandName: String,
        sku: String,
        tax: Number,
        prodId: Number,
        total: Number,
        available: Number,
        shopName: String,



      }
    };

    
    this.join = this.join.bind(this);
   
    this.getmyposition = this.getmyposition.bind(this);
    this.searchHandler=this.searchHandler.bind(this);
    this.distance=this.distance.bind(this);
    var j;
    var key = NaN;
    // var lat1;
    // var lon1;
    this.state.userdata = JSON.parse(localStorage.getItem("user"));

    
    // this.setState({cust_id:this.state.cust_id});
    console.log(this.state.userdata)


  }
  handleChange = address => {
    this.setState({ address });
  };
 
 handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>{ 
        this.setState({lat1:latLng.lat,lon1:latLng.lng});
        console.log('Success', latLng);
        console.log(this.state.lat1,this.state.lon1)
        this.join();
      }).catch(error => console.error('Error', error));

     
      
  };
  
  distance(pid){
    
    var radlat1 = Math.PI * this.state.lat1/180
    var radlat2 = Math.PI * pid.lat/180
    var theta = this.state.lon1-pid.lon
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (true) { dist = dist * 1.609344 }
    // if (unit=="M") { dist = dist * 0.8684 }
    // return dist;
    
    console.log(dist)
    if(dist<25){
      this.setState(({ combine }) => ({
        combine: new Set(combine.add(pid))
      }));
     
    }
    this.setState({combine:this.state.combine})
  }
  getmyposition=async()=>{
    var location = 0;
    var latitude = 0;
    var longitude = 0;
    
    if (window.navigator && window.navigator.geolocation) {
      location = window.navigator.geolocation
    
    if (location) {
     location.getCurrentPosition( (position) =>{
       console.info(position);
     this.setState({lat1:position.coords.latitude});
   this.setState({lon1:position.coords.longitude})
     // this.setState({lat1:position.coords.latitude,lon1:position.coords.longitude}) 
      // latitude = position.coords.latitude;
      //    longitude = position.coords.longitude;
     // return position.coords.latitude;
        //this.setState({lat1:latitude});
       this.join()
        return this.state.lat1,this.state.lon1

         
      })
      // await this.join();
       
      console.log(this.state.lon1)
      
    }

  }
 
 // console.log(this.state.provider)
 
  
   
 

  }
  
  searchHandler(event){
      this.setState({searchterm:event.target.value});
  }
  

    // console.log(pid);
  
  view1(pid) {
    if (this.state.userdata != null) {
      console.log("here add to cart");
      this.state.cust_id = this.state.userdata.uid;
      console.log(this.state.cust_id)
      var product = Object.assign(pid, { cust_id: this.state.cust_id });
      this.state.combine1.push(pid);
      //<Cart combine1={this.props.combine1} ></Cart>

      console.log(this.state.combine1)
      localStorage.setItem("manoj", JSON.stringify(this.state.combine1));
        this.props.history.push('/order');
    }
    else {
      alert("please sign in first")
    }
  }
  
  componentDidMount() {
     this.get();
  //this.getmyposition();

  }
  async    get() {
    await axios.get("http://localhost:3001/provider").then(response => {
      this.setState({ listData1: response.data });
      console.log(this.state.listData1);
      this.join2();
    })



  }
  async join() {
    this.setState({combine:new Set()});
   await  this.state.listData1.map(a=>{
      this.distance(a);
     })
    console.log(this.state.combine);
    let c=[];
    Array.from(this.state.combine).map((a,index)=>{
      c[index]=(Object.assign({},a));
      })
    localStorage.setItem('selected',JSON.stringify(c));
    console.log(JSON.parse(localStorage.getItem("selected")));
  //   this.state.listData.map(ld => {
  //     this.state.combine.map(ld1 => {
  //       this.state.combine[0].price.map((a,index)=>{
  //       if (ld.prodId == ld1.prodId[index]) {
  //          this.state.provider.push(Object.assign({}, ld,  { quantity: 0 }));

  //       }
  //     })
  //   })
 
  // })
    console.log(this.state.listData)
    for(var i=0;i<this.state.listData.length;i++){
      let arr=Array.from(this.state.combine);
      if(arr.length==0){
        this.setState({provider:new Set()});
      }
      for(var j=0;j<arr.length;j++){
        for(var k=0;k<arr[0].prodId.length;k++){
         
          if(this.state.listData[i].prodId===arr[j].prodId[k]){
            // this.state.provider.push(this.state.listData[i]);
            console.log("hey");
            
            this.setState(({ provider }) => ({
                  provider: new Set(provider.add(this.state.listData[i]))
                }));

          }
        }
      }
    }

   
           console.log(this.state.provider);
          // this.setState()
     let b=[];
    console.log(this.state.provider);
    Array.from(this.state.provider).map((a,index)=>{
    b[index]=(Object.assign(a,{quantity:0}));
    })
    console.log(b)
    if(Array.from(this.state.provider).length==0){
      this.setState({articles:[]});
    }
    console.log(this.state.provider);
    
    this.setState({articles:b})
    console.log(this.state.articles);
  


    //this 
  }
  async join2() {

    var response = await axios.get("http://node-api-011.herokuapp.com/products")
    // console.log(response1);  
    this.setState({ listData: await response.data });
    console.log(this.state.listData)
     this.state.listData.map(a=>{
       this.state.articles.push(Object.assign(a,{quantity:0}));
     })
    this.setState({articles:this.state.articles});
    console.log(this.state.articles)
  // this.join();

}

getaddress(e){
        
}



  render() {



    return (
      <div >
      
        {/* <p>{this.state.combine}</p> */}
         <button type="button" className="btn" onClick={()=>this.getmyposition()}>Get Geolocation</button>
        <br/>
        <br/>
       

 
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div class="input-group">
            <input  style={{height:"30px"}}
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
                
              })}
            />
             
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
  
   

    <div class="input-group">
    <input type="text" className="form-control" onChange={this.searchHandler} placeholder="search by productname" />
    <span class="input-group-addon">
        <i class="fa fa-search"></i>
    </span>
</div>
 
 
       
          <div>
        
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            {/* ---Indicators---- */}

            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1" className=""></li>
              <li data-target="#myCarousel" data-slide-to="2" className=""></li>
              <li data-target="#myCarousel" data-slide-to="3" className=""></li>
              <li data-target="#myCarousel" data-slide-to="4" className=""></li>
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div >
                  <div className="carousel-caption">
                    <h3>The Biggest <span>Sale</span></h3>
                    <p>Special for today</p>
                    <a className="hvr-outline-out button2" href="">Shop Now </a>
                  </div>
                </div>
              </div>
              <div className="item item2">
                <div >
                  <div className="carousel-caption">
                    <h3>Summer <span>Collection</span></h3>
                    <p>New Arrivals On Sale</p>
                    <a className="hvr-outline-out button2" href="">Shop Now </a>
                  </div>
                </div>
              </div>
              <div className="item item3">
                <div >
                  <div className="carousel-caption">
                    <h3>The Biggest <span>Sale</span></h3>
                    <p>Special for today</p>
                    <a className="hvr-outline-out button2" href="">Shop Now </a>
                  </div>
                </div>
              </div>
              <div className="item item4">
                <div >
                  <div className="carousel-caption">
                    <h3>Summer <span>Collection</span></h3>
                    <p>New Arrivals On Sale</p>
                    <a className="hvr-outline-out button2" href="">Shop Now </a>
                  </div>
                </div>
              </div>
              <div className="item item5">
                <div >
                  <div className="carousel-caption">
                    <h3>The Biggest <span>Sale</span></h3>
                    <p>Special for today</p>
                    <a className="hvr-outline-out button2" href="">Shop Now </a>
                  </div>
                </div>
              </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            {/*  ----The Modal----  */}

          </div>
          <div className="row" style={{ backgroundColor: "#E2E8E6", alignContent: "center" }}>
            
            {this.state.articles.filter(searchingfor(this.state.searchterm)).map(a =>

              <div className="col-sm-3 col-md-4 col-lg-3 col-xs-12" >
                <div style={{ width: "250px", height: "420px" }}> <p>{a.name}</p>
                  <img className="img" src={a.img} alt="hello" style={{ width: 200, height: 200 }} />

                  <p>price:{a.price}</p>
                  <p>available:{a.available}</p>
                  <br /><br />

                  <button className="btn btn-primary btn-lg" onClick={() => { this.view1(a) }} >add to cart</button><br /><br />
                  <br /><br />

                </div>
              </div>


            )}
            </div>
            
          </div>
        


        
      
  
    
    </div>);
    //  if(!this.state.combine){
    //   return(
    //     <div>
    //         <h1>Oops! server problem pls click below</h1>
    //         <a href="/" className="btn btn-outline-info">Reload</a>
    //     </div>

  }


}

export default Home;