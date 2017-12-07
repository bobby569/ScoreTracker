import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players, getRank } from '../imports/api/players';
import App from '../imports/components/App';

Meteor.startup(() => {
	Tracker.autorun(() => {
		const players = Players.find({}, { sort: { score: -1 } }).fetch();
		const rankedPlayers = getRank(players);
		const title = 'Score Keeper';
		const subtitle = 'Powered by Angular (jk)';
		ReactDOM.render(
			<App title={title} subtitle={subtitle} players={rankedPlayers} />,
			document.getElementById('app')
		);
	});
});
