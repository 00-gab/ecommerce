import React from "react";
import { 
	Typography,
	Button,
	Box,
	CardContent,
	Divider,
	Paper,
	IconButton
} from "@mui/material";
import styles from "./styles";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';


const Products = ({ products, onClickAddToFavorite }) => {
	return (
		<>
		{products.map(product => (
			<Paper elevation={2} key={product.id}>
				<Box component="div" sx={styles.productContainer}>
					<Box component="div" sx={styles.head}>
						<Typography variant="h6">{product.name}</Typography>
						<IconButton 
							aria-label="fave" 
							edge="end"
							onClick={() => onClickAddToFavorite(product.id, product.favorite)}
						>
						{product.favorite ? <StarIcon /> : <StarBorderIcon />}
						</IconButton>
					</Box>
					<Divider />
					<Box component="img" src={product.attachmentUrl} sx={styles.imgStyle} />
					<Box sx={styles.productDetails}>
						<Typography variant="h6" align="center">
							{product.price}
						</Typography>
						<Typography variant="subtitle1" align="center">stocks: {product.stocks}</Typography>
					</Box>
					<Divider />
					<Box component="div" sx={styles.btnGroup}>
						<Button component="a" href={`/products/view/${product.id}`} variant="contained">
						View Product
						</Button>
						<Button component="a" href={`edit/${product.id}`} variant="outlined">
						Edit Product
						</Button>
					</Box>
				</Box>
			</Paper>
		))}
		</>
	);
}
 
export default Products;