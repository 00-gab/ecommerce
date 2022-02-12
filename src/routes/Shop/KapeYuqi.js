import React from "react";
import {
	Box,
	Typography,
	Button,
	Menu,
	MenuItem, 
} from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShopNav from "../../components/ShopNav/ShopNav";

import Logic from "./Logic";
import styles from "./styles";

import AllProducts from "./AllProducts";
import Favorites from "./Favorites";

const KapeYuqi = () => {
	const {
		anchorCategory,
		category,
		handleCloseCategory,
		handleMenuCategory,
		toggleCategory
	} = Logic();

	return (
		<Box sx={styles.mainContainer}>
		<ShopNav />
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
					{(category === "all products") && <AllProducts />}
					{(category === "favorites") && <Favorites />}
				</Box>
			</Box>
		</Box>
		</Box>
	);
}
 
export default KapeYuqi;