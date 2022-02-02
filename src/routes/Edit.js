import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, deleteObject, getDownloadURL, uploadBytes } from "firebase/storage";
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
import { styles } from "../utils";

const Input = styled('input')({
	display: 'none',
});

const Edit = () => {
	const { id } = useParams();
	const history = useHistory();
	const [product, setProduct] = useState(null);
	const [attachments, setAttachments] = useState([]);
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productStocks, setProductStocks] = useState("");
	const [originalUrlRef, setOriginalUrlRef] = useState([]);
	const [preview, setPreview] = useState([]);
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
		setPreview(docSnap.data().urls);
		setOriginalUrlRef(docSnap.data().urls);
	}

	const onChange = (event) => {
		const { target: { name, value } } = event;
		if (name === 'product') setProductName(value);
		if (name === 'price') setProductPrice(value);
		if (name === 'stocks') setProductStocks(value);
	}

	const onFileChange = (event) => {
		const { target: { files }, target: { files: { length } } } = event;
		const selectedFiles = [];

		for (let i = 0; i < length; i++) {
			const newAttachment = files[i];
			setAttachments(prev => [...prev, newAttachment]);
		}

		const filesObj = [...files];
		filesObj.map((file) => selectedFiles.push(URL.createObjectURL(file)));
		setPreview(selectedFiles);
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		let data;
		let temp = [...attachments];
		if (attachments !== null) {
			temp = []; 
			for (let i = 0; i < attachments.length; i++) {
				const attachment = attachments[i];
				const attachmentRef = ref(storage, `admin/${uuidv4()}`);
				await uploadBytes(attachmentRef, attachment);
				const attachmentUrl = await getDownloadURL(attachmentRef)
				temp.push(attachmentUrl);
			}
			for (let j = 0; j < originalUrlRef.length; j++) {
				const url = originalUrlRef[j];
				const imageRef = ref(storage, url);
				deleteObject(imageRef)
				.then(() => console.log(`${url} is succesfully deleted`))
				.catch((error) => console.log(error));
			}
		}
		data = {
			'name': productName,
			'price': productPrice,
			'stocks': productStocks,
			'urls': temp,
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
			sx={{ width: {xs: '100%', sm: '100%', md: '60%', lg: '50%'}, height: 'auto', p: '1em' }}
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
				{/** Start of image preview */}
				<Box component="div" >
				{preview && preview.map(img => (
				<Box 
				key={img}
				component="img"
				src={img}
				height="50px"	
				width="50px"	
				/>
				))
				}
				</Box>
				{/** Start of image preview */}
				{/* <Box
				component="img"
				src={attachment}
				height="150px"
				width="150px"
				/> */}
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