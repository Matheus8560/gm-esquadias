import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" top="true" component={Home} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
