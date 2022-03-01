import React from "react";
import {
  Box,
  Drawer,
} from "@mui/material";
import SidebarContent from "./SidebarContent";

const container = window !== undefined ? () => window.document.body : undefined;

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
			<SidebarContent />
		</Drawer>
		<Drawer
		variant="permanent"
		sx={{
			display: { xs: 'none', sm: 'block' },
			'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
		}}
		open
		>
			<SidebarContent />
		</Drawer>
		</Box>
	);
}

export default Sidebar;