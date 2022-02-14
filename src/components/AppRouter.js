import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import AddModerator from "../routes/AddModerator/AddModerator";
import Dashboard from "../routes/Dashboard/Dashboard";
import Edit from "../routes/EditProduct/Edit";
import KapeYuqi from "../routes/Shop/KapeYuqi";
import LandingPage from "../routes/Main/LandingPage";
import Login from "../routes/Auth/Login";
import Orders from "../routes/Orders"
import ProductView from "../routes/ProductView/ProductView";
import ProductsList from "../routes/ProductsList/ProductsList";
import Profile from "../routes/Profile/Profile";
import Transactions from "../routes/Transactions"
import AppContainer from "./AppContainer";

const AppRouter = ({ isLoggedIn, userObj, drawerWidth, mobileOpen, handleDrawerToggle}) => {
	return (
		<Router>
			<Switch>
				{!isLoggedIn && (
					<>
						<Route exact path="/">
							<LandingPage />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
					</>
				)}
				{(userObj && userObj[0].role === 'admin') && (
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
				)}
				{(userObj && userObj[0].role === 'user') && (
					<>
						<Route exact path="/">
							<KapeYuqi />
						</Route>
						<Route exact path="/profile">
							<Profile userObj={userObj} />
						</Route>
					</>
				)}
			</Switch>
		</Router>
	);
}

export default AppRouter;