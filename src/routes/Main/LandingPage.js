import {
	Box,
	Button,
	Divider,
	Grid,
	Paper,
	Typography,
	Stack,  
} from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const styles = {
	nav: {
		display: 'flex', 
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		p: '1em',
	},
	headerContainer: {
		display: 'flex', 
		flexDirection: 'column',
		color: 'white',
		height: { md: '25em', sm: '30em', xs: '40em' },
		width: '100%',
		background: '#1E1D1F',
	},
	headerContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '40%',
		m: '0 auto',
		mt: '5em',
		gap: 3,
	},
	actionButton: {
		display: 'flex', 
		flexWrap: 'wrap',
		justifyContent: 'center',
		gap: 1,
	},
	typographySpacing: {
		letterSpacing: '10px'
	},
	quoteSection: {
		height: { md: '20%', sm: '20%', xs: '20%' },
		width: { md: '50%', sm: '90%', xs: '90%' },
		m: '0 auto',
		color: '#1E1D1F',
		p: '5em 0',
	},
	imgSection: {
		width: '80%',
		height: '470px',
		m: '0 auto',
	},
	imgStyles: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	},
	mainContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: 3,
	},
	productContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		flexWrap: 'wrap'
	},
	productStyles: {
		display: 'flex',
		flexDirection: 'column',
		height: 'auto',
		maxWidth: 345,
		padding: '1rem',
	},
	productImageContainer: {
		width: '250px',
		height: '250px',
	},
	productSection: {
		pt: '2em', 
		width: '80%', 
		alignSelf: 'center', 
	},
	detailContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	footer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '15em',
		background: '#393B41',
		color: '#FCEAFF'
	},
	footerContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '8px'
	},
}


const LandingPage = () => {
	const stars = [1, 2, 3, 4, 5];
	const products = [
		{
			file: 'prod2',
			name: 'Yuqi Original',
			price: '$48',
			review: '102',
		},
		{
			file: 'prod3',
			name: 'Soyeon Medium Roast',
			price: '$49',
			review: '159',
		},
		{
			file: 'prod4',
			name: 'Miyeon Blend',
			price: '$32',
			review: '25',
		},
		{
			file: 'prod5',
			name: 'Shuhua Yeobun Blend',
			price: '$12',
			review: '93',
		},
	]

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
				<Box
					component="img"
					src="/assets/coffee3.jpg"
					sx={styles.imgStyles}
				/>
			</Box>
			<Box sx={styles.productSection}>
				<Typography variant="h4" align="center">OUR BEST SELLERS</Typography>
				<Typography variant="overline" display="block" align="center" gutterBottom>experience the unique taste of our coffee</Typography>
				<Box sx={styles.productContainer}>
					{products.map(product => (
						<Box key={product.file} sx={styles.productStyles}>
							<Paper elevation={0}>
								<Box component="div" sx={products.productImageContainer}>
									<Box 
									component="img"
									src={`/assets/${product.file}.png`} 
									alt="product" 
									width="250px"
									height="250px"
									/>
								</Box>
								<Box
								component="div"
								sx={styles.detailContainer}
								>
									<Typography variant="h5" sx={{ fontSize: '1.25rem' }}>{product.name}</Typography>
									<Box
									component="div"
									sx={{ display: 'flex', color: '#515C67' }}
									>
										{stars.map(star => (<StarIcon key={star} />))}
										<Typography color="inherit" align="center" sx={{ fontSize: '1.125rem' }}>{`${product.review} reviews`}</Typography>
									</Box>
									<Typography variant="h5" sx={{ fontSize: '1.125rem' }}>{product.price}</Typography>
								</Box>
							</Paper>
						</Box>
					))}
				</Box>
			</Box>
			<Box
			component="footer"
			sx={styles.footer}
			>
				<Box component="div" sx={styles.footerContent}>
					<CoffeeMakerIcon fontSize="large" />
					<Typography sx={{ letterSpacing: '2px' }}>&copy; 2022 Kape Yuqi</Typography>
				</Box>
			</Box>
		</Box>
	);
}
 
export default LandingPage;