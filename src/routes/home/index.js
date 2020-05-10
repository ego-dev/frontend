import { h } from 'preact';
import style from './style';
import { Button, Container, Row, Col } from 'react-bootstrap';

import Profile from '../../assets/profile.png';
import { State } from '../../components/app';

const Home = () => (
	<State.Consumer>
		{state => state.user ?
			<Container>
				<Row className="justify-content-md-center text-center my-4">
					<Col md={4}>
						<img src={Profile} width="200" class="my-4" />
						<h1>Bună ziua, {state.user.first_name}</h1>
						<p>Cum te simți astăzi?</p>
						<br />
						<Button variant="primary" size="lg" block className="my-3" href="/logs">Extraordinar</Button>
						<Button variant="warning" size="lg" block className="my-3" href="/log/symptoms">Nu prea bine</Button>
						<Button variant="danger" size="lg" block className="my-3" href="/log/emergency">Foarte rău</Button>
					</Col>
				</Row>
			</Container>
		: null }
	</State.Consumer>
);

export default Home;
