import React, { useState } from "react";
import { 
	Box,
	Button,
	Paper,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { db, addModerator } from "../firebase";
import { styles } from "../utils";


const AddModerator = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
		setOpen(false);
	};

	const onChange = (event) => {
		const { target: { name, value } } = event;
		if (name === "email") setEmail(value);
		if (name === "password") setPassword(value);
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		const collectionRef = collection(db, "users");
		await addDoc(collectionRef, {email, role: 'admin'});
		addModerator({email, password});
		setLoading(false);
		setOpen(true);
		setEmail("");
		setPassword("");
	}

	return (
		<Box sx={{display: 'flex', justifyContent: 'center', p: '1em'}}>
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
				<Typography variant="h3" gutterBottom>Add Moderator</Typography>
				<TextField
				sx={{ mb: styles["spacing"] }}
				label='Email' 
				variant='outlined'
				placeholder='Enter moderator email' 
				name='email'
				onChange={onChange}
				value={email}
				fullWidth
				required
				/>
				<TextField
				sx={{ mb: styles["spacing"] }}
				type="password"
				label='Password' 
				variant='outlined'
				placeholder='Password' 
				name='password'
				onChange={onChange}
				value={password}
				fullWidth
				required
				/>
				<Button 
				sx={{ 
					p: styles["btn-padding"], 
					fontSize: styles["fs-primary"], 
					m: '8px 0' }} 
				type="submit"
				variant="contained"
				disabled={loading}
				>Create User</Button>
				</Box>
			</Paper>
			<Snackbar 
			open={open} 
			autoHideDuration={5000} 
			onClose={handleClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			message="Moderator Added!"
			>
			</Snackbar>
		</Box>
	);
}
 
export default AddModerator;