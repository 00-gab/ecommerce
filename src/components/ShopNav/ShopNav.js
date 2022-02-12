import React from "react";
import { Link } from "react-router-dom";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	IconButton,
	Menu,
	MenuItem, 
} from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import Logic from "./Logic";
import styles from "./styles";

const ShopNav = () => {
	const {
		anchorAccount,
		handleCloseAccount,
		handleMenuAccount,
		onLogOutClick,
	} = Logic();

	return (
		<Box sx={styles.body}>
		<AppBar position="static" sx={styles.nav}>
		<Toolbar>
			<Box component="div" sx={styles.brand}>
					<Typography variant="h6" sx={{letterSpacing: '2px'}}>KAPE</Typography>
					<Typography variant="h6" sx={{letterSpacing: '3px'}}>YUQI</Typography>
			</Box>
			<Box component="div">
			<IconButton component={Link} to="/" color="inherit">
				<StoreMallDirectoryRoundedIcon />
			</IconButton>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-account"
				aria-haspopup="true"
				onClick={handleMenuAccount}
				color="inherit"
			  >
				<AccountCircle />
			  </IconButton>
			<Menu
				id="menu-account"
				anchorEl={anchorAccount}
				anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
				}}
				open={Boolean(anchorAccount)}
				onClose={handleCloseAccount}
			>
				<MenuItem component={Link} to="/profile">My account</MenuItem>
				<MenuItem onClick={handleCloseAccount}>My Purchases</MenuItem>
				<MenuItem onClick={onLogOutClick}>Logout</MenuItem>
			</Menu>
			</Box>
		</Toolbar>
		</AppBar>
	  </Box>
	);
}
 
export default ShopNav;