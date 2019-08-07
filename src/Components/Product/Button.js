import React, { Component } from 'react';

export default class Button extends Component {
	render() {
		return (
			<div>
				<button className="btn-item1" onClick={this.handleAddCart}>MUA HÀNG</button>
				<button className="btn-item2" onClick={this.handleRating}><i className='fas fa-heart'></i></button>
				<button className="btn-item3" onClick={this.handleReset}><i className='fas fa-sync-alt'></i></button>
			</div>
		);
	}
}