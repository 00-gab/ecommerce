import React from 'react';
import {
	Box,
	Button,
	Typography,
} from '@mui/material';
import styles from './styles'

const AddressItems = ({ onClickEdit }) => {
	return (		
		<>
			<Box sx={styles.addressDetails}>
				<Typography sx={styles.fontStyles} variant='overline'>John Doe</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>1234 Maaruga St</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>Manibaug Paralaya</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>Porac</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>Pampanga</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>2000</Typography>
				<Typography sx={styles.fontStyles} variant='overline' gutterBottom>09612237183</Typography>
				<Button onClick={onClickEdit} variant='outlined'>Edit</Button>
			</Box>
			<Box sx={styles.addressDetails}>
				<Typography sx={styles.fontStyles} variant='overline'>John Doe</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>1234 Maaruga St</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>Manibaug Paralaya</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>Porac</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>Pampanga</Typography>
				<Typography sx={styles.fontStyles} variant='overline'>2000</Typography>
				<Typography sx={styles.fontStyles} variant='overline' gutterBottom>09612237183</Typography>
				<Button onClick={onClickEdit} variant='outlined'>Edit</Button>
			</Box>

		</>	
	);
}
 
export default AddressItems;