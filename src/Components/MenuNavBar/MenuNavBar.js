import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { addItemSelected } from '../../Store/actions/ProductsAction';
import './style/MenuNavBar.scss';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Product from '../Product/Product';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';
import Page404 from '../Page404/Page404';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import ProductsDetail from '../ProductsDetail/ProductsDetail';

import MenuItem	from './MenuItem';

class MenuNavBar extends Component {
	constructor(props){
		super(props);
		this.state = {'active': 'd-none'};

		this.onRedirectCart = this.onRedirectCart.bind(this);
		this.onShowTableCart = this.onShowTableCart.bind(this);
		this.onRemoveCart = this.onRemoveCart.bind(this);

	}

	onRemoveCart(item) {
		return (event) => {
			let arrItemRemove = JSON.parse(localStorage.getItem('id-item--cart'));
			const { remove } = this.props;

			let idx = arrItemRemove.findIndex(obj => obj.id === item.id);
			arrItemRemove.splice(idx, 1);

			localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemove));
			remove(arrItemRemove);
		}
	}

	onRedirectCart() {
		window.location.href = "/shopping-cart";
	}

	onShowTableCart(){
		const currentState = this.state.active;
		currentState === 'd-none' ?	this.setState({ active: 'd-block' }) : this.setState({ active: 'd-none'});
	}

	render() {
		let Item__Cart = this.props.productSelected;
		let temp = JSON.parse(localStorage.getItem('id-item--cart'));
		let sum = 0;
		let total = 0;
		if (Item__Cart.count > 0) {
			for (var item of Item__Cart) {
				if (item){
					temp.push(item);
				}
			}
		}
		for ( var item__cart of temp ) {
			total += (item__cart.count * item__cart.price);
			sum += item__cart.count;
		}
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
								<li className="dropdown d-inline list-unstyled m-1">
									<i onClick={this.onShowTableCart} className="dropdown-cart fa fa-shopping-cart"></i>
									<span className="badge badge-pill badge-success">{sum}</span>
									<div className={"dropdown-cart-table p-2 "+this.state.active}>
										{
											temp.map((item, idx) => <MenuItem 	key={idx}
																				count={item.count}
																				id={item.id}
																				image={item.image}
																				price={item.price}
																				productName={item.productName}
																				onRemoveCart={this.onRemoveCart(item)}
											/>)
										}
										<hr />
										<div className="total--price">
											<h5 className="float-left font-weight-bold">Tổng số:</h5>
											<span className="float-right font-weight-bold">{total}.000<sup>đ</sup></span>
										</div>
										<button onClick={this.onRedirectCart} className="text-uppercase btn btn-dark">Giỏ hàng</button>
									</div>
									
								</li>

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
					<Route path="/shopping-cart" component={ShoppingCart} />
					<Route path="/productsdetail" component={ProductsDetail} />

					<Route component={Page404} />
				</Switch>
			</BrowserRouter>
		);
	}
}


function mapStateToProps(state) {
	return {
		productSelected: state.productsreducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		remove: (item) => {
			dispatch(addItemSelected(item));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuNavBar);