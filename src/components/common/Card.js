import React from 'react';

function Card(props) {
	return <div style={styles.containerStyle}>{props.children}</div>;
}

const styles = {
	containerStyle: {
		borderRadius: 5,
		border: '1px solid #282c34',
		borderBottomWidth: 0,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
		boxShadow: '0 10px 6px -6px #777'
	}
};
export default Card;
