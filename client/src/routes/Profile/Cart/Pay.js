import React, { useState } from 'react';
import {
	Box,
	Button,
	Modal,
	Typography
} from '@mui/material';
import CardElement from "./CardElement";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '500px',
	backgroundColor: '#232224',
	borderRadius: '5px',
	boxShadow: 24,
	padding: 4,
	outline: 'none'
};

const Pay = ({ userObj, cartItem, setOpenSnackbar }) => {
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	
	return (
	<div>
		<Button onClick={handleOpen} color="inherit">Check out</Button>
		<Modal
		open={open}
		onClose={handleClose}
		aria-labelledby="modal-modal-title"
		aria-describedby="modal-modal-description"
		>
			<Box style={style}>
				<CardElement
				handleClose={handleClose}
				open={open} 
				userObj={userObj} 
				cartItem={cartItem}
				setOpenSnackbar={setOpenSnackbar}
				/>
			</Box>
		</Modal>
	</div>
	);
}
 
export default Pay;