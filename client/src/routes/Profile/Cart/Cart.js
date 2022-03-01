import React, { useState, forwardRef } from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Snackbar,
	Typography,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import CartLogic from './CartLogic';
import styles from './styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Pay from "./Pay";

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Cart = ({ cartItems, userObj }) => {
	const {
		decrementCartItem,
		deleteCartItem,
		incrementCartItem,
	} = CartLogic();

	const [openSnackbar, setOpenSnackbar] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
	
		setOpenSnackbar(false);
	};

	return (
		<Box sx={styles.container}>
			{cartItems.map(item => (
				<Box key={item.id} sx={styles.cartItem}>
					<Box className="cartDetails" sx={styles.cartDetails}>
						<Box
							component="img"
							src={item.attachmentUrl}
							height='100px'
							width='auto'
						/>
						<Box sx={styles.typographyStyles}>
							<Typography variant="subtitle2">{item.name}</Typography>
							<Typography variant="subtitle1">${item.price}</Typography>
						</Box>
					</Box>
					<Box sx={{color:"gray"}}>
					<ButtonGroup color='inherit' variant="outlined" size="small">
						<Button onClick={() => decrementCartItem(item.id, item.quantity)}><RemoveIcon /></Button>
						<Button>{item.quantity}</Button>
						<Button onClick={() => incrementCartItem(item.id, item.quantity)}><AddIcon /></Button>
					</ButtonGroup>
					</Box>
					<Box sx={{ display: "flex" }}>
						<Button onClick={() => deleteCartItem(item.id)} color='inherit'>Remove</Button>
						<Pay 
						userObj={userObj} 
						cartItem={item} 
						setOpenSnackbar={setOpenSnackbar}
						/>
					</Box>
				</Box>
			))}
			<Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
				Payment Success!
				</Alert>
			</Snackbar>
		</Box>
	);
}
 
export default Cart;