import React, { useState, useEffect } from 'react';
import {
	Box,
	Button,
	Typography,
} from '@mui/material';
import styles from '../styles'

const AddressItems = ({ addresses, onClickEditForm, onClickDeleteAddress }) => {
	return (		
		<>
			{addresses.map(address => (
				<Box sx={styles.addressDetails} key={address.id}>
					<Typography sx={styles.fontStyles} variant='overline'>{`${address.firstName} ${address.lastName}`}</Typography>
					<Typography sx={styles.fontStyles} variant='overline'>{address.houseNo}</Typography>
					<Typography sx={styles.fontStyles} variant='overline'>{address.city}</Typography>
					<Typography sx={styles.fontStyles} variant='overline'>{address.province}</Typography>
					<Typography sx={styles.fontStyles} variant='overline'>{address.country}</Typography>
					<Typography sx={styles.fontStyles} variant='overline'>{address.zipCode}</Typography>
					<Typography sx={styles.fontStyles} variant='overline' gutterBottom>{address.phoneNo}</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
						<Button onClick={() => onClickEditForm(address.id)} variant='outlined'>Edit</Button>
						<Button onClick={() => onClickDeleteAddress(address.id)} variant='outlined' color='error'>Delete</Button>
					</Box>
				</Box>
			))}
		</>	
	);
}
 
export default AddressItems;