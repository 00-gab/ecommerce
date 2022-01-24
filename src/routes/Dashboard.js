import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { 
	Typography,
	Container,
	Grid,
} from "@mui/material";

import Products from "../components/Products";

const Dashboard = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const collectionRef = collection(db, "products");
		const q = query(collectionRef, orderBy("stocks", "desc"));
		const unsub = onSnapshot(q, snapshot => {
			setProducts(snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			})));
		});
		return unsub;
	}, [])

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