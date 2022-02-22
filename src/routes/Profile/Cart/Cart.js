import React from 'react';
import {
	Box,
	Button,
	ButtonGroup,
	Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = ({ cartItems }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			{cartItems.map(item => (
				<Box
					key={item.id}
					sx={{
						display: 'flex',
						flexDirection: {xs: 'column', sm: 'row'},
						alignItems: 'center',
						justifyContent: 'space-between',
						outline: '1px solid #BCBCBC',
						gap: '1rem',
						p: '0.8rem',
						color: 'black',
					}}
				>
					<Box
						className="cartDetails"
						sx={{ 
							display: 'flex', 
							flexDirection: {xs: 'column', sm: 'row'},
							alignItems: 'center',
							justifyContent: 'flex-start',
							gap: '1em', 
							minWidth: {sm: '300px'},
						}}
					>
						<Box
							component="img"
							src={item.attachmentUrl}
							height='100px'
							width='auto'
						/>
						<Box 
							sx={{ 
								display: 'flex', 
								flexDirection: 'column',
								alignItems: {xs: 'center', sm: 'flex-start'},
							}}
						>
							<Typography variant="subtitle2">{item.name}</Typography>
							<Typography variant="subtitle1">${item.price}</Typography>
						</Box>
					</Box>
					<Box sx={{color:"gray"}}>
					<ButtonGroup color='inherit' variant="outlined" size="small">
						<Button><RemoveIcon /></Button>
						<Button>{item.quantity}</Button>
						<Button><AddIcon /></Button>
					</ButtonGroup>
					</Box>
					<Button color='inherit'>Remove</Button>
				</Box>
			))}
		</Box>
	);
}
 
export default Cart;