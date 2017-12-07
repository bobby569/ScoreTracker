import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';

export default class Player extends Component {
	updateScore(_id, amount) {
		Players.update(_id, { $inc: { score: amount } });
	}

	render() {
		const { player } = this.props;
		return (
			<div className="item">
				<div className="player">
					<div>
						<h3 className="player__name">{player.name}</h3>
						<p className="player__stats">{player.score} point(s)</p>
					</div>
					<div className="player__actions">
						<button
							className="button button--round"
							onClick={() => this.updateScore(player._id, 1)}
						>
							+
						</button>
						<button
							className="button button--round"
							onClick={() => this.updateScore(player._id, -1)}
						>
							-
						</button>
						<button
							className="button button--round"
							onClick={() => Players.remove({ _id: player._id })}
						>
							X
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Player.propTypes = {
	player: PropTypes.object.isRequired
};
