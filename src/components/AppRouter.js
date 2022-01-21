import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Box } from "@mui/material";

import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Dashboard from "../routes/Dashboard";
import Login from "../routes/Login";

const AppRouter = ({ isLoggedIn }) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const drawerWidth = 240;
	const handleDrawerToggle = () => {
	  setMobileOpen(!mobileOpen);
	};
	return (
		<Router>
			{isLoggedIn && (
				<Box sx={{ display: 'flex' }}>
					<Nav
					drawerWidth={drawerWidth} 
					handleDrawerToggle={handleDrawerToggle} 
					/>
					<Sidebar 
					drawerWidth={drawerWidth} 
					mobileOpen={mobileOpen} 
					handleDrawerToggle={handleDrawerToggle}
					/>
				</Box>
			)}
			<Switch>
				{isLoggedIn ? (
					<>
						<Route exact path="/">
							<Dashboard drawerWidth={drawerWidth} />
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