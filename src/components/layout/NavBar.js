import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<nav style={styles.navBarContainerStyle}>
			<Link to="/" style={styles.navTextStyle}>
				FM<span style={{ color: 'yellow', fontFamily: 'cursive' }}>HUB</span>
			</Link>
		</nav>
	);
}
const styles = {
	navBarContainerStyle: {
		backgroundColor: '#fb3e44',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '5px 0px',
		marginBottom: '10px'
	},
	navTextStyle: {
		fontSize: 40,
		fontFamily: 'Lobster',
		color: 'white',
		textDecoration: 'none'
	}
};

export default NavBar;
