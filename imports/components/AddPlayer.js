import React, { Component } from 'react';
import { Players } from '../api/players';

export default class AddPlayer extends Component {
	handleSubmit(e) {
		e.preventDefault();
		const name = e.target.playerName.value;
		if (name) {
			e.target.playerName.value = '';
			Players.insert({
				name,
				score: 0
			});
		}
	}

	render() {
		return (
			<div className="item">
				<form className="form" onSubmit={this.handleSubmit}>
					<input
						className="form__input"
						type="text"
						name="playerName"
						placeholder="Name"
					/>
					<button className="button">Add Player</button>
				</form>
			</div>
		);
	}
}
