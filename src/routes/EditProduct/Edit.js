import React from "react";
import { 
	Box,
	Button,
	Paper,
	Stack,
	styled,
	TextField,
	Typography,
} from "@mui/material";
import Logic from "./Logic";
import styles from "./styles";

const Input = styled('input')({
	display: 'none',
});

const Edit = () => {
	const {
		attachment, 
		error, 
		loading,
		product, 
		productName, 
		productPrice, 
		productStocks, 
		onChange,
		onFileChange,
		onSubmit,
	} = Logic();

	return (
		<Box sx={styles.mainContainer}>
			{product && (
			<Paper elevation={9} sx={styles.productContainer}>
				<Box component="form" onSubmit={onSubmit} sx={styles.formContainer}>
					<Typography variant="h3" gutterBottom>Edit Product</Typography>
					<TextField
						label='Product Name' 
						variant='outlined'
						placeholder='Enter product name' 
						name='product'
						onChange={onChange}
						value={productName}
						fullWidth
						required
					/>
					<TextField
						label='Product Price' 
						variant='outlined'
						placeholder='Enter product price' 
						name='price'
						onChange={onChange}
						value={productPrice}
						fullWidth
						required
					/>
					<TextField
						label='Stocks' 
						variant='outlined'
						placeholder='Enter product price' 
						name='stocks'
						onChange={onChange}
						value={productStocks}
						fullWidth
						required
					/>
					{error && 
						(<Typography sx={styles.error} gutterBottom>{error}</Typography>)
					}
					<Box
						component="img"
						src={attachment}
						height="150px"
						width="150px"
					/>
					<Stack direction="row" alignItems="center" spacing={2}>
					<label htmlFor="contained-button-file">
						<Input 
							accept="image/*" 
							id="contained-button-file"
							multiple 
							type="file" 
							onChange={onFileChange}
						/>
						<Button disabled={loading} variant="contained" component="span">
						change product image
						</Button>
					</label>
					</Stack>
					<Button 
						sx={styles.submitBtn} 
						type="submit" 
						variant="contained" 
						disabled={loading}
					>Update Product
					</Button>
				</Box>
			</Paper>)}
		</Box>
	);
}
 
export default Edit;