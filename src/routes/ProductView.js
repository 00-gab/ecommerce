import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { 
	Box,
	Button,
	Divider,
	Paper,
	Stack,
	styled,
	TextField,
	Typography,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const divStyle = {
	display: 'flex',
	flexDirection: 'column',
	pt: '1em',
	m: '8px 0 8px'
}

const ProductView = () => {
	const { id } = useParams();
	const [init, setInit] = useState(false);
	const [product, setProduct] = useState([]);
	const stars = [1, 2, 3, 4, 5];

	useEffect(() => {
		getProduct();
	}, [])

	const getProduct = async () => {
		setInit(false);
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		setProduct(docSnap.data());
		setInit(true);
	}

	return (
		<Box sx={{ p: '1em', width: '100%', height: '80vh', display: 'flex', justifyContent: 'center' }}>
		{init && (
			<Paper
			elevation={9} 
			sx={{ 
				p: '2.5em',
				width: { xs: '100%', sm: '100%', md: '70%', lg: '50%' }, 
				minHeight: "620px", 
				display: 'flex',  
				flexDirection: 'column',
			}}>
				<Typography variant="h3" gutterBottom>{product.name}</Typography>
				<Divider />
				<Box
				component="img"
				src={product.attachmentUrl}
				width="250px"
				height="auto"
				alignSelf="center"
				/>
				<Divider />
				<Box
				component="div"
				sx={divStyle}
				>
					<Box sx={{ mb: '8px' }}>
						{stars.map(star => star === 5 ? <StarHalfIcon key={star} /> : <StarIcon key={star} />)}
					</Box>
					<Typography variant="h5" gutterBottom>Price: {product.price}</Typography>
					<Typography variant="h5" gutterBottom>Stocks: {product.stocks}</Typography>
				</Box>
				<Divider />
				<Box
				component="div"
				sx={divStyle}
				>
					<Button sx={{ mb: '8px' }} variant="contained">Edit</Button>
					<Button variant="outlined" color="error">Delete</Button>
				</Box>
			</Paper>
		)}
		</Box>
	);
}
 
export default ProductView;