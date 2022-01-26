import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ref, deleteObject } from "firebase/storage";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { 
	Box,
	Button,
	Divider,
	Modal,
	Paper,
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
	const history = useHistory();
	const [init, setInit] = useState(false);
	const [product, setProduct] = useState([]);
	const [open, setOpen] = React.useState(false);
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
	
	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const onClickDelete = async () => {
		const imageRef = ref(storage, product.attachmentUrl);
		await deleteObject(imageRef);

		const docRef = 	doc(db, "products", id);
		await deleteDoc(docRef);
		history.push("/");
	}

	return (
		<Box sx={{ p: '1em', width: '100%', height: '80vh', display: 'flex', justifyContent: 'center' }}>
		{init && (
			<Paper
			elevation={9} 
			sx={{ 
				p: '2.5em',
				width: { xs: '100%', sm: '100%', md: '70%', lg: '50%' }, 
				minHeight: "650px", 
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
					<Button
					component="a"
					href={`/edit/${id}`}
					sx={{ mb: '8px' }} 
					variant="contained"
					>Edit</Button>
					<Button 
					onClick={handleOpen}
					variant="outlined" 
					color="error"
					>Delete</Button>
					<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-delete"
					>
					<Paper
					id="modal-delete"
					elevation={9}
					sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					height: 140,
					width: 350,
					bgcolor: 'background.paper',
					boxShadow: 24,
					p: 1,
					outline: 0,
					}}
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
				</Box>
			</Paper>
		)}
		</Box>
	);
}
 
export default ProductView;