import React, { useState } from "react";
import { 
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	Modal,
	Paper
} from "@mui/material";

import ProductModal from './ProductModal';
import EditProduct from './EditProduct';

const Products = ({ products }) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [currItem, setCurrItem] = useState(null);
	const [currName, setCurrName] = useState(null);
	const [currPrice, setCurrPrice] = useState(null);
	const [currStocks, setCurrStocks] = useState(null);
	const [currImg, setCurrImg] = useState(null);

	const onModalClose = () => {
		setModalOpen((prev) => !prev);
		setCurrItem(null);
		setCurrName(null);
		setCurrPrice(null);
		setCurrStocks(null);
		setCurrImg(null);
	}
	
	const onModalClick = (itemID, name, price, stocks, img) => {
		setModalOpen((prev) => !prev);
		setCurrItem(itemID);
		setCurrName(name);
		setCurrPrice(price);
		setCurrStocks(stocks);
		setCurrImg(img);
	};
	
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
						<Button 
						// onClick={() => onModalClick(product.id, product.name, product.price, product.stocks, product.attachmentUrl)} 
						component="a"
						href={`edit/${product.id}`}
						size="medium"
						variant="outlined" 
						color="primary">
						Edit Product
						</Button>
						{/* <ProductModal 
						ModalContent={EditProduct}
						id={currItem}
						currName={currName}
						currPrice={currPrice}
						currStocks={currStocks}
						currImg={currImg}
						modalOpen={modalOpen}
						onModalClose={onModalClose}
						setModalOpen={setModalOpen}
						edit={true}
						/> */}
					</CardActions>
				</Card>
			</Grid>
		))}
		</>
	);
}
 
export default Products;