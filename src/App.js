import React, { Component } from 'react';
import './App.css';
import MenuNavBar from './Components/MenuNavBar/MenuNavBar';
import Footer from './Components/Footer/Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<MenuNavBar />
				<Footer />
			</div>
		)
  }
}
