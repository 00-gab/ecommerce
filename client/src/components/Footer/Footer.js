import { Box, Typography } from "@mui/material"
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import styles from "./styles"

const Footer = () => {
	return (
		<Box component="footer" sx={styles.footer}>
			<Box component="div" sx={styles.footerContent}>
				<CoffeeMakerIcon fontSize="large" />
				<Typography sx={{ letterSpacing: '2px' }}>&copy; 2022 Kape Yuqi</Typography>
			</Box>
		</Box>
	);
}
 
export default Footer;