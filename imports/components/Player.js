import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';

export default class Player extends Component {
	updateScore(_id, amount) {
		Players.update({ _id }, { $inc: { score: amount } });
	}

	render() {
		const { player } = this.props;
		return (
			<li className="list-group-item">
				{player.name} has {player.score} point(s).
				<button
					className="btn btn-danger"
					onClick={() => Players.remove({ _id: player._id })}
				>
					X
				</button>
				<button
					className="btn btn-primary"
					onClick={() => this.updateScore(player._id, 1)}
				>
					+
				</button>
				<button
					className="btn btn-primary"
					onClick={() => this.updateScore(player._id, -1)}
				>
					-
				</button>
			</li>
		);
	}
}

Player.propTypes = {
	player: PropTypes.object.isRequired
};
