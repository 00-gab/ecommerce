import React from 'react';

import {
	Box,
	Button,
	TextField,
	Typography,
} from '@mui/material';
import styles from '../styles';

const AddressAddForm = ({ 
	firstName, 
	lastName, 
	houseNo, 
	city, 
	country, 
	province, 
	zipCode, 
	phoneNo,
	loading, 
	onChangeAddForm, 
	onSubmitAddForm, 
	onClickCancel 
	}) => {
	return (
		<Box component='form' onSubmit={onSubmitAddForm} sx={styles.addressForm}>
			<Typography variant='body1'>Add an address</Typography>
			<TextField onChange={onChangeAddForm} value={firstName} name="first-name" label="First Name" variant="outlined" />
			<TextField onChange={onChangeAddForm} value={lastName} name="last-name" label="Last Name" variant="outlined" />
			<TextField onChange={onChangeAddForm} value={houseNo} name="house-no" label="House no. & Street" variant="outlined" />
			<TextField onChange={onChangeAddForm} value={city} name="city" label="City" variant="outlined" />
			<TextField onChange={onChangeAddForm} value={country} name="country" label="Country" variant="outlined" />
			<TextField onChange={onChangeAddForm} value={province} name="province" label="Province" variant="outlined" />
			<TextField onChange={onChangeAddForm} value={zipCode} name="zip-code" label="Zip Code" variant="outlined" />
			<TextField onChange={onChangeAddForm} value={phoneNo} name="phone-no" label="Phone No." variant="outlined" />
			<Button disabled={loading} type='submit' variant='contained'>Submit</Button>
			<Button disabled={loading} onClick={onClickCancel} variant='outlined'>Cancel</Button>
		</Box>
	);
}
 
export default AddressAddForm;