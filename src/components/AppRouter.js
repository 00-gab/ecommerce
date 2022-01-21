import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../routes/Dashboard";
import Orders from "../routes/Orders"
import Transactions from "../routes/Transactions"
import Login from "../routes/Login";

import AppContainer from "./AppContainer";

const AppRouter = ({ isLoggedIn,  drawerWidth, mobileOpen, handleDrawerToggle}) => {
	return (
		<Router>
			<Switch>
				{isLoggedIn ? (
					<>
						<Route exact path="/">
							<AppContainer 
							Element={Dashboard} 
							drawerWidth={drawerWidth} 
							handleDrawerToggle={handleDrawerToggle} 
							mobileOpen={mobileOpen} 
							/>
						</Route>
						<Route exact path="/orders">
							<AppContainer 
							Element={Orders} 
							drawerWidth={drawerWidth} 
							handleDrawerToggle={handleDrawerToggle} 
							mobileOpen={mobileOpen} 
							/>
						</Route>
						<Route exact path="/transactions">
							<AppContainer 
							Element={Transactions} 
							drawerWidth={drawerWidth} 
							handleDrawerToggle={handleDrawerToggle} 
							mobileOpen={mobileOpen} 
							/>
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