import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'SEARCH_SONGS':
			return {
				...state,
				track_list: action.payload,
				heading: 'Searched song results'
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		track_list: [],
		heading: 'Top 10 Tracks',
		dispatch: (action) => {
			this.setState((state) => reducer(state, action));
		}
	};

	componentDidMount() {
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=rj&api_key=413491cd50dedcf484815830676178fc&format=json&limit=10&page=5`
			)
			.then((res) => {
				this.setState({ track_list: res.data.toptracks.track });
			})
			.catch((err) => console.log(err));
	}

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;
