import {
	Box,
	Button,
	Paper,
	Typography,
	Stack,  
} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import Logic from "./Logic";
import styles from "./styles";


const LandingPage = () => {
	const stars = [1, 2, 3, 4, 5];
	const { favorites } = Logic();

	return (
		<Box component="div" sx={styles.mainContainer}>
			<Box component="div" sx={styles.headerContainer}>
				<Box component="div" sx={styles.nav}>
					<Box component="div">
						<Typography variant="h6" sx={{letterSpacing: '2px'}}>KAPE</Typography>
						<Typography variant="h6" sx={{letterSpacing: '3px'}}>YUQI</Typography>
					</Box>
					<Stack direction="row" spacing={2}>
						<Button color="inherit" href="/login">Login</Button>
						<Button color="inherit"><ShoppingBasketIcon /></Button>
					</Stack>
				</Box>
				<Box component="div" sx={styles.headerContent}>
					<Typography variant="h6" align="center" sx={styles.typographySpacing}>TAKE A JOURNEY TO THE WORLD'S MOST EXQUISITE COFFEE</Typography>
					<Box component="div" sx={styles.actionButton}>
						<Button color="inherit" variant="outlined">Shop Now</Button>
						<Button color="inherit" variant="outlined">Contact</Button>
					</Box>
				</Box>
			</Box>
			<Box component="section" sx={styles.quoteSection}>
				<Typography variant="h4" align="center" sx={{ letterSpacing: '2px' }}>"After the first three sips, I was 100% percent sure it was the best coffee I had ever tasted."</Typography>
			</Box>
			<Box component="section" sx={styles.imgSection}>
				<Box component="img" src="/assets/coffee3.jpg" sx={styles.imgStyles} />
			</Box>
			<Box sx={styles.productSection}>
				<Box sx={styles.productHeading}>
					<Typography variant="h4" align="center">OUR BEST SELLERS</Typography>
					<Typography variant="overline" display="block" align="center" gutterBottom>experience the unique taste of our coffee</Typography>
				</Box>
				<Box sx={styles.productsContainer}>
					{favorites.map(favorite => (
						<Box key={favorite.id} sx={styles.productContainer}>
							<Paper elevation={1} sx={styles.productStyles}>
								<Box component="div" sx={styles.productImageContainer}>
									<Box 
										component="img"
										src={favorite.attachmentUrl} 
										alt="product" 
										width="250px"
										height="250px"
									/>
								</Box>
								<Box component="div" sx={styles.detailContainer}>
									<Typography variant="h5" sx={{ fontSize: '1.25rem' }}>{favorite.name}</Typography>
									<Box component="div" sx={{ display: 'flex', color: '#515C67' }}>
										{stars.map(star => (<StarIcon key={star} />))}
										<Typography color="inherit" align="center" sx={{ fontSize: '1.125rem' }}>{`${Math.round(Math.random() * 100)} reviews`}</Typography>
									</Box>
									<Typography variant="h5" sx={{ fontSize: '1.125rem' }}>{favorite.price}</Typography>
								</Box>
							</Paper>
						</Box>
					))}
				</Box>
			</Box>
			<Box component="footer" sx={styles.footer}>
				<Box component="div" sx={styles.footerContent}>
					<CoffeeMakerIcon fontSize="large" />
					<Typography sx={{ letterSpacing: '2px' }}>&copy; 2022 Kape Yuqi</Typography>
				</Box>
			</Box>
		</Box>
	);
}
 
export default LandingPage;