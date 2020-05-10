import { h, Component, createContext } from 'preact';
import { Router } from 'preact-router';

import Menu from './menu';

import { API_URL } from '../config';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Logs from '../routes/logs';
import FitnessLog from '../routes/log-fitness';

export const State = createContext();
export const FetchHeaders = new Headers();
export const get = endpoint => fetch(API_URL + endpoint, { method: 'GET', headers: FetchHeaders }).then(r => r.json());
export const post = (endpoint, body) => fetch(API_URL + endpoint, { method: 'POST', headers: FetchHeaders, body: JSON.stringify(body) }).then(r => r.json());

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			user: null,
			email: "test-01@example.com",
			password: "parola7654321"
		};
		FetchHeaders.append('Content-Type', 'application/json');
		FetchHeaders.append('Authorization', 'Basic ' + btoa(this.state.email + ":" + this.state.password));
	}
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	componentDidMount() {
		get('/user').then(data => this.setState({ user: data })).catch(console.log);
	}

	render() {
		return (
			<div id="app">
				<State.Provider value={this.state}>
					<Menu />
					<Router onChange={this.handleRoute}>
						<Home path="/" />
						<Logs path="/logs" />
						<FitnessLog path="/log/fitness" />
					</Router>
				</State.Provider>
			</div>
		);
	}
}
