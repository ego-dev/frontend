import { h } from 'preact';
import style from './style';
import Button from 'react-bootstrap/Button';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<Button>Test</Button>
	</div>
);

export default Home;
