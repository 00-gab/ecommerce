import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Dashboard from "../routes/Dashboard";
import Login from "../routes/Login";

const AppRouter = ({ isLoggedIn }) => {
	return (
		<Router>
			<Switch>
				{isLoggedIn ? (
					<>
						<Route exact path="/">
							<Dashboard />
						</Route>
					</>
				) :
				<>
					<Route exact path="/">
						<Login />
					</Route>
					<Redirect from="*" to="/" />
				</>
				}
			</Switch>
		</Router>
	);
}
 
export default AppRouter;