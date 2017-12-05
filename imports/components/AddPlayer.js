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
			<form className="form-inline" onSubmit={this.handleSubmit}>
				<input
					className="form-control"
					type="text"
					name="playerName"
					placeholder="Name"
				/>
				<button className="btn btn-primary">Add Player</button>
			</form>
		);
	}
}
