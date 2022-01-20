import React from "react";
import {
  Box,
  Divider,
  Drawer,
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
import SettingsIcon from '@mui/icons-material/Settings';

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

const container = window !== undefined ? () => window.document.body : undefined;

const drawerContent = (
	<div>
		<Toolbar>
			<SupervisorAccountIcon />
			<Typography variant="h5" sx={{ ml: '8px' }}>Admin</Typography>
		</Toolbar>
		<Divider />
		<List>
			{sidebarItems.map(item => (
				<ListItem button key={item.name}>
					<ListItemIcon>
						{item.icon}
					</ListItemIcon>
					<ListItemText primary={item.name} />
				</ListItem>
			))}
		</List>
		<Divider />
		<List>
			<ListItem button key="settings">
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary="Settings" />
			</ListItem>
		</List>
	</div>
);

const Sidebar = ({ drawerWidth, mobileOpen, handleDrawerToggle}) => {
	return (
		<Box
		component="nav"
		sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		aria-label="mailbox folders"
		>
		<Drawer
		container={container}
		variant="temporary"
		open={mobileOpen}
		onClose={handleDrawerToggle}
		ModalProps={{ keepMounted: true, }}
		sx={{
			display: { xs: 'block', sm: 'none' },
			'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
		}}
		>
			{drawerContent}
		</Drawer>
		<Drawer
		variant="permanent"
		sx={{
			display: { xs: 'none', sm: 'block' },
			'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
		}}
		open
		>
			{drawerContent}
		</Drawer>
		</Box>
	);
}
 
export default Sidebar;