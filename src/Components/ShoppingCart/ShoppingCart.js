import React, { Component } from 'react';
import Cart from "./Cart";
import './style/ShoppingCart.scss';

export default class ShoppingCart extends Component {
	constructor(props){
		super(props);
		this.onRedirectProduct = this.onRedirectProduct.bind(this);
		this.onHandleResetAll = this.onHandleResetAll.bind(this);
		this.onHandlePayment = this.onHandlePayment.bind(this);
	}

	onRedirectProduct() {
		window.location.href = "/product";
	}

	onHandleResetAll(){
		let arrItemRemoveAll = [];
		let c = window.confirm("Bạn muốn xóa hết ư? :( ") ? (localStorage.setItem("id-item--cart", JSON.stringify(arrItemRemoveAll)), window.location.href = "/product") : alert("Thanks god")
		if (c){
			return c
		}
	}

	onHandlePayment(){

	}

	render() {
		return(
			<>
				<div className="hoc pt-5" id="ShoppingCart">
					<h1 className="mb-4 mt-5">GIỎ HÀNG</h1>
					<table className="container text-center mb-3 table-bordered" >
						<tbody>
							<tr className="row  p-0 my-0">
								<th className="col-lg-2">ẢNH</th>
								<th className="col-lg-3">TÊN SẢN PHẨM</th>
								<th className="col-lg-2">GIÁ</th>
								<th className="col-lg-2">SỐ LƯỢNG</th>
								<th className="col-lg-2">TỔNG SỐ</th>
								<th className="col-lg-1">XÓA</th>
							</tr>
							<Cart />
						</tbody>
						
					</table>
					
					<table className="total__shopping--price text-center my-0">
					</table>
				</div>
				<div className="container hoc p-0">
					<div className="row">
						<div className="col-lg-12 mt-4 cart-button text-right">
							<button className="btn btn-dark cart-button__buy" onClick={this.onRedirectProduct}>TIẾP TỤC MUA HÀNG</button>
							<button className="btn btn-dark cart-button__2" onClick={this.onHandleResetAll}>XÓA TẤT CẢ</button>
							<button className="btn btn-dark cart-button__4" onClick={this.onHandlePayment}>THANH TOÁN</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}