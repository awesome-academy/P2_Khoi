import React, { Component } from 'react';

export default class ProductsDetailRecentView extends Component {
	render() {
		return (
			<>
				<p className="font-weight-bold pl-0 m-0">SẢN PHẨM MUA NHIỀU</p>
				<hr/>
				<div className="row">
					<div className="col-lg-4 p-0 topspace-20">
						<img src="/lib/imgs/vong5.png" alt="1"/>
					</div>
					<div className="col-lg-8 p-0 pt-2 topspace-20">
						<p className="bold">Mỹ phẩm châu Âu</p>
						<pre>
							<i className="fa fa-heart"></i>
							<i className="fa fa-heart"></i>
							<i className="fa fa-heart"></i>
							<i className="fa fa-heart"></i>
							<i className="fa fa-heart"></i>(4 lượt mua)
						</pre>
						<p className="bold">355.000đ</p>
					</div>
				<hr className="hr--dotted" />
				</div>
			</>
		);
	}
}
