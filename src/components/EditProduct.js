import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { 
	Box,
	Button,
	Stack,
	styled,
	TextField,
	Typography,
} from "@mui/material";

const styles = {
	"spacing": "1.125rem",
	"btn-padding": "0.5rem",
	"fs-primary": "1.125rem",
}

const Input = styled('input')({
	display: 'none',
});

const EditProduct = ({ id, currName, currPrice, currStocks, currImg }) => {
	const [productId, setProductId] = useState(id);
	const [name, setName] = useState(currName);
	const [price, setPrice] = useState(currPrice);
	const [stocks, setStocks] = useState(currStocks);
	const [attachment, setAttachment] = useState(currImg);
	const [error, setError] = useState("");
	
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

	const onSubmit = (event) => {
		event.preventDefault();
	}

	const onChange = (event) => {
		const { target: { name, value } } = event;
		if (name === 'product') setName(value);
		if (name === 'price') setPrice(value);
		if (name === 'stocks') setStocks(value);
	}

	return (
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
			value={name}
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
			value={price}
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
			value={stocks}
			fullWidth
			required
			/>
			{error && (
			<Typography sx={{ color: "warning.main" }} gutterBottom>{error}</Typography>
		)}
			<Stack direction="row" alignItems="center" spacing={2}>
			<Box 
			component="img"
			src={attachment} 
			sx={{ width: '150px', height: '150px' }} 
			/>
			<label htmlFor="contained-button-file">
				<Input 
				accept="image/*" 
				id="contained-button-file"
				multiple type="file" 
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
			>Update Product</Button>
		</Box>
	);
}
 
export default EditProduct;