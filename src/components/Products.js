import React, { useState } from "react";
import { 
	Typography,
	Button,
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	Modal,
	Paper
} from "@mui/material";

const Products = ({ products }) => {
	const divStyle = {
		display: 'flex',
		flexDirection: 'column',
		m: '10px 0 8px'
	}

	return (
		<>
		{products.map(product => (
			<Grid item key={product.id} xs={12} sm={12} md={6} lg={4}>
				<Card sx={{ maxWidth: 345, height: 'auto', p: '0.5rem' }}>
					<CardMedia
					component="img" 
					image={product.attachmentUrl}
					title={product.name}
					height="50%"
					width="auto"
					// sx={{ width: 'auto', height: '100%'}}
					/>
					<Divider />
					<CardContent sx={{ flexGrow: 1, mb: '8px' }}>
						<Typography variant="h5" gutterBottom>
							{product.name}
						</Typography>
						<Typography variant="h6">
							{product.price}
						</Typography>
						<Typography variant="subtitle1">stocks: {product.stocks}</Typography>
					</CardContent>
					<Divider />
					<Box
					component="div"
					sx={divStyle}
					>
						<Button
						component="a"
						href={`/products/view/${product.id}`}
						sx={{ mb: '8px' }} 
						variant="contained"
						>
						View Product
						</Button>
						<Button 
						component="a"
						href={`edit/${product.id}`}
						variant="outlined"
						>
						Edit Product
						</Button>
					</Box>
				</Card>
			</Grid>
		))}
		</>
	);
}
 
export default Products;