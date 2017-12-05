import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
	render() {
		return <div className="nav">{this.props.title}</div>;
	}
}

TitleBar.propTypes = {
	title: PropTypes.string.isRequired
};
