import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { authService } from "../firebase";


const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const styles = {
		"spacing": "12px",
		"btn-padding": "0.5rem",
		"fs-primary": "1.125rem",
	}

	const onChange = (event) => {
		const { target: { name, value } } = event;
		if (name === "email") setEmail(value);
		if (name === "password") setPassword(value);
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			if (newAccount) {
				// sign up
				await createUserWithEmailAndPassword(authService, email, password);
			} else {
				await signInWithEmailAndPassword(authService, email, password);
			}
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	}

	const onToggleClick = () => setNewAccount((prev) => !prev);

	return (
		<Grid sx={{ pt: 10 }}>
			<Paper
			component="form"
			onSubmit={onSubmit} 
			elevation={10} 
			sx={{ 
				display: 'flex',
				flexDirection: 'column',
				p: 3 , 
				width: '500px', 
				height: '70vh', 
				margin: '20px auto' 
			}}>
				<Grid align="center">
					{newAccount ? 
					(<Typography sx={{ m: "1rem 0 2rem" }} variant="h5" gutterBottom>Sign Up</Typography>)
					:
					(<Typography sx={{ m: "1rem 0 2rem" }} variant="h5" gutterBottom>Sign In</Typography>)
					}
				</Grid>
				<TextField 
				label='Username' 
				variant='outlined'
				placeholder='Enter username' 
				name='email'
				value={email}
				onChange={onChange}
				sx={{ mb: styles["spacing"] }}
				fullWidth 
				required
				/>
                <TextField 
				label='Password' 
				variant='outlined' 
				placeholder='Enter password' 
				type='password'
				name='password'
				value={password}
				onChange={onChange} 
				sx={{ mb: styles["spacing"] }}
				fullWidth 
				required
				/>
				{error && (<Typography sx={{ color: "warning.main", p: "0.5rem 0" }} align="center">{error.slice(10, -1)}</Typography>)}
				<Button 
				sx={{ 
					p: styles["btn-padding"], 
					fontSize: styles["fs-primary"], 
					m: '8px 0' }} 
				type="submit"
				variant="contained"
				disabled={loading}
				>
				{newAccount ? "Sign up" : "Sign in"}
				</Button>
				<Divider sx={{ p: 1.5 }} />
				<Button 
				sx={{ 
					p: styles["btn-padding"], 
					fontSize: styles["fs-primary"], 
					m: '20px 0' }} 
				variant="contained"
				disabled={loading}
				color="success"
				onClick={onToggleClick}
				>
				{newAccount ? "Already have an account?" : "Create new account"}
				</Button>
			</Paper>
		</Grid>
	);
}
 
export default Login;