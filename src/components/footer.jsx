import React, { Component } from 'react';
class Footer extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
               <footer className="page-footer font-small blue" style={{ backgroundColor: "#bfbfc9" }}>

{/* <!-- Copyright --> */}
<div className="footer-copyright text-center py-3">© 2018 Copyright:
<a href="https://mdbootstrap.com/bootstrap-tutorial/"> SmartShopping Product.com</a>
</div>
{/* <!-- Copyright --> */}

</footer> 
            </div>
        )
    }
}
export default Footer;