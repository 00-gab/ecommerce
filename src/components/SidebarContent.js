import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { signOut } from "firebase/auth";
import { authService } from "../firebase";
import {
	Collapse,
	Divider,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LogoutIcon from '@mui/icons-material/Logout';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import ProductModal from './ProductModal';
import AddProduct from './AddProduct';

const SidebarContent = () => {
	const history = useHistory();
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [productsOpen, setProductsOpen] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const onSettingsClick = () => setSettingsOpen((prev) => !prev);
	const onProductsClick = () => setProductsOpen((prev) => !prev);
	const onModalClick = () => setModalOpen((prev) => !prev);
	const onModalClose = () => setModalOpen((prev) => !prev);

	const onLogOutClick = () => {
		signOut(authService);
		history.push("/")
	}

	return (
		<div>
			<Toolbar>
				<AdminPanelSettingsIcon fontSize="large" />
				<Typography variant="h5" sx={{ ml: '8px' }}>Admin</Typography>
			</Toolbar>
			<Divider />
			{/* start of products nested list */}
			<List>
				<ListItemButton onClick={onProductsClick}>
					<ListItemIcon>
						<Inventory2Icon />
					</ListItemIcon>
					<ListItemText primary="Products" />
					{productsOpen ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={productsOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton component="a" href="/" sx={{ pl: 4 }}>
						<ListItemIcon>
							<GridViewIcon />
						</ListItemIcon>
						<ListItemText primary="Products Grid" />
					</ListItemButton>
					<ListItemButton component="a" href="/products/list" sx={{ pl: 4 }}>
						<ListItemIcon>
							<FormatListBulletedIcon />
						</ListItemIcon>
						<ListItemText primary="Products List" />
					</ListItemButton>
					<ListItemButton onClick={onModalClick} sx={{ pl: 4 }}>
						<ListItemIcon>
							<AddIcon />
						</ListItemIcon>
						<ListItemText primary="Add Product" />
					</ListItemButton>
					<ProductModal
					ModalContent={AddProduct}
					modalOpen={modalOpen} 
					setModalOpen={setModalOpen}
					onModalClick={onModalClick}
					onModalClose={onModalClose}
					edit={false} 
					/>
				</List>
				</Collapse>
				{/* end of products nested list */}
				<ListItemButton component="a" href="/orders">
					<ListItemIcon>
						<ShoppingCartIcon />
					</ListItemIcon>
					<ListItemText primary="Orders" />
				</ListItemButton>
				<ListItemButton component="a" href="/transactions">
					<ListItemIcon>
						<PaymentsIcon />
					</ListItemIcon>
					<ListItemText primary="Transactions" />
				</ListItemButton>
				<ListItemButton component="a" href="/add-moderator">
					<ListItemIcon>
						<SupervisorAccountIcon />
					</ListItemIcon>
					<ListItemText primary="Add Moderator" />
				</ListItemButton>
			</List>
			<Divider />
			<List>
				<ListItemButton onClick={onSettingsClick}>
					<ListItemIcon>
						<SettingsIcon />
					</ListItemIcon>
					<ListItemText primary="Settings" />
					{settingsOpen ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
			</List>
			<Collapse in={settingsOpen} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton onClick={onLogOutClick} sx={{ pl: 4 }}>
						<ListItemIcon>
							<LogoutIcon />
						</ListItemIcon>
						<ListItemText primary="Log out" />
					</ListItemButton>
				</List>
			</Collapse>
		</div>
	);
}
 
export default SidebarContent;