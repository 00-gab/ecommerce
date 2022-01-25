import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { 
	Box,
	Button,
	Stack,
	styled,
	TextField,
	Typography,
} from "@mui/material";

const Input = styled('input')({
	display: 'none',
});

const styles = {
	"spacing": "1.125rem",
	"btn-padding": "0.5rem",
	"fs-primary": "1.125rem",
}

const Edit = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [attachment, setAttachment] = useState(null);
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productStocks, setProductStocks] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		getProduct();
	}, [])

	const getProduct = async() => {
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		setProduct(docSnap.data())
		setProductName(docSnap.data().name);
		setProductPrice(docSnap.data().price);
		setProductStocks(docSnap.data().stocks);
		setAttachment(docSnap.data().attachmentUrl);
	}

	const onChange = (event) => {
		const { target: { name, value } } = event;
		if (name === 'product') setProductName(value);
		if (name === 'price') setProductPrice(value);
		if (name === 'stocks') setProductStocks(value);
	}

	const onFileChange = (event) => {
		const { target: { files } } = event;
		const imgFile = files[0];
		const reader = new FileReader();
		reader.onloadend = (finishedEvent) => {
			const { currentTarget: { result } } = finishedEvent;
			setAttachment(result);
		}
		reader.readAsDataURL(imgFile);
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		console.log(attachment)
	}

	return (
		<>
			{product && (
			<div>
				<Box 
				component="form" 
				onSubmit={onSubmit} 
				sx={{ 
				width: '100%', 
				display: 'flex',
				flexDirection: 'column', 
				justifyContent: 'center',
				}}
				>
				<Typography variant="h3" gutterBottom>Edit Product</Typography>
				<TextField
				sx={{ mb: styles["spacing"] }}
				label='Product Name' 
				variant='outlined'
				placeholder='Enter product name' 
				name='product'
				onChange={onChange}
				value={productName}
				fullWidth
				required
				/>
				<TextField
				sx={{ mb: styles["spacing"] }}
				label='Product Price' 
				variant='outlined'
				placeholder='Enter product price' 
				name='price'
				onChange={onChange}
				value={productPrice}
				fullWidth
				required
				/>
				<TextField
				sx={{ mb: styles["spacing"] }}
				label='Stocks' 
				variant='outlined'
				placeholder='Enter product price' 
				name='stocks'
				onChange={onChange}
				value={productStocks}
				fullWidth
				required
				/>
				{error && (
				<Typography sx={{ color: "warning.main" }} gutterBottom>{error}</Typography>
			)}
				<Stack direction="row" alignItems="center" spacing={2}>
				<label htmlFor="contained-button-file">
					<Input 
					accept="image/*" 
					id="contained-button-file"
					multiple 
					type="file" 
					onChange={onFileChange}
					/>
					<Button variant="contained" component="span">
					change product image
					</Button>
				</label>
				</Stack>
				<Button 
					sx={{ 
						p: styles["btn-padding"], 
						fontSize: styles["fs-primary"], 
						m: '8px 0' }} 
					type="submit"
					variant="contained"
				>Add Product</Button>
				</Box>
			</div>)}
		</>
	);
}
 
export default Edit;