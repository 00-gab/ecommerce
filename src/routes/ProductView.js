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
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from '@mui/material/styles';
import { onClickDelete, modalStyle } from "../utils";

const divStyle = {
	display: 'flex',
	flexDirection: 'column',
	pt: '1em',
	m: '8px 0 8px'
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ProductView = () => {
	const { id } = useParams();
	const history = useHistory();
	const [init, setInit] = useState(false);
	const [product, setProduct] = useState([]);
	const [open, setOpen] = React.useState(false);
	const stars = [1, 2, 3, 4, 5];

	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
  	const [maxSteps, setMaxSteps] = useState(0);

	const handleNext = () => {
	setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
	setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step) => {
	setActiveStep(step);
	};
	
	useEffect(() => {
		getProduct();
	}, [])
	
	const getProduct = async () => {
		setInit(false);
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		setProduct(docSnap.data());
		setMaxSteps(docSnap.data().urls.length);
		setInit(true);
	}
	
	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const confirmDelete = () => {
		onClickDelete(product.attachmentUrl, id)
		history.push("/");
	}

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
				<Box sx={{ minWidth: "100%", flexGrow: 1 }}>
				<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
      			>
				  {product.urls.map((step, index) => (
					  <Box sx={{ display: 'flex', justifyContent: 'center' }} key={step}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
							component="img"
							src={step}
							sx={{
							width: "300px",
							height: "auto",
							overflow: 'hidden',
							}}
							/>
						) : null }
					  </Box>
				  ))}
				</AutoPlaySwipeableViews>
				<MobileStepper
				steps={maxSteps}
				position="static"
				activeStep={activeStep}
				nextButton={
					<Button
					size="small"
					onClick={handleNext}
					disabled={activeStep === maxSteps - 1}
					>
						Next
						{theme.direction === 'rtl' ? (
						<KeyboardArrowLeft />
						) : (
						<KeyboardArrowRight />
						)}
					</Button>
					}
					backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
						<KeyboardArrowRight />
						) : (
						<KeyboardArrowLeft />
						)}
						Back
					</Button>
					}
				/>
				</Box>
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