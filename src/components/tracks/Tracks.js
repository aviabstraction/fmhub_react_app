import React, { Component, Fragment } from 'react';
import { Consumer } from '../../globalStore/context';
import Spinner from '../common/Spinner';
import Track from './Track';
class Tracks extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					console.log(value);
					if (value.track_list === undefined || value.track_list.length === 0) {
						return <Spinner />;
					} else
						return (
							<Fragment>
								<h1 style={{ textAlign: 'center', fontFamily: 'Cursive' }}>{value.heading}</h1>
								<div className="row">
									{value.track_list.map((track) => {
										return <Track track={track} key={track.mbid} />;
									})}
								</div>
							</Fragment>
						);
				}}
			</Consumer>
		);
	}
}

export default Tracks;
