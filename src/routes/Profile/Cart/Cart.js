import React from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Typography,
} from '@mui/material';
import CartLogic from './CartLogic';
import styles from './styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = ({ cartItems }) => {
	const {
		decrementCartItem,
		incrementCartItem,
	} = CartLogic();
	
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
					<Button color='inherit'>Remove</Button>
				</Box>
			))}
		</Box>
	);
}
 
export default Cart;