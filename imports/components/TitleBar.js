import React, { Component } from 'react';

export default class TitleBar extends Component {
	render() {
		return <div className="nav">{this.props.title}</div>;
	}
}
