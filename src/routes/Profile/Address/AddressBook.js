import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import AddressItems from './AddressItems';
import AddressEditForm from './AddressEditForm';
import AddressAddForm from './AddressAddForm';
import AddressLogic from './AddressLogic';
import styles from '../styles';

const AddressBook = ({ userObj }) => {
	const {
		addForm,
		editForm,
		firstName,
		lastName,
		houseNo,
		city,
		country,
		province,
		zipCode,
		phoneNo,
		loading,
		selectedAddressObj,
		onChangeForm,
		onClickAddForm,
		onClickCancel,
		onClickEditForm,
		onSubmitAddForm,
		onChangeEdit,
		onSubmitEditForm,
	} = AddressLogic(userObj[0].uid);

	return (
		<Box>
			<Box sx={styles.addressBookContainer}>
				{editForm && 
					<AddressEditForm 
						selectedAddressObj={selectedAddressObj}
						loading={loading}
						onChangeEdit={onChangeEdit}
						onClickCancel={onClickCancel}
						onSubmitEditForm={onSubmitEditForm}
					/>
				}
				{addForm && 
					<AddressAddForm 
						firstName={firstName}
						lastName={lastName}
						houseNo={houseNo}
						city={city}
						country={country}
						province={province}
						zipCode={zipCode}
						phoneNo={phoneNo}
						loading={loading}
						onChangeAddForm={onChangeForm} 
						onSubmitAddForm={onSubmitAddForm} 
						onClickCancel={onClickCancel} 
					/>
				}
				{(!editForm && !addForm) &&  
					<AddressItems 
						onClickEditForm={onClickEditForm} 
						userObj={userObj} 
					/>
				}
			</Box>
			{(!editForm && !addForm) && <Button onClick={onClickAddForm} variant='outlined'>Add an Address</Button>}
		</Box>
	);
}
 
export default AddressBook;