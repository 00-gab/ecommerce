import React from "react";
import { useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { authService } from "../firebase";

import {
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";

import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaymentsIcon from '@mui/icons-material/Payments';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';


const SidebarContent = () => {
	const sidebarItems = [
		{
		  name: 'Products',
		  icon: <Inventory2Icon />,
		},
		{
		  name: 'Orders',
		  icon: <ShoppingCartIcon />,
		},
		{
		  name: 'Transactions',
		  icon: <PaymentsIcon />,
		},
	];
	const history = useHistory();
	const onLogOutClick = () => {
		signOut(authService);
		history.push("/")
	}

	return (
		<div>
			<Toolbar>
				<SupervisorAccountIcon />
				<Typography variant="h5" sx={{ ml: '8px' }}>Admin</Typography>
			</Toolbar>
			<Divider />
			<List>
				{sidebarItems.map(item => (
					<ListItem button component="a" href={`/${item.name.toLowerCase()}`} key={item.name}>
						<ListItemIcon>
							{item.icon}
						</ListItemIcon>
						<ListItemText primary={item.name} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<ListItem button onClick={onLogOutClick} key="settings">
					<ListItemIcon >
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText primary="Log Out" />
				</ListItem>
			</List>
		</div>
	);
}
 
export default SidebarContent;