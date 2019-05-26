import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../globalStore/context';

class Search extends Component {
	state = {
		songTitle: ''
	};
	findSong = (dispatch, e) => {
		e.preventDefault();

		axios
			.get(
				`https://cors-anywhere.herokuapp.com/http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this
					.state.songTitle}&api_key=413491cd50dedcf484815830676178fc&format=json&limit=10&page=5`
			)
			.then((res) => {
				dispatch({
					type: `SEARCH_SONGS`,
					payload: res.data
				});
			})
			.catch((err) => console.log(err));
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<Consumer>
				{(value) => {
					return (
						<div className="container card card-body mb-4 p-4" style={{ fontFamily: 'Ubuntu' }}>
							<h1 className="display-4 text-center">
								<i className="fas fa-music" /> Search for your Favourite songs here
							</h1>
							<p className="lead text-center">Get any songs you like !!! </p>
							<form onSubmit={this.findSong.bind(this, value.dispatch)}>
								<div className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Search here. .  ."
										name="songTitle"
										value={this.state.songTitle}
										onChange={this.onChange}
									/>
								</div>
								<button
									className="btn btn-lg btn-block mb-5"
									style={{ backgroundColor: '#fb3e44', color: 'white' }}
									type="submit"
								>
									Get Songs
								</button>
							</form>
						</div>
					);
				}}
			</Consumer>
		);
	}
}

export default Search;
