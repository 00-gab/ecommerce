import React from "react";
import {
	Box,
	Toolbar,
} from "@mui/material";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const AppContainer = ({ Element, drawerWidth, handleDrawerToggle, mobileOpen }) => {
	return (
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
			<Box
			component="main"
			sx={{ 
			flexGrow: 1, 
			p: 3, 
			width: { sm: `calc(100% - ${drawerWidth}px)` },
			bgcolor: '#fafafa', 
			}}
			>
			<Toolbar />
				{<Element />}
			</Box>
		</Box>
	);
}
 
export default AppContainer;