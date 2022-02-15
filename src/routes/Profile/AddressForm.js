import React from 'react';
import {
	Box,
	Button,
	TextField,
	Typography,
} from '@mui/material';
import styles from './styles';

const AddressForm = ({ onClickAdd }) => {
	return (
		<Box component='form' sx={styles.addressForm}>
				<Typography variant='body1'>Add an address</Typography>
				<TextField label="First Name" variant="outlined" />
				<TextField label="Last Name" variant="outlined" />
				<TextField label="House no. & Street" variant="outlined" />
				<TextField label="City" variant="outlined" />
				<TextField label="Country" variant="outlined" />
				<TextField label="Province" variant="outlined" />
				<TextField label="Zip Code" variant="outlined" />
				<TextField label="Phone No." variant="outlined" />
				<Button type='submit' variant='contained'>Submit</Button>
				<Button onClick={onClickAdd} variant='outlined'>Cancel</Button>
		</Box>
	);
}
 
export default AddressForm;