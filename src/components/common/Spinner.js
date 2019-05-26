import React from 'react';
import spinner from './spinner.gif';

export default () => {
	return (
		<div>
			<img src={spinner} alt="Loading . . ." style={{ width: '100px', margin: '140px auto', display: 'block' }} />
		</div>
	);
};
