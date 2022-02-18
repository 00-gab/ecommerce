import { useState } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from 'firebase/auth';
import { db } from "../../firebase";

const Logic = (userDocId, auth) => {
	const [loading, setLoading] = useState(false);
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState(0);
	const [username, setUsername] = useState(auth.displayName || auth.email);

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
			const docRef = doc(db, "users", userDocId);
			await updateDoc(docRef, { displayName: username });
			await updateProfile(auth, { displayName: username });
			setLoading(false);
			setEdit(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
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