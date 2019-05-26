import React from 'react';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Button from '../common/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Track(props) {
	const { name, duration, playcount, url, artist } = props.track;

	return (
		<div className="container col-md-5 mb-5">
			<Card>
				<CardSection>
					<i className="fas fa-play" style={{ color: '#fb3e44' }}>
						<a href={url} style={{ textDecoration: 'none', color: '#fb3e44' }}>
							{' '}
							<i>Song name: {name}</i>{' '}
						</a>
					</i>
				</CardSection>
				<CardSection>
					<b>Duration</b> - {duration}
				</CardSection>
				<CardSection>
					<b>Playcount</b> - {playcount}
				</CardSection>
				<CardSection>
					<b>Artist name </b> - {artist.name}
				</CardSection>
				<CardSection>
					<Button url={url} />
				</CardSection>
			</Card>
		</div>
	);
}

export default Track;
