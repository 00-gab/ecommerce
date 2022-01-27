import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import {
	Box,
	Button,
	Modal,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Paper,
} from "@mui/material";
import { onClickDelete, modalStyle } from "../utils";

const ProductsList = () => {
	const [products, setProducts] = useState([]);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	useEffect(() => {
		const collectionRef = collection(db, "products");
		const q = query(collectionRef, orderBy("stocks", "desc"));
		const unsub = onSnapshot(q, snapshot => {
			setProducts(snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			})))
		})
		return unsub; 
	}, [])

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: "650px" }} aria-label="products-table">
				<TableHead>
					<TableRow>
					<TableCell>Name</TableCell>
					<TableCell align="right">Price</TableCell>
					<TableCell align="right">Stocks</TableCell>
					<TableCell align="right"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map(product => (
						<TableRow
						key={product.id}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">
                				{product.name}
              				</TableCell>
							<TableCell align="right" >{product.price}</TableCell>
							<TableCell align="right">{product.stocks}</TableCell>
							<TableCell align="right" sx={{width: '300px'}}>
								<Button
								component="a"
								href={`/products/view/${product.id}`}
								>
								View
								</Button>
								<Button
								component="a"
								href={`/edit/:id`}
								>
								Edit
								</Button>
								<Button
								onClick={handleOpen}
								color="error"
								>
								Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-delete"
			>
			<Paper
			id="modal-delete"
			elevation={9}
			sx={modalStyle}
			>
			<Typography sx={{pt: '0.5rem'}} variant="h6" align="center">You are about to delete this product</Typography>
			<Box
			component="div"
			sx={{ display: 'flex', justifyContent: 'flex-end' }}
			>
				<Button onClick={onClickDelete}>Confirm</Button>
				<Button onClick={handleClose}>Cancel</Button>
				</Box>
			</Paper>
			</Modal>
		</TableContainer>
	);
}
 
export default ProductsList;