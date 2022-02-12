import Logic from "./Logic";
import styles from "./styles";
import { Box, Typography, Button } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Favorites = () => {
	const { favorites } = Logic();
	return (
		favorites.map(favorite => (
			<Box component="div" key={favorite.id} sx={styles.product}>
				<Box component="div" sx={styles.imgStyles}>
					<Box component="img" src={favorite.attachmentUrl} height="100%" />
				</Box>
				<Box component="div" className="details">
					<Typography variant="h6" align="center">{favorite.name}</Typography>
					<Typography variant="h5" align="center">{favorite.price}</Typography>
				</Box>
				<Button variant="contained" sx={styles.addBtn} endIcon={<AddShoppingCartIcon />}>
				Add to Cart
				</Button>
			</Box>
		))
	);
}
 
export default Favorites;