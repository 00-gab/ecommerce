import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
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

import Carousel from "../components/Carousel";
import { onClickDelete, modalStyle } from "../utils";

const divStyle = {
	display: 'flex',
	flexDirection: 'column',
	pt: '1em',
	m: '8px 0 8px'
}


const ProductView = () => {
	const { id } = useParams();
	const history = useHistory();

	const [activeStep, setActiveStep] = useState(0);
	const [init, setInit] = useState(false);
	const [maxSteps, setMaxSteps] = useState(0);
	const [open, setOpen] = React.useState(false);
	const [product, setProduct] = useState([]);
	const stars = [1, 2, 3, 4, 5];

	useEffect(() => {
		getProduct();
	}, [])

	const confirmDelete = () => {
		onClickDelete(product.attachmentUrl, id)
		history.push("/");
	}
	
	const getProduct = async () => {
		setInit(false);
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		setProduct(docSnap.data());
		setMaxSteps(docSnap.data().urls.length);
		setInit(true);
	}

	const handleBack = () => {
	setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleClose = () => setOpen(false);

	const handleNext = () => {
	setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleOpen = () => setOpen(true);

	const handleStepChange = (step) => {
	setActiveStep(step);
	};

	return (
		<Box sx={{ p: '1em', width: { lg: '100%', md: '100%', xs: '500px' }, height: 'auto', display: 'flex', justifyContent: 'center' }}>
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
				{/** start of carousel  */}
				{/** make carousel a separate component  */}
				<Carousel 
				urls={product.urls}
				activeStep={activeStep}
				maxSteps={maxSteps}
				handleNext={handleNext}
				handleBack={handleBack}
				handleStepChange={handleStepChange}
				/>
				{/** end of carousel  */}
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
					sx={modalStyle}
					>
						<Typography sx={{pt: '0.5rem'}} variant="h6" align="center">You are about to delete this product</Typography>
						<Box
						component="div"
						sx={{ display: 'flex', justifyContent: 'flex-end' }}
						>
							<Button onClick={confirmDelete}>Confirm</Button>
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