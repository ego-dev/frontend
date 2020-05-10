import { h } from 'preact';
import { Button, Container, Row, Col } from 'react-bootstrap';

import Profile from '../../assets/profile.png';
import { State } from '../../components/app';

const Logs = () => (
	<State.Consumer>
		{state => state.user ?
			<Container>
				<Row className="justify-content-md-center text-center my-4">
					<Col md={4}>
						<h1>Jurnale</h1>
						<p>Înscrie o intrare nouă în jurnal</p>
						<br />
						<Button variant="outline-primary" size="lg" block className="my-3" href="/log/fitness"><i class="las la-dumbbell mr-4"></i> Fitness</Button>
						<Button variant="outline-primary" size="lg" block className="my-3" href="/log/medical"><i class="las la-prescription-bottle-alt mr-4"></i> Medical</Button>
						<Button variant="outline-primary" size="lg" block className="my-3" href="/log/diet"><i class="las la-hamburger mr-4"></i> Nutriție</Button>
					</Col>
				</Row>
			</Container>
		: null }
	</State.Consumer>
);

export default Logs;
