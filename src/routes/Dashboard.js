import React from "react";
import {
  Box,
  Toolbar,
  Typography,
} from "@mui/material";


const Dashboard = ({ drawerWidth }) => {
	return (
		<Box sx={{ display: 'flex' }}>
		<Box
		component="main"
		sx={{ 
		  flexGrow: 1, p: 3, 
		  height: '100vh',
		  width: { sm: `calc(100% - ${drawerWidth}px)` },
		  bgcolor: '#fafafa', 
		}}
		>
		<Toolbar />
		  <Typography variant="h1">main contents here...</Typography>
		</Box>
	  </Box>
	);
}
 
export default Dashboard;