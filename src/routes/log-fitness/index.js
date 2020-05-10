import { h, Component } from 'preact';
import { Button, Container, Row, Col, Accordion, Card, InputGroup, FormControl, ListGroup } from 'react-bootstrap';

import Profile from '../../assets/profile.png';
import { State, get, post } from '../../components/app';

const Exercises = {
	'RU': "Alergare",
	'WA': "Mers",
	'CY': "Activități casnice",
}

class FitnessLog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hours: null,
			minutes: null,
			seconds: null,
			results: []
		}
		this.handleChangeHours = this.handleChangeHours.bind(this);
		this.handleChangeMinutes = this.handleChangeMinutes.bind(this);
		this.handleChangeSeconds = this.handleChangeSeconds.bind(this);
	}

	handleChangeHours(e) {
		this.setState({ hours: event.target.value });
	}

	handleChangeMinutes(e) {
		this.setState({ minutes: event.target.value });
	}

	handleChangeSeconds(e) {
		this.setState({ seconds: event.target.value });
	}

	handleSubmit(type) {
		post('/log/exercise/', { exercise: type, duration: `${this.state.hours || "00"}:${this.state.minutes || "00"}:${this.state.seconds || "00"}`}).then(console.log);
	}

	fetchLog() {
		get('/log/exercise').then(data => this.setState({ results: data.results }));
	}

	componentDidMount() {
		this.fetchLog();
	}

	render() {
		return (
			<State.Consumer>
				{state => state.user ?
					<Container>
						<Row className="justify-content-md-center text-center my-4">
							<Col md={4}>
								<h1>Jurnalul de fitness</h1>
								<p>Înscrie o activitate fizică în jurnal</p>
								<br />
								<Accordion className="text-left">
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="0">
											<i class="las la-plus mr-2"></i> Activități casnice
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="0">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success" onClick={() => this.handleSubmit('CY')}>Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="1">
											<i class="las la-plus mr-2"></i> Aerobic
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="1">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success">Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="2">
											<i class="las la-plus mr-2"></i> Alergare
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="2">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success" onClick={() => this.handleSubmit('RU')}>Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="3">
											<i class="las la-plus mr-2"></i> Antrenament cu greutăți
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="3">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success">Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="4">
											<i class="las la-plus mr-2"></i> Gimnastică
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="4">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success">Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="5">
											<i class="las la-plus mr-2"></i> Înot
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="5">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success">Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="6">
											<i class="las la-plus mr-2"></i> Mers
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="6">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success" onClick={() => this.handleSubmit('WA')}>Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="7">
											<i class="las la-plus mr-2"></i> Stat în picioare
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="7">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success">Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="8">
											<i class="las la-plus mr-2"></i> Urcat scări
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="8">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success">Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
									<Card>
										<Accordion.Toggle as={Card.Header} eventKey="9">
											<i class="las la-plus mr-2"></i> Yoga
										</Accordion.Toggle>
										<Accordion.Collapse eventKey="9">
											<InputGroup>
												<FormControl type="number" onChange={this.handleChangeHours} placeholder="ora" value={this.state.hours} />
												<FormControl type="number" onChange={this.handleChangeMinutes} placeholder="min" value={this.state.minutes} />
												<FormControl type="number" onChange={this.handleChangeSeconds} placeholder="sec" value={this.state.seconds} />
												<InputGroup.Append><Button variant="outline-success">Înscrie</Button></InputGroup.Append>
											</InputGroup>
										</Accordion.Collapse>
									</Card>
								</Accordion>

								<ListGroup className="pt-4 text-left">
									{this.state.results.map(e => (
										<ListGroup.Item>
											<div class="d-flex w-100 justify-content-between">
												<h6>{Exercises[e.exercise]}</h6>
												<small>{e.duration}</small>
											</div>
											<small>aaa</small>
										</ListGroup.Item>
									))}
								</ListGroup>
							</Col>
						</Row>
					</Container>
					: null}
			</State.Consumer>
		);
	}
}

export default FitnessLog;
