import React from 'react';

function CardSection(props) {
	return <div style={styles.containerStyle}>{props.children}</div>;
}
const styles = {
	containerStyle: {
		padding: 10,
		fontFamily: 'Cursive',
		display: 'flex',
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottom: '1px solid #282c34'
	}
};

export default CardSection;
