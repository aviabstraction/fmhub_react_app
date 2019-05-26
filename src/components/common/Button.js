import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Button(props) {
	return (
		<button style={styles.buttonStyle}>
			{' '}
			<a href={props.url} rel="noopener noreferrer" target="_blank" style={styles.linkStyle}>
				View More
			</a>
		</button>
	);
}
const styles = {
	buttonStyle: {
		backgroundColor: '#fb3e44',
		color: 'white',
		padding: 5,
		borderRadius: 5
	},
	linkStyle: {
		textDecoration: 'none',
		color: 'white'
	}
};
export default Button;
