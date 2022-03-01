import React from 'react';
import {
	Box,
	Button,
	TextField,
	Typography,
} from '@mui/material';
import styles from '../styles';

const AddressEditForm = ({ loading, onClickCancel, selectedAddressObj, onChangeEdit, onSubmitEditForm }) => {
	return (
			<Box onSubmit={onSubmitEditForm} component='form' sx={styles.addressForm}>
				{selectedAddressObj && 
				<>
					<Typography variant='body1'>Edit address</Typography>
					<TextField 
						onChange={onChangeEdit} 
						value={selectedAddressObj.firstName} 
						name="firstName" 
						label="First Name" 
						variant="outlined" 
					/>
					<TextField 
						onChange={onChangeEdit} 
						value={selectedAddressObj.lastName} 
						name="lastName" 
						label="Last Name" 
						variant="outlined" 
					/>
					<TextField 
						onChange={onChangeEdit} 
						value={selectedAddressObj.houseNo} 
						name="houseNo" 
						label="House no. & Street" 
						variant="outlined" 
					/>
					<TextField 
						onChange={onChangeEdit} 
						value={selectedAddressObj.city} 
						name="city" 
						label="City" 
						variant="outlined" 
					/>
					<TextField 
						onChange={onChangeEdit} 
						value={selectedAddressObj.country} 
						name="country" 
						label="Country" 
						variant="outlined" 
					/>
					<TextField 
						onChange={onChangeEdit} 
						value={selectedAddressObj.province} 
						name="province" 
						label="Province" 
						variant="outlined" 
					/>
					<TextField 
						onChange={onChangeEdit} 
						value={selectedAddressObj.zipCode} 
						name="zipCode" 
						label="Zip Code" 
						variant="outlined" 
					/>
					<TextField 
						onChange={onChangeEdit} 
						value={selectedAddressObj.phoneNo} 
						name="phoneNo" 
						label="Phone No." 
						variant="outlined" 
					/>
					<Button disabled={loading} type='submit' variant='contained'>Update</Button>
					<Button disabled={loading} onClick={onClickCancel} variant='outlined'>Cancel</Button>
				</>
				}
			</Box>
	);
}
 
export default AddressEditForm;