import React from "react";
import { 
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Grid,
} from "@mui/material";

const Products = ({ products }) => {
	// 56.25%
	return (
		<>
		{products.map(product => (
			<Grid item key={product.id} xs={12} sm={12} md={6} lg={4}>
				<Card sx={{ maxWidth: 345, height: '450px' }}>
					<CardMedia
					component="img" 
					image={product.attachmentUrl}
					title={product.name}
					height="50%"
					width="auto"
					// sx={{ width: 'auto', height: '100%'}}
					/>
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
					<CardActions sx={{ 
						p: 1, 
						display: 'flex', 
						justifyContent: 'space-evenly',
						alignItems: 'center', 
						height: '19%' 
						}}>
						<Button size="medium" variant="contained" color="primary">View Product</Button>
						<Button size="medium" variant="outlined" color="primary">Edit Product</Button>
					</CardActions>
				</Card>
			</Grid>
		))}
		</>
	);
}
 
export default Products;