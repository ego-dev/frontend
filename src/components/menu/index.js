import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { State } from '../app';

import Logo from '../../assets/logo.png';
import Profile from '../../assets/profile.png';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		this.setState({ open: !this.state.open });
	}

	render() {
		return (
			<Navbar bg="primary" variant="dark" expand="lg">
				<Navbar.Brand href="/"><img src={Logo} height="30" class="d-inline-block align-top mr-2" />EGO</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/logs">Jurnale</Nav.Link>
						<Nav.Link href="/history">Istoric Medical</Nav.Link>
						<Nav.Link href="/consultations">Consultații</Nav.Link>
						<Nav.Link href="/prescriptions">Rețete</Nav.Link>
					</Nav>
					<Nav>
						<img src={Profile} height="30" class="d-inline-block align-top m-1 mr-2" />
						<State.Consumer>
							{state => state.user ?
								<NavDropdown alignRight title={state.user.first_name + ' ' + state.user.last_name} id="basic-nav-dropdown">
									<NavDropdown.Item href="/settings">Setări</NavDropdown.Item>
									<NavDropdown.Item href="/settings">Profil</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="/settings">Deconectare</NavDropdown.Item>
								</NavDropdown>
							: null}

						</State.Consumer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
