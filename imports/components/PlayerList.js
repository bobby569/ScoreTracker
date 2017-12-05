import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

export default class PlayerList extends Component {
	renderList() {
		const { players } = this.props;
		if (players.length === 0) {
			return <div>Add your first player</div>;
		}
		return players.map(item => <Player key={item._id} player={item} />);
	}

	render() {
		return <ul className="list-group">{this.renderList()}</ul>;
	}
}

PlayerList.propsType = {
	players: PropTypes.array.isRequired
};
