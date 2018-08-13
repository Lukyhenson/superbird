import React, { Component } from 'react'

// css
import './header.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title
		}
	}

	render() {
		return(
			<div className="headerBar">
				<h4>{this.state.title}</h4>
			</div>
		);
	}
}