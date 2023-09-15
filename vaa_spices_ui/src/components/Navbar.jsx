import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        //     <div className="container">
        //         <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink>
        //         <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav m-auto my-2 text-center">
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/">Home </NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/product">Products</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/about">About</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/contact">Contact</NavLink>
        //                 </li>
        //             </ul>
        //             <div className="buttons text-center">
        //                 <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
        //                 <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
        //                 <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
        //             </div>
        //         </div>


        //     </div>
        // </nav>
        <div id="sticker-sticky-wrapper" class="sticky-wrapper" style={{ height: "85px",  width: "1016px" }}><div class="top-header-area" id="sticker" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 text-center">
                        <div class="main-menu-wrap">

                            <div class="site-logo">
                                <a href="index.html">
                                    {/* <img src="assets/img/logo.png" alt=""> */}
                                </a>
                            </div>

                            <nav class="main-menu" style={{ display: "block" }}>
                                <ul>
                                    <li class="current-list-item"><a href="#">Home</a>
                                        <ul class="sub-menu">
                                            <li><a href="index.html">Static Home</a></li>
                                            <li><a href="index_2.html">Slider Home</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul class="sub-menu">
                                            <li><a href="404.html">404 page</a></li>
                                            <li><a href="about.html">About</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="checkout.html">Check Out</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="news.html">News</a></li>
                                            <li><a href="shop.html">Shop</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="news.html">News</a>
                                        <ul class="sub-menu">
                                            <li><a href="news.html">News</a></li>
                                            <li><a href="single-news.html">Single News</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><a href="shop.html">Shop</a>
                                        <ul class="sub-menu">
                                            <li><a href="shop.html">Shop</a></li>
                                            <li><a href="checkout.html">Check Out</a></li>
                                            <li><a href="single-product.html">Single Product</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="header-icons">
                                            <a class="shopping-cart" href="cart.html"><i class="fas fa-shopping-cart"></i></a>
                                            <a class="mobile-hide search-bar-icon" href="#"><i class="fas fa-search"></i></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <a class="mobile-show search-bar-icon" href="#"><i class="fas fa-search"></i></a>
                            <div class="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Navbar