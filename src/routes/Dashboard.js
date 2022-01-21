import React from "react";
import { 
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Divider,
	Grid,
} from "@mui/material";

const products = [
	{
		'name': 'Product #1',
		'price': '$0.99'
	},
	{
		'name': 'Product #2',
		'price': '$0.99'
	},
	{
		'name': 'Product #3',
		'price': '$0.99'
	},
	{
		'name': 'Product #4',
		'price': '$0.99'
	},
	{
		'name': 'Product #5',
		'price': '$0.99'
	},
	{
		'name': 'Product #6',
		'price': '$0.99'
	},
	{
		'name': 'Product #7',
		'price': '$0.99'
	},
	{
		'name': 'Product #8',
		'price': '$0.99'
	},
	{
		'name': 'Product #9',
		'price': '$0.99'
	},
]

const Dashboard = () => {
	return (
		<>
		<Typography variant="h3" sx={{ p: 1 }}>Products Grid</Typography>
		<Container maxWidth="lg" sx={{ p: (1, 0, 5) }}>
			<Grid container spacing={4}>
				{products.map(product => (
					<Grid item key={product.name} xs={12} sm={12} md={6} lg={4}>
						<Card>
							<CardMedia 
							image="https://picsum.photos/seed/picsum/500/600"
							title={product.name}
							sx={{ pt: '56.25%' }}
							/>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography variant="h5" gutterBottom>
									{product.name}
								</Typography>
								<Typography variant="h5">
									{product.price}
								</Typography>
							</CardContent>
							<Divider />
							<CardActions sx={{ p: 2, display: 'flex', justifyContent: 'space-evenly' }}>
								<Button size="medium" variant="contained" color="primary">View Product</Button>
								<Button size="medium" variant="outlined" color="primary">Edit Product</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
		</>
	);
}
 
export default Dashboard;