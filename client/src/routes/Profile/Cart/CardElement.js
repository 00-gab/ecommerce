import React, { forwardRef } from 'react';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

const stripe = window.Stripe('pk_test_51KWVMmHn8cxbBtzO7lgfmdAjVBaN3xOU4YVt78cDIXFTo1dMunjM78x6gcIGYWZ5mqB0oZjhFl2h3qNQsNZLz26K00EH1IxUvp');
const elements = stripe.elements();
const card = elements.create("card", {
	style: {
		base: {
			iconColor: '#c4f0ff',
			color: 'white',
			fontWeight: '500',
			fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
			fontSize: '16px',
			fontSmoothing: 'antialiased',
			':-webkit-autofill': {
			color: '#fce883',
			},
			'::placeholder': {
			color: '#dddd',
			},
		},
		invalid: {
			iconColor: '#E63838',
			color: '#E63838',
		},
	},
});


const CardElement = ({ open, userObj, cartItem, setOpenSnackbar, handleClose }) => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	// accept payment
	useEffect(() => {
		if (open) {
			card.mount("#card-element");
		} else {
			card.unmount();
			setLoading(false);
		}
	}, [open]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		const payload = {
			name: cartItem.name,
			price: cartItem.price,
			quantity: cartItem.quantity,
			email: userObj.email,
		}
		console.log(payload)
		if (!stripe || !card) {
			setLoading(false);
			return;
		}

		const { token, error } = await stripe.createToken(card);
		if (error) {
			setError(error.message);
			setLoading(false);
		} else {
			const body = { token, payload };
			const result = await fetch("/create-charge", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			})
			.then(res => res.json());
			console.log(result);
			if (result) {
				setOpenSnackbar(true);
				handleClose();
			}
			setLoading(false);
			setError(null);
		}
		// if success, transfer the item to orders db from cart
	}
	
	return (
		<form 
			onSubmit={handleSubmit}
			className="form" 
			id="payment-form"
			style={{
				padding: "1rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "0.4rem",
				color: 'white',
			}}
		>
			<label htmlFor="card-element"><h1>KAPE YUQI</h1></label>
			<Typography variant="overline">{`You are about to pay $${(cartItem.price * cartItem.quantity)} for ${cartItem.name}`}</Typography>
			{error && <Typography variant="overline" sx={{color: "orange"}}>{error}</Typography>}
			<div 
				id="card-element" 
				className="card-element" 
				style={{ 
					outline: '1px solid gray',
					padding: '1rem',
					width: '100%',
					marginBottom: "1rem",
				}}
			></div>
			<LoadingButton
			type="submit"
			loading={loading}
			variant="outlined"
			color="inherit"
			sx={{
				".MuiLoadingButton-loadingIndicator": {
					color: "gray",
				},
				"&:disabled": {
					outline: "1px solid gray"
				}
			}}
			>
			Pay
			</LoadingButton>
		</form>
	);
}

export default CardElement;