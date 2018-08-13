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
		const { title } = this.state

		return(
			<div className="headerBar">
				<h4>{title}</h4>
			</div>
		)
	}
}