import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';

export default class PlayerList extends Component {
	renderList() {
		const { players } = this.props;
		if (players.length === 0) {
			return (
				<div className="item">
					<p className="item__message">Add your first player</p>
				</div>
			);
		}
		return players.map(item => <Player key={item._id} player={item} />);
	}

	render() {
		return <div>{this.renderList()}</div>;
	}
}

PlayerList.propsType = {
	players: PropTypes.array.isRequired
};
