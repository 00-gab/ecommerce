import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { 
	Typography,
	Container,
	Grid,
} from "@mui/material";

import useFetchProducts from "./useFetchProducts";
import Products from "./Products";

const Dashboard = () => {
	const products = useFetchProducts();

	return (
		<>
		<Typography variant="h3" sx={{ p: 1 }}>Products Grid</Typography>
		<Container maxWidth="lg" sx={{ p: (1, 0, 5) }}>
			<Grid container spacing={4}>
				<Products products={products} />
			</Grid>
		</Container>
		</>
	);
}
 
export default Dashboard;