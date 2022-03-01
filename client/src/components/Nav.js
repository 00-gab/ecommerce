import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Nav = ({ drawerWidth, handleDrawerToggle }) => {
	return (
		<AppBar
		position="fixed"
		sx={{
		  width: { sm: `calc(100% - ${drawerWidth}px)` },
		  ml: { sm: `${drawerWidth}px` },
		  bgcolor: '#fff',
		  color: 'text.primary'
		}}
		>
		<Toolbar>
		  <IconButton
		  color="inherit"
		  aria-label="open drawer"
		  edge="start"
		  onClick={handleDrawerToggle}
		  sx={{ mr: 2, display: { sm: 'none' } }}
		  >
			<MenuIcon />
		  </IconButton>
		  <StorefrontIcon fontSize="large" sx={{ mr: 0.5 }} />
		  <Typography variant="h5" noWrap component="div">
		  Ecommerce
		  </Typography>
		</Toolbar>
		</AppBar>
	);
}
 
export default Nav;