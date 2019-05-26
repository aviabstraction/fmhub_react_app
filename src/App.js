import React, { Fragment } from 'react';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './components/homeRoute/Index';
import { Provider } from './globalStore/context';
function App() {
	return (
		<Provider>
			<BrowserRouter>
				<Fragment>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Index} />
					</Switch>
				</Fragment>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
