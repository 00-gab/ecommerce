import { useState } from 'react';
import { doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Logic = (userObj) => {
	const [loading, setLoading] = useState(false);
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState(0);
	const [username, setUsername] = useState(userObj[0].username || userObj[0].email);

	const onClickEdit = () => setEdit(prev => !prev);
	const onClickCancel = () => setEdit(false);

	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	const onChangeUsername = (event) => {
		setUsername(event.target.value);
	}

	const onSubmitUsername = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			const docRef = doc(db, "users", userObj[0].id);
			await updateDoc(docRef, { username });
			setLoading(false);
			setEdit(false);
		} catch (error) {
			if (error) {
				console.log(error);
				setLoading(false);
			}
		}
	}

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
		loading,
		orders,
		value,
		username,
		onChangeUsername,
		onClickCancel,
		onClickEdit,
		handleChange,
		onSubmitUsername,
	};
}
 
export default Logic;