import React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Menu,
	MenuItem, 
} from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Logic from "./Logic";
import styles from "./styles";

const KapeYuqi = () => {
	const {
		anchorAccount,
		anchorCategory,
		category,
		favorites,
		products,
		handleCloseAccount,
		handleCloseCategory,
		handleMenuAccount,
		handleMenuCategory,
		toggleCategory
	} = Logic();

	return (
		<Box sx={styles.mainContainer}>
		<Box sx={styles.body}>
			<AppBar position="static" sx={styles.nav}>
			<Toolbar>
				<Box component="div" sx={styles.brand}>
						<Typography variant="h6" sx={{letterSpacing: '2px'}}>KAPE</Typography>
						<Typography variant="h6" sx={{letterSpacing: '3px'}}>YUQI</Typography>
				</Box>
				<Box component="div">
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
					<MenuItem onClick={handleCloseAccount}>My account</MenuItem>
					<MenuItem onClick={handleCloseAccount}>My Purchases</MenuItem>
					<MenuItem onClick={handleCloseAccount}>Logout</MenuItem>
				</Menu>
				</Box>
			</Toolbar>
			</AppBar>
	  	</Box>
		<Box component="main" sx={styles.main}>
			<Box sx={styles.spacing}>
				<Typography variant="h2" align="center">Our Coffee</Typography>
			</Box>
			{/** start of products grid */}
			<Box component="div" sx={styles.productsGrid}>
					<Button
						aria-label="category of products"
						aria-controls="menu-category"
						aria-haspopup="true"
						onClick={handleMenuCategory}
						sx={styles.categoryBtn}
						endIcon={<KeyboardArrowDownIcon />}
					>
						{category.toUpperCase()}
					</Button>
					<Menu
						id="menu-category"
						anchorEl={anchorCategory}
						anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
						}}
						open={Boolean(anchorCategory)}
						onClose={handleCloseCategory}
					>
					<MenuItem onClick={toggleCategory} id="all-products">All Products</MenuItem>
					<MenuItem onClick={toggleCategory} id="favorites">Favorites</MenuItem>
				</Menu>
				<Box component="div" sx={styles.products}>
				{(category === "all products") ? 
				products.map(product => (
						<Box component="div" key={product.id} sx={styles.product}>
							<Box component="div" sx={styles.imgStyles}>
								<Box component="img" src={product.attachmentUrl} height="100%" />
							</Box>
							<Box component="div" className="details">
								<Typography variant="h6" align="center">{product.name}</Typography>
								<Typography variant="h5" align="center">{product.price}</Typography>
							</Box>
							<Button variant="contained" sx={styles.addBtn} endIcon={<AddShoppingCartIcon />}>
							Add to Cart
							</Button>
						</Box>
				))
				: (
				favorites.map(favorite => (
					<Box component="div" key={favorite.id} sx={styles.product}>
						<Box component="div" sx={styles.imgStyles}>
							<Box component="img" src={favorite.attachmentUrl} height="100%" />
						</Box>
						<Box component="div" className="details">
							<Typography variant="h6" align="center">{favorite.name}</Typography>
							<Typography variant="h5" align="center">{favorite.price}</Typography>
						</Box>
						<Button variant="contained" sx={styles.addBtn} endIcon={<AddShoppingCartIcon />}>
						Add to Cart
						</Button>
					</Box>
				))
				)}
				</Box>
			</Box>
		</Box>
		</Box>
	);
}
 
export default KapeYuqi;