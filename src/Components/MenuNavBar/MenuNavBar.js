import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './style/MenuNavBar.scss';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Product from '../Product/Product';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Page404 from '../Page404/Page404';
import ProductsDetail from '../ProductsDetail/ProductsDetail';

export default class MenuNavBar extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="container">
					<div className="container row" id="MenuNavBar">
						<div className="text-left col-2 mt-2"><Link to='/'><img className="logo" src="/lib/imgs/logo.png" alt="logo" /></Link>
						</div>
						<nav className="text-uppercase d-inline mt-4 ml-3 col-7">
							<ul className="text-center">
								<li className="d-inline m-1"><Link to='/home'>Trang chủ</Link></li>
								<li className="d-inline m-1"><Link to='/about'>Giới thiệu</Link></li>
								<li className="d-inline m-1"><Link to='/product'>Sản phẩm <i className="fa fa-angle-down"></i></Link>
								</li>
								<li className="d-inline m-1"><Link to='/blog'>Tin tức</Link></li>
								<li className="d-inline m-1"><Link to='/contact'>Liên hệ</Link></li>
							</ul>
						</nav>
						<nav className="text-right mt-4 col-2 mx-0 px-0">
							<ul className="d-inline">
								<li className="d-inline list-unstyled m-1"><Link to='/'><i className="fa fa-shopping-cart"></i></Link></li>
								<li className="d-inline m-1"><Link to='/'><i className="fa fa-search"></i></Link></li>
								<li className="d-inline m-1"><Link to='/productsdetail'><i className="fa fa-bars"></i></Link></li>
							</ul>
						</nav>
					</div>
				</div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/product" component={Product} />
					<Route path="/blog" component={Blog} />
					<Route path="/contact" component={Contact} />
					<Route path="/sign-in" component={Signin} />
					<Route path="/sign-up" component={Signup} />
					<Route path="/productsdetail" component={ProductsDetail} />

					<Route component={Page404} />
				</Switch>
			</BrowserRouter>
		);
	}
}
