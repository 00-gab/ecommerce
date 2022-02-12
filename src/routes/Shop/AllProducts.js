import Logic from "./Logic";
import styles from "./styles";
import { Box, Typography, Button } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const AllProducts = () => {
	const { products } = Logic();
	return  (
		products.map(product => (
			<Box component="div" key={product.id} sx={styles.product}>
				<Box component="div" sx={styles.imgStyles}>
					<Box component="img" src={product.attachmentUrl} height="100%" />
				</Box>
				<Box component="div" className="details">
					<Typography variant="h6" align="center">{product.name}</Typography>
					<Typography variant="h5" align="center">{product.price}</Typography>
				</Box>
				<Button variant="contained" sx={styles.addBtn} endIcon={<AddShoppingCartIcon />}>
				Add to Cart
				</Button>
			</Box>
		))
	);
}
 
export default AllProducts;