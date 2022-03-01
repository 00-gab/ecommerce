import {
	Box,
	Button,
	Modal,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Paper,
} from "@mui/material";
import Logic from "./Logic";
import styles from "../ProductsList/styles";
import { onClickDelete } from "../../utils";

const ProductsList = () => {
	const {
		open,
		products,
		selected,
		handleClose,
		handleOpen,
	} = Logic();

	return (
		<TableContainer component={Paper}>
			<Table sx={styles.tableContainer} aria-label="products-table">
				<TableHead>
					<TableRow>
					<TableCell>Name</TableCell>
					<TableCell align="right">Price</TableCell>
					<TableCell align="right">Stocks</TableCell>
					<TableCell align="right"></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{products.map(product => (
						<TableRow key={product.id} sx={styles.tableContent}>
							<TableCell component="th" scope="row">
                				{product.name}
              				</TableCell>
							<TableCell align="right" >{product.price}</TableCell>
							<TableCell align="right">{product.stocks}</TableCell>
							<TableCell align="right" sx={{width: '300px'}}>
								<Button component="a" href={`/products/view/${product.id}`}>
								View
								</Button>
								<Button component="a" href={`/edit/${product.id}`}>
								Edit
								</Button>
								<Button
									onClick={() => handleOpen(product.attachmentUrl, product.id)}
									color="error"
								>
								Delete
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Modal open={open} onClose={handleClose} aria-labelledby="modal-delete">
				<Paper id="modal-delete" elevation={9} sx={styles.modalStyle}>
					<Typography sx={styles.confirm} variant="h6" align="center">You are about to delete this product</Typography>
					<Box component="div" sx={styles.btnGroup}>
						<Button onClick={() => onClickDelete(selected.url, selected.id)}>Confirm</Button>
						<Button onClick={handleClose}>Cancel</Button>
					</Box>
				</Paper>
			</Modal>
		</TableContainer>
	);
}

export default ProductsList;