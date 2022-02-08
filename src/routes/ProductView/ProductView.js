import React from "react";
import { 
	Box,
	Button,
	Divider,
	Modal,
	Paper,
	Typography,
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import Logic from "./Logic";
import styles from "./styles";


const ProductView = () => {
	const {
		id,
		init,
		open,
		product,
		stars,
		confirmDelete,
		handleClose,
		handleOpen,
	} = Logic();

	return (
		<Box sx={styles.mainContainer}>
		{init && (
			<Paper elevation={9} sx={styles.productContainer}>
				<Typography variant="h3" gutterBottom>{product.name}</Typography>
				<Divider />
				<Box
				component="img"
				src={product.attachmentUrl}
				width="250px"
				height="auto"
				alignSelf="center"
				sx={styles.imgContainer}
				/>
				<Divider />
				<Box
				component="div"
				sx={styles.split}
				>
					<Box sx={{ mb: '8px' }}>
						{stars.map(star => star === 5 ? <StarHalfIcon key={star} /> : <StarIcon key={star} />)}
					</Box>
					<Typography variant="h5" gutterBottom>Price: {product.price}</Typography>
					<Typography variant="h5" gutterBottom>Stocks: {product.stocks}</Typography>
				</Box>
				<Divider />
				<Box
				component="div"
				sx={styles.split}
				>
					<Button
					component="a"
					href={`/edit/${id}`}
					sx={{ mb: '8px' }} 
					variant="contained"
					>Edit</Button>
					<Button 
					onClick={handleOpen}
					variant="outlined" 
					color="error"
					>Delete</Button>
					<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-delete"
					>
					<Paper
					id="modal-delete"
					elevation={9}
					sx={styles.modalStyle}
					>
						<Typography sx={styles.confirm} variant="h6" align="center">You are about to delete this product</Typography>
						<Box
						component="div"
						sx={styles.btnGroup}
						>
							<Button onClick={confirmDelete}>Confirm</Button>
							<Button onClick={handleClose}>Cancel</Button>
						</Box>
					</Paper>
					</Modal>
				</Box>
			</Paper>
		)}
		</Box>
	);
}
 
export default ProductView;