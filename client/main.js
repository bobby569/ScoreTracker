import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Players } from '../imports/api/players';
import TitleBar from '../imports/components/TitleBar';
import PlayerList from '../imports/components/PlayerList';
import AddPlayer from '../imports/components/AddPlayer';

Meteor.startup(() => {
	Tracker.autorun(() => {
		const players = Players.find().fetch();
		const title = 'Score Keeper';
		const jsx = (
			<div className="container">
				<TitleBar title={title} />
				<PlayerList players={players} />
				<AddPlayer />
			</div>
		);
		ReactDOM.render(jsx, document.getElementById('app'));
	});
});
