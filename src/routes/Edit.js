import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, deleteObject, getDownloadURL, uploadString } from "firebase/storage";
import { db, storage } from "../firebase";
import { 
	Box,
	Button,
	Paper,
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
	const history = useHistory();
	const [product, setProduct] = useState(null);
	const [attachment, setAttachment] = useState(null);
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productStocks, setProductStocks] = useState("");
	const [originalImg, setOriginalImg] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

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
		setOriginalImg(docSnap.data().attachmentUrl);
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

		reader.onload = (e) => {
			const { target: { result } } = e;
			setAttachment(result);
		}

		reader.onloadend = (finishedEvent) => {
			const { currentTarget: { result } } = finishedEvent;
			setAttachment(result);
		}

		reader.readAsDataURL(imgFile);
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		if (attachment === null) {
			setError('Image is required...');
			return;
		}
		setLoading(true);
		let attachmentUrl = null;
		if (attachment === originalImg) {
			attachmentUrl = attachment;
		} else {
			// delete image reference from fbase storage
			if (originalImg !== null) {
				const imageRef = ref(storage, originalImg);
				await deleteObject(imageRef);
			}
			// upload the new one
			const attachmentRef = ref(storage, `admin/${uuidv4()}`);
			await uploadString(attachmentRef, attachment, 'data_url');
			attachmentUrl = await getDownloadURL(attachmentRef);
		}

		const data = {
			'name': productName,
			'price': productPrice,
			'stocks': productStocks,
			attachmentUrl,
		}
		const docRef = doc(db, "products", id);
		await updateDoc(docRef, data);
		setLoading(false);
		history.push("/")
	}

	return (
		<Box sx={{display: 'flex', justifyContent: 'center', p: '1em'}}>
			{product && (
			<Paper 
			elevation={9}
			sx={{ width: {sm: '100%', md: '50%'}, height: 'auto', p: '1em' }}
			>
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
				<Box
				component="img"
				src={attachment}
				height="150px"
				width="150px"
				/>
				<Stack direction="row" alignItems="center" spacing={2}>
				<label htmlFor="contained-button-file">
					<Input 
					accept="image/*" 
					id="contained-button-file"
					multiple 
					type="file" 
					onChange={onFileChange}
					/>
					<Button disabled={loading} variant="contained" component="span">
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
					disabled={loading}
				>Update Product</Button>
				</Box>
			</Paper>)}
		</Box>
	);
}
 
export default Edit;