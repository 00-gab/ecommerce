import React, { useState } from "react";
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

const AddProduct = ({ setModalOpen }) => {
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productStocks, setProductStocks] = useState("");
	const [attachment, setAttachment] = useState("");
	const [preview, setPreview] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

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
		setPreview(URL.createObjectURL(imgFile));
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		let data;
		if (attachment === null) {
			setError("Image is required...");
			return;
		}
		let attachmentUrl = null;
		if (attachment !== null) {
			const attachmentRef = ref(storage, `admin/${uuidv4()}`);
			await uploadString(attachmentRef, attachment, 'data_url');
			attachmentUrl = await getDownloadURL(attachmentRef);
		}
		data = {
			name: productName,
			price: parseInt(productPrice),
			stocks: parseInt(productStocks),
			favorite: false,
			attachmentUrl,
			productId: uuidv4(),
		};
		const collectionRef = collection(db, "products");
		await addDoc(collectionRef, data);
		
		setPreview("");
		setAttachment("");
		setProductName("");
		setProductPrice("");
		setProductStocks("");
		setLoading(false);
		setModalOpen(false);
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
		<Typography variant="h3" gutterBottom>Add a Product</Typography>
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
			<Box component="div" >
				{preview && (
				<Box
				component="img"
				src={preview}
				height="50px"	
				width="50px"	
				/>
				)
				}
			</Box>
			<Stack direction="row" alignItems="center" spacing={2}>
			<label htmlFor="contained-button-file">
				<Input 
				accept="image/*" 
				id="contained-button-file"
				multiple 
				type="file" 
				onChange={onFileChange}
				/>
				<Button variant="contained" component="span" disabled={loading}>
				add product image
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
				disabled={loading}
			>Add Product</Button>
		</Box>
	);
}
 
export default AddProduct;