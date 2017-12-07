import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends Component {
	render() {
		const { title, subtitle } = this.props;
		return (
			<div className="title-bar">
				<div className="wrapper">
					<h1>{title}</h1>
					<h2 className="title-bar__subtitle">{subtitle}</h2>
				</div>
			</div>
		);
	}
}

TitleBar.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
};
