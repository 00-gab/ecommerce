import React from "react";
import { 
	Box,
	Button,
	Paper,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import styles from "./styles";
import Logic from "./Logic";


const AddModerator = () => {
	const { 
		email, 
		loading, 
		open, 
		password, 
		handleClose, 
		onChange, 
		onSubmit, 
	} = Logic();

	return (
		<Box sx={styles.box}>
			<Paper elevation={9} sx={styles.mainContainer}>
				<Box component="form" onSubmit={onSubmit} sx={styles.formContainer}>
					<Typography variant="h3" align="center" gutterBottom>Add Moderator</Typography>
					<TextField
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
						sx={styles.submitBtn} 
						type="submit"
						variant="contained"
						disabled={loading}
						fullWidth
					>Create User
					</Button>
				</Box>
			</Paper>
			<Snackbar 
				open={open} 
				autoHideDuration={3000} 
				onClose={handleClose}
				anchorOrigin={styles.snackbarPosition}
				message="Moderator Added!"
			>
			</Snackbar>
		</Box>
	);
}

export default AddModerator;