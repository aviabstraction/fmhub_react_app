import React, { Component, Fragment } from 'react';
import { Consumer } from '../../globalStore/context';
import Spinner from '../common/Spinner';
import Track from './Track';
class Tracks extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					let responsetype = value.track_list.track ? 'search' : 'default';
					let data = value.track_list.track ? value.track_list.track : value.track_list;

					console.log(value);
					if (data === undefined || data.length === 0) {
						return <Spinner />;
					} else
						return (
							<Fragment>
								<h1 style={{ textAlign: 'center', fontFamily: 'Cursive' }}>{value.heading}</h1>
								<div className="row">
									{data.map((track) => {
										return <Track track={track} key={track.mbid} result={responsetype} />;
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
