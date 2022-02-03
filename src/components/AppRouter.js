import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AddModerator from "../routes/AddModerator";
import Dashboard from "../routes/Dashboard";
import Edit from "../routes/Edit";
import LandingPage from "../routes/LandingPage";
import Login from "../routes/Login";
import Orders from "../routes/Orders"
import ProductView from "../routes/ProductView";
import ProductsList from "../routes/ProductsList";
import Transactions from "../routes/Transactions"

import AppContainer from "./AppContainer";

const AppRouter = ({ isLoggedIn, userObj, drawerWidth, mobileOpen, handleDrawerToggle}) => {
	return (
		<Router>
			<Switch>
				{!isLoggedIn && (
					<>
						<Route exact path="/">
							<Login />
						</Route>
						<Redirect from="*" to="/" />
					</>
				)}
				{userObj && (userObj[0].role === 'admin') ? (
					<>
						<Route exact path="/">
							<AppContainer 
							Element={Dashboard} 
							drawerWidth={drawerWidth} 
							handleDrawerToggle={handleDrawerToggle} 
							mobileOpen={mobileOpen} 
							/>
						</Route>
						<Route exact path="/products/list">
							<AppContainer 
							Element={ProductsList} 
							drawerWidth={drawerWidth} 
							handleDrawerToggle={handleDrawerToggle} 
							mobileOpen={mobileOpen} 
							/>
						</Route>
						<Route exact path="/products/view/:id">
							<AppContainer 
							Element={ProductView} 
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
						<Route exact path="/add-moderator">
							<AppContainer 
							Element={AddModerator} 
							drawerWidth={drawerWidth} 
							handleDrawerToggle={handleDrawerToggle} 
							mobileOpen={mobileOpen} 
							/>
						</Route>
						<Route exact path="/edit/:id">
							<AppContainer 
							Element={Edit} 
							drawerWidth={drawerWidth} 
							handleDrawerToggle={handleDrawerToggle} 
							mobileOpen={mobileOpen} 
							/>
						</Route>
					</>
				) :
				<>
					<Route exact path="/">
						<LandingPage />
					</Route>
				</>
				}
			</Switch>
		</Router>
	);
}

export default AppRouter;