import React from "react";
import { 
	Box,
	Container,
	Typography,
} from "@mui/material";

import Logic from "./Logic";
import Products from "./Products";
import styles from "./styles";

const Dashboard = () => {
	const { products, onClickAddToFavorite } = Logic();

	return (
		<>
		<Typography variant="h3" sx={{ p: 1 }}>Products Grid</Typography>
		<Container maxWidth="lg" sx={{ p: (1, 0, 5) }}>
			<Box component="div" sx={styles.mainContainer}>
				<Products products={products} onClickAddToFavorite={onClickAddToFavorite} />
			</Box>
		</Container>
		</>
	);
}
 
export default Dashboard;