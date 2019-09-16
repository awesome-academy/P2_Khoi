import React, { Component } from 'react';
import ProductsDetailHotSaleContent from './ProductsDetailHotSaleContent';
import { connect } from 'react-redux';


class ProductsDetailHotSale extends Component {
	constructor(props){
		super(props);

		this.state = {
			showProduct: []
		};
		this.onShowDetail = this.onShowDetail.bind(this)
	}

	onShowDetail(item){
		return event => {
			let arrItemRecently = JSON.parse(localStorage.getItem('item-detail'));
			if (!arrItemRecently) arrItemRecently = [];

			if (arrItemRecently.length > 2) {
				arrItemRecently.shift();
			}
			let findItem = arrItemRecently.findIndex(i => i.id === item.id);
			if (findItem < 0) {
				arrItemRecently.push(item);
				localStorage.setItem('item-detail', JSON.stringify(arrItemRecently));
			}
			
			window.location.href = '/productsdetail?=';
		}
	}

	render() {
		let Item__list__item = this.props.getHomeData;
		let Item__hot = Item__list__item.filter(item => item.type.includes("hot"))
		let temp = [];
		if (Item__hot.length > 3) {
			for (var i = 0; i < 3; i++) {
					temp.push(Item__hot[i]);
			}
		}

		return (
			<>
				<p className="font-weight-bold pl-0 m-0">SẢN PHẨM BÁN CHẠY</p>
				<hr />
				<div className="row">
					{
						temp.map((Item2, index) => <ProductsDetailHotSaleContent 	key={Item2.id}
																					id={Item2.id}
																					name={Item2.name}
																					image={Item2.image}
																					description={Item2.description}
																					price={Item2.price}
																					priceSale={Item2.priceSale}
																					onShowDetail={this.onShowDetail(Item2)}
							/>
						)
					}
					
				</div>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		getHomeData: state.homereducer
	}
}

export default connect(mapStateToProps,null)(ProductsDetailHotSale)