import React, { Component } from 'react';
import axios from 'axios';
class Order extends React. Component {
    constructor(props) {
      super(props);
      this.state = {
          listData:[],
          listData1:[],
          listData2:[],
          combine:[],
          userData:[],
          userdata: JSON.parse(localStorage.getItem("user")),
         combine1:{},
         orders:{},
         indexof:0,
      }
      this.state.combine = JSON.parse(localStorage.getItem("manoj"));
      this.state.listData2=JSON.parse(localStorage.getItem("selected"));
      console.log(this.state.listData2);
        console.log(this.state.combine)
   console.log(this.state.combine[0].cust_id);
     // console.log(this.state.listData);
    //    console.log(this.state.combine[0].prodId)
       this.add=this.add.bind(this);
       this.del=this.del.bind(this);
       var index=null;
       var provider_id=null;
        // this.state.indexof=this.state.listData[0].prodId.indexOf(this.state.combine[0].prodId);
        // console.log(this.state.indexof)
    }
    componentDidMount(){
        if(this.state.listData2!=null){
        for(var i=0;i<this.state.listData2.length;i++){
            var k=this.state.listData2[i].prodId.indexOf(this.state.combine[0].prodId);
           if(this.state.combine[0].prodId===this.state.listData2[i].prodId[k]){
              this.state.listData.push(this.state.listData2[i]); 
           } 
        }
    }
        this.setState({listData:this.state.listData});
        console.log(this.state.listData)
    }
    



      
    //   join() {
    //     console.log(this.state.listData);
    //     console.log(this.state.listData1);
    //     this.state.listData.map(ld => {
    //       this.state.listData1.map(ld1 => {
    //         if (ld.shopName == ld1.shopname) {
    //           this.state.combine.push(Object.assign({}, ld, ld1, { quantity: 0 }));
    //         }
    //       })
    //     })
    //     // var obj = 
    //     //       console.log(obj);
    
    //     console.log(this.state.combine);
    //     this.setState(this.state.combine);
    
    
    //     //this 
    //   }
     
      add(pid){
          if(this.provider_id!=undefined){
        for(var i=0;i<this.state.listData.length;i++)
        {
            
            if(this.provider_id===this.state.listData[i].provider_id){

                if(this.state.listData[i].available[this.index]!=0){
                
                 this.state.combine[0].quantity=this.state.combine[0].quantity+1;
                this.state.combine[0].total=this.state.combine[0].quantity*this.state.listData[i].price[this.index];
                
                this.state.combine1.available[this.index]=this.state.combine1.available[this.index]-1;
                this.setState(this.state.combine);
                console.log(this.state.combine);
                
                }
                else{
                    alert("out of stock")
                }
            }
        }
    }else{
        alert("select provider first")
    }
      }
    
      del(pid){
        if(this.provider_id!=undefined){
            for(var i=0;i<this.state.listData.length;i++)
            {
                
                if(this.provider_id===this.state.listData[i].provider_id){
    
                    if(this.state.combine[0].quantity>0){
                   console.log("hiii");
                   
                     this.state.combine[0].quantity=this.state.combine[0].quantity-1;
                    this.state.combine[0].total=this.state.combine[0].quantity*this.state.listData[i].price[this.index];
                    this.state.combine1.available[this.index]=this.state.combine1.available[this.index]+1;
                   console.log( this.state.combine1.available[this.index]);
                   
                    this.setState(this.state.combine);
                    console.log(this.state.combine);
                
                    
                    }
                    else{
                        alert("select a  valid quantity")
                    }
                }
            }
        }else{
            alert("select provider first")
        }
      }
      selectprovider(a,index){
          console.log(a);
          console.log(a. provider_id);
          this.provider_id=a.provider_id;
          this.index=a.prodId.indexOf(this.state.combine[0].prodId);
         this.state.combine1=Object.assign({},a);
           this.setState({combine1:this.state.combine1})
         console.log(this.provider_id)
        //  this.state.combine1.available[this.index]=this.state.combine1.available[this.index]-this.state.combine[0].quantity;
        //  console.log(this.state.combine1)

      }
    buy(){
        console.log(this.state.combine1)
        localStorage.setItem("provider", JSON.stringify(this.state.combine1));
         for(var j=0;j<this.state.combine.length;j++)
         {
            this.state.orders.cust_id= this.state.combine[0].cust_id,
            this.state.orders.product_name= this.state.combine[0].name,
            this.state.orders.product_image=this.state.combine[0].img,
            this.state.orders.product_category=this.state.combine[0].prodCategory,
            this.state.orders.shop_category=this.state.combine[0].shopCategory,
            this.state.orders.rating=this.state.combine[0].rating,
            this.state.orders.size=this.state.combine[0].size,
            this.state.orders.price=this.state.combine1.price[this.index],
            this.state.orders.quantity=this.state.combine[0].quantity,
            this.state.orders.brand_name=this.state.combine[0].BrandName,
            this.state.orders.discount=this.state.combine[0].discount,
            this.state.orders.tax=this.state.combine[0].tax,
            this.state.orders.shop_name=this.state.combine[0].shopname,
            this.state.orders.product_id=this.state.combine[0].prodId,
            this.state.orders.review=this.state.combine[0].review,
            this.state.orders.total=this.state.combine[0].total,
            this.state.orders.order_status="confirmed",
            this.state.orders.provider_mobile_number=this.state.combine1.provider_mobile_number ,
            this.state.orders.customer_mobile_number=this.state.userdata.phno,
            this.state.orders.delivery_address=this.state.userdata.address,
            this.state.orders.provider_id=this.provider_id,
            this.state.orders.payment_option= "online",
            this.state.orders.customer_email= this.state.userdata.email,
           this.state.userData.push(this.state.orders);
         }
          console.log(this.state.userData)
          localStorage.setItem("final", JSON.stringify(this.state.userData));
          this.props.history.push('/cart');
      }
    render(){
        {console.log(this.props)}
        return(
            <div>
               {this.state.listData2!=null ?( 
            <div>
             
                        
             
                       {this.state.combine.map((a,index) =>
                           <div>       
                            
                            <img src={a.img} className="img-thumbnail" width="20%" height="20%"/>
                         <h3>Name:</h3>   <p>{a.name}</p> <h3>Price:</h3> <h>{a.price}</h>
                        
                         <span class="input-group-btn">
                             <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1] " onClick={() => this.add(a.Id1) }>           
                              <span class="glyphicon glyphicon-plus"></span>
                            </button>
                            </span> <h> {a.quantity} </h>
                            <span class="input-group-btn">
                            <button type="button" class="btn btn-danger btn-number"  data-type="minus" data-field="quant[2]" onClick={() => this.del(a.Id1) }>
                            <span class="glyphicon glyphicon-minus"></span>
                            </button>
                            </span> 
                             </div>
          
                    
                       )}
                   
                      <table  className="table">
                          <thead>
                              <tr>
                                  <th></th>
                                  <th>price</th>
                                  <th>provider name</th>
                                  <th>available</th>
                                  <th>provideraddress</th>
                                 
                              </tr>
                          </thead>
                          <tbody>
                          {this.state.listData.map((a,index)=>
                         <tr>
                                    
                         <td>  <input type="radio" name="optradio"  id={a.provider_id} onChange={() =>this.selectprovider(a,index)} /></td>
                           <td>{a.price[a.prodId.indexOf(this.state.combine[0].prodId)]}</td> 
                          
                           <td>{a.provider_name}</td>
                           <td>{a.available[a.prodId.indexOf(this.state.combine[0].prodId)]}</td>  
                           <td>{a.provider_address}</td>  
                           <td>
                               
                           </td>
                          </tr>
                        )}
                          </tbody>
                      </table>
                      <button className="btn btn-outline-success" onClick={()=>this.buy()}>Shop Now</button>
                      
                    
                      </div>
               ):(alert("out of stock"))}
                </div>
        )
    }
    
    
}
export default Order;