import React from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Logic from "./Logic";
import styles from "./styles";

const Login = () => {
	const {
		email, 
		error, 
		loading, 
		newAccount, 
		password, 
		onClickToggle,
		onChange,
		onSubmit,
	} = Logic();
	

	return (
		<Box component="div" sx={styles.mainContainer}>
			<Paper
				component="form"
				onSubmit={onSubmit}
				elevation={5}
				sx={styles.formContainer}
			>
				<Typography variant="h4" align="center">
					{newAccount ? "Sign up" : "Log in"}
				</Typography>
				<Typography variant="overline" align="center" display="block" gutterBottom>
				{newAccount ? 
					(
					<>ALREADY HAVE AN ACCOUNT?<Button sx={styles.signUpBtn} onClick={onClickToggle}>LOG IN HERE</Button></>
					) : 
					(
					<>NEW TO KAPE YUQI?<Button sx={styles.signUpBtn} onClick={onClickToggle}>SIGN UP FOR FREE</Button></>
					) 
				}
				</Typography>
				{error && 
					(<Typography variant="caption" sx={styles.error} align="center" display="block" gutterBottom>{error.slice(10, -1)}</Typography>)
				}
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