import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from '../imports/api/players';

const handleSubmit = e => {
	e.preventDefault();
	const name = e.target.playerName.value;
	e.target.playerName.value = '';
	Players.insert({
		name,
		score: 0
	});
};

const updateScore = (_id, amount) => {
	Players.update({ _id }, { $inc: { score: amount } });
};

const renderList = list => {
	return list.map(item => {
		return (
			<p key={item._id}>
				{item.name} has {item.score} point(s).
				<button onClick={() => Players.remove({ _id: item._id })}>X</button>
				<button onClick={() => updateScore(item._id, 1)}>+</button>
				<button onClick={() => updateScore(item._id, -1)}>-</button>
			</p>
		);
	});
};

Meteor.startup(() => {
	Tracker.autorun(() => {
		const players = Players.find().fetch();
		const title = 'Score Keeper';
		const name = 'Bobby';
		const jsx = (
			<div>
				<h1>{title}</h1>
				<p>Hello {name}</p>
				{renderList(players)}
				<form onSubmit={handleSubmit}>
					<input type="text" name="playerName" placeholder="Player name" />
					<button>Add Player</button>
				</form>
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});
