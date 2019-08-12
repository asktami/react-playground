import React from 'react';

import Messages from './Messages';

import Split from './composition/Split';
import './App.css';

import Tooltip from './composition/Tooltip';

import TheDate from './state/TheDate';

import { Counter } from './state/Counter';

import { HelloWorld } from './state-drills/HelloWorld';
import { Bomb } from './state-drills/Bomb';
import { RouletteGun } from './state-drills/RouletteGun';

function myFunc() {
	alert('This is myFunc - its just an alert!');
}

// make 2 tooltips here and another inside the App directly
const firstTooltip = (
	<Tooltip color="hotpink" message="tooltip message">
		ipsum
	</Tooltip>
);
const secondTooltip = (
	<Tooltip color="#126BCC" message="another tooltip message">
		officiis
	</Tooltip>
);

export default class App extends React.Component {
	render() {
		return (
			<main className="App">
				<Split className="left" flexBasis={2}>
					<h1>YOUR APPLICATION NAME!</h1>
					<div>Hello!</div>
					This is the content for the left `Split`. Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Incidunt ex velit suscipit facere
					officia?
					<hr />
					<h2>RouletteGun</h2>
					<RouletteGun />
					<hr />
					<h2>Bomb</h2>
					<Bomb />
					<hr />
					<h2>HelloWorld</h2>
					<HelloWorld />
					<hr />
					<h2>Counter</h2>
					<Counter count={120} />
					<hr />
					<h2>TheDate</h2>
					<TheDate />
					<hr />
					<h2>Messages</h2>
					<br />
					<Messages name="Messages" unread={0} />
					<Messages name="Notifications" unread={10} />
					<hr />
					<h2>Tooltips</h2>
					{/* make another tooltip directly inside the App */}
					<Tooltip message="one more tooltip message">Necessitatibus?</Tooltip>
					<br />
					<br />
					{firstTooltip}
					<br />
					<br />
					{secondTooltip}
					<hr />
					<h2>MyFunction</h2>
					<button onClick={myFunc}>Click Me</button>
				</Split>
				<Split className="right">
					This is the content for the right `Split`. Inventore aliquid
					cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid
					quo possimus id soluta aspernatur.
				</Split>
			</main>
		);
	}
}

// export default App;
// because we need to export variables in the file we wish to import from
// Here, we're telling JavaScript to export the App variable from the App.js file into any file that asks for it
// This is called a "default" export
// to be discussed later: 'named' export
