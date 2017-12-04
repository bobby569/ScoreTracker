import React, { Component } from 'react';
import { Players } from '../api/players';
import Player from './Player';

export default class PlayerList extends Component {
	renderList(list) {
		return list
			.sort((item1, item2) => item2.score - item1.score)
			.map(item => <Player key={item._id} player={item} />);
	}

	render() {
		const { players } = this.props;
		return <ul className="list-group">{this.renderList(players)}</ul>;
	}
}
