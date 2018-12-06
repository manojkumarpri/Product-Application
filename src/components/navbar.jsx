import React, { Component } from 'react';


class NavBar extends Component {

    render() {
        return (
            <div>
                {/* <nav className="navbar navbar-expand-sm bg-info navbar-light">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/order">order</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup">Signup</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/checkout">Checkout</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/userdash"><i className="fa fa-user-circle fa-2x" aria-hidden="true"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">login</a>
                        </li>
                    </ul>
                </nav> */}
                <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#34F1EE"}}>
                <a className="navbar-brand" href="/">E Commerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="/new">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/new/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/new/signup">Signup</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/new/cart">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/new/checkout">Checkout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}
            </div>
        )
    }
}
export default NavBar;

