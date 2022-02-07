import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, authService } from "../firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const history = useHistory();

	const styles = {
		"spacing": "12px",
		"btn-padding": "0.5rem",
		"fs-primary": "1.125rem",
		mainContainer: {
			height: '100vh',
			width: 'auto',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			background: '#393B41',
			// backgroundImage: 'url(/assets/bgcoffee.jpg)',
			// backgroundSize: "100%",
			// backgroundRepeat: 'no-repeat',
			// backgroundPosition: 'center'
		},
		form: {
			p: '1.2em',
			height: 'auto',
			minWidth: '260px',
			width: {xs: '90%', sm: '450px'},
			display: 'flex',
			flexDirection: 'column',
			gap: '1em',
		},
		signUpBtn: {
			color: 'orange'
		},
		submitBtn: {
			background: '#515C67',
			'&:hover': {
				background: '#393B41',
			}
		}
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
				let data = {
					email,
					role: 'user',
				}
				const collectionRef = collection(db, "users");
				await addDoc(collectionRef, data);
				await createUserWithEmailAndPassword(authService, email, password);
			} else {
				await signInWithEmailAndPassword(authService, email, password);
			}
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
		history.push("/");
	}

	const onClickToggle = () => setNewAccount((prev) => !prev);

	return (
		<Box
		component="div"
		sx={styles.mainContainer}
		>
			<Paper
			component="form"
			onSubmit={onSubmit}
			elevation={5}
			sx={styles.form}
			>
				<Typography variant="h4" align="center">
					{newAccount ? "Sign up" : "Log in"}
				</Typography>
				<Typography variant="overline" align="center" display="block" gutterBottom>
				{newAccount ? 
				(<>ALREADY HAVE AN ACCOUNT?<Button sx={styles.signUpBtn} onClick={onClickToggle}>LOG IN HERE</Button></>) : 
				(<>NEW TO KAPE YUQI?<Button sx={styles.signUpBtn} onClick={onClickToggle}>SIGN UP FOR FREE</Button></>) }
				</Typography>
				<TextField 
				label='Email' 
				variant='outlined' 
				placeholder='Enter Email' 
				type='text'
				name='email'
				value={email}
				onChange={onChange} 
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
				fullWidth 
				required
				/>
				<Button
				type="submit"
				variant="contained"
				disabled={loading}
				sx={styles.submitBtn}
				>
				{newAccount ? "SIGN UP" : "LOG IN"}
				</Button>
			</Paper>
		</Box>
	);
}
 
export default Login;

/**
 * <Grid sx={{ pt: 10 }}>
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
					label='Email' 
					variant='outlined'
					placeholder='Enter email' 
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
 * 
 * 
 * 
 * 
 */