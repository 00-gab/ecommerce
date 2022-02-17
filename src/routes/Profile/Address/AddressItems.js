import React, { useState, useEffect } from 'react';
import {
	Box,
	Button,
	Typography,
} from '@mui/material';
import AddressLogic from './AddressLogic';
import styles from '../styles'

const AddressItems = ({ onClickEditForm, userObj }) => {
	const { addresses } = AddressLogic(userObj[0].uid);

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
					<Button onClick={() => onClickEditForm(address.id)} variant='outlined'>Edit</Button>
				</Box>
			))}
		</>	
	);
}
 
export default AddressItems;