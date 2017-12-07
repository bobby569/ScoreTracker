import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';

export default class Player extends Component {
	updateScore(_id, amount) {
		Players.update(_id, { $inc: { score: amount } });
	}

	render() {
		const { player: { name, rank, position, score, _id } } = this.props;
		const itemClassName = `item item--position-${rank}`;
		return (
			<div className={itemClassName}>
				<div className="player">
					<div>
						<h3 className="player__name">{name}</h3>
						<p className="player__stats">
							{position} place - {score} point(s)
						</p>
					</div>
					<div className="player__actions">
						<button
							className="button button--round"
							onClick={() => this.updateScore(_id, 1)}
						>
							+
						</button>
						<button
							className="button button--round"
							onClick={() => this.updateScore(_id, -1)}
						>
							-
						</button>
						<button
							className="button button--round"
							onClick={() => Players.remove({ _id })}
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
