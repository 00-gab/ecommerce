import React from "react";
import {
	Box,
	Typography,
	Button,
	Menu,
	MenuItem, 
	Snackbar,
} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShopNav from "../../components/ShopNav/ShopNav";

import Logic from "./Logic";
import styles from "./styles";

import AllProducts from "./AllProducts";
import Favorites from "./Favorites";

const KapeYuqi = ({ userObj }) => {
	const {
		anchorCategory,
		category,
		favorites,
		open,
		products,
		addToCart,
		handleClose,
		handleCloseCategory,
		handleMenuCategory,
		toggleCategory
	} = Logic(userObj.uid);

	return (
		<Box sx={styles.mainContainer}>
		<Box component="main" sx={styles.main}>
			<Box sx={styles.spacing}>
				<Typography variant="h2" align="center">Our Coffee</Typography>
			</Box>
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
					{(category === "all products") 
					&& <AllProducts addToCart={addToCart} products={products} />}
					{(category === "favorites") 
					&& <Favorites addToCart={addToCart} favorites={favorites} />}
				</Box>
			</Box>
		</Box>
			<Snackbar 
				open={open}
				onClose={handleClose}
				autoHideDuration={3000}
				message="Item added"
			/>
		</Box>
	);
}
 
export default KapeYuqi;