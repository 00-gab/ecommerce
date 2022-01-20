import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(false);

	const styles = {
		"spacing": "12px",
		"btn-padding": "0.5rem",
		"fs-primary": "1.125rem",
	}

	const onChange = (event) => {
		const { target: { value, name } } = event;
		if (name === "username") {
			setUsername(value)
		} else if (name === "password") {
			setPassword(value);
		}
	}

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(username + ' ' + password)
		setUsername("");
		setPassword("");
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
				variant="outlined" 
				placeholder='Enter username' 
				name="username"
				value={username}
				onChange={onChange}
				sx={{ mb: styles["spacing"] }}
				fullWidth 
				required
				/>
                <TextField 
				label='Password' 
				variant="outlined" 
				placeholder='Enter password' 
				type='password'
				name="password"
				value={password}
				onChange={onChange} 
				sx={{ mb: styles["spacing"] }}
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
				color="success"
				onClick={onToggleClick}
				>
				{newAccount ? "Create new account" : "Already have an account?"}
				</Button>
			</Paper>
		</Grid>
	);
}
 
export default Login;