import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';

export default class App extends Component {
	render() {
		const { title, players } = this.props;
		return (
			<div className="container">
				<TitleBar title={title} />
				<PlayerList players={players} />
				<AddPlayer />
			</div>
		);
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired
};
