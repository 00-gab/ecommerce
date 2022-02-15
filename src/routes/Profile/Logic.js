import { useState } from 'react';

const Logic = () => {
	const [edit, setEdit] = useState(false);

	const [value, setValue] = useState(0);

	const onClickEdit = () => setEdit(true);

	const onClickCancel = () => setEdit(false);


	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	const orders = [
		{
			number: '245987',
			status: 1,
			remarks: 'In Progress',
			imgUrl: '/assets/prod2.png',
		},
		{
			number: '532282',
			status: 2,
			remarks: 'Delivered',
			imgUrl: '/assets/prod2.png',
		},
		{
			number: '328656',
			status: 0,
			remarks: 'Cancelled',
			imgUrl: '/assets/prod2.png',
		},
	];

	return {
		edit, 
		orders,
		value,
		onClickCancel,
		onClickEdit,
		handleChange,
	};
}
 
export default Logic;