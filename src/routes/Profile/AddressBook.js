import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import AddressItems from './AddressItems';
import AddressForm from './AddressForm';
import styles from './styles';

const AddressBook = () => {
	const [edit, setEdit] = useState(false);
	const [add, setAdd] = useState(false);

	const onClickEdit = () => setEdit(prev => !prev);
	const onClickAdd = () => setAdd(prev => !prev);

	return (
		<Box>
			<Box sx={styles.addressBookContainer}>
				{add ? <AddressForm onClickAdd={onClickAdd} /> : <AddressItems onClickEdit={onClickEdit} />}
				{/** edit ? addressEditForm : addressItems */}
			</Box>
			{!add && <Button onClick={onClickAdd} variant='outlined'>Add an Address</Button>}
		</Box>
	);
}
 
export default AddressBook;