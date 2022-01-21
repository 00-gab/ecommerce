import React from "react";
import { 
	Box,
	TextField,
	Typography,
	Button,
	Container,
	Divider,
	Grid,
} from "@mui/material";

const styles = {
	"spacing": "12px",
	"btn-padding": "0.5rem",
	"fs-primary": "1.125rem",
}

const AddProduct = () => {
	const onSubmit = (event) => {
		event.preventDefault();
		console.log("i was clicked!")
	} 

	return (
		<Box 
		component="form" 
		onSubmit={onSubmit} 
		sx={{ 
			width: '100%', 
			display: 'flex',
			flexDirection: 'column', 
			justifyContent: 'center' 
		}}
		>
			<TextField
			sx={{ mb: styles["spacing"] }}
			label='Product Name' 
			variant='outlined'
			placeholder='Enter product name' 
			name='product'
			fullWidth
			required
			/>
			<TextField
			sx={{ mb: styles["spacing"] }}
			label='Product Price' 
			variant='outlined'
			placeholder='Enter product price' 
			name='price'
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
			>Add Product</Button>
		</Box>
	);
}
 
export default AddProduct;