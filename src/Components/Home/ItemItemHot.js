import React, { Component } from 'react';
import { connect } from "react-redux";
import ItemItemHotContent from './ItemItemHotContent';


class ItemItemHot extends Component {
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

		if (Item__hot.length > 0) {
			for (var item of Item__hot) {
				if (item){
					temp.push(item);
				}
			}
		}
		
		return (
			<ul className="list-unstyled m-4 p-0 row">
				{
					temp.map((Item2, index) => <ItemItemHotContent 	key={Item2.id}
																	id={Item2.id}
																	name={Item2.name}
																	image={Item2.image}
																	description={Item2.description}
																	price={Item2.price}
																	productName={Item2.productName}
																	priceSale={Item2.priceSale}
																	onShowDetail={this.onShowDetail(Item2)}
						/>
					)
				}
			</ul>
		);
	}
}

const mapStateToProps = state => {
	return {
		getHomeData: state.homereducer
	}

}

export default connect(mapStateToProps, null)(ItemItemHot); 
