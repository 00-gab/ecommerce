import React from "react";
import { 
	Typography,
	Button,
	Box,
	Card,
	CardContent,
	CardMedia,
	Divider,
	Grid,
} from "@mui/material";
import styles from "./styles";


const Products = ({ products }) => {
	return (
		<>
		{products.map(product => (
			<Grid item key={product.id} xs={12} sm={12} md={6} lg={4}>
				<Card sx={styles.productContainer}>
					<CardMedia
					component="img" 
					image={product.attachmentUrl}
					title={product.name}
					height="50%"
					width="auto"
					// sx={{ width: 'auto', height: '100%'}}
					/>
					<Divider />
					<CardContent sx={styles.productContent}>
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
					sx={styles.btnGroup}
					>
						<Button
						component="a"
						href={`/products/view/${product.id}`}
						// sx={styles.spacing} 
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