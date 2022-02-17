import { useState, useEffect } from 'react';
import { collection, doc, getDoc, addDoc, updateDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";


const AddressLogic = (uid) => {
	const [addresses, setAddresses] = useState([]);
	const [editForm, setEditForm] = useState(false);
	const [addForm, setAddForm] = useState(false);
	const [selectedAddress, setSelectedAddress] = useState('');
	const [selectedAddressObj, setSelectedAddressObj] = useState(null);

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [houseNo, setHouseNo] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [province, setProvince] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [phoneNo, setPhoneNo] = useState('');
	const [loading, setLoading] = useState(false);


	const onChangeForm = (event) => {
		const { target: { name, value } } = event;
		if (name === 'first-name') setFirstName(value);
		if (name === 'last-name') setLastName(value);
		if (name === 'house-no') setHouseNo(value);
		if (name === 'city') setCity(value);
		if (name === 'country') setCountry(value);
		if (name === 'province') setProvince(value);
		if (name === 'zip-code') setZipCode(value);
		if (name === 'phone-no') setPhoneNo(value);
	}

	const onSubmitAddForm = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			const collectionRef = collection(db, 'addresses');
			const data = {
				'firstName': firstName,
				'lastName': lastName,
				'houseNo': houseNo,
				'city': city,
				'country': country,
				'province': province,
				'zipCode': zipCode,
				'phoneNo': phoneNo,
				'uid': uid,
			}
			const docRef = await addDoc(collectionRef, data);
			if (docRef) {
				setFirstName('');
				setLastName('');
				setHouseNo('');
				setCity('');
				setCountry('');
				setProvince('');
				setZipCode('');
				setPhoneNo('');
				setAddForm(false);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			setLoading(false);
		}		
	}

	const onClickEditForm = (id) => {
		setSelectedAddress(id);
		setEditForm(true);
	}

	const onClickAddForm = () => setAddForm(true);

	const onClickCancel = () => {
		if (addForm) {
			setAddForm(false);
		}
		if (editForm) {
			setSelectedAddress('');
			setEditForm(false);
		}
		setFirstName('');
		setLastName('');
		setHouseNo('');
		setCity('');
		setCountry('');
		setProvince('');
		setZipCode('');
		setPhoneNo('');
	}

	useEffect(() => {
		const getAddress = async () => {
			const docRef = doc(db, "addresses", selectedAddress);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setSelectedAddressObj(docSnap.data());
			};
		}
		if (selectedAddress) {
			getAddress();
		}
	}, [selectedAddress])

	useEffect(() => {
		const collectionRef = collection(db, "addresses");
		const q = query(collectionRef, where("uid", "==", uid));
		const unsub = onSnapshot(q, snapshot => {
			setAddresses(snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			})))
		});
		return unsub;
	}, [])

	const onChangeEdit = (event) => {
		const { target: { name, value } } = event;
		setSelectedAddressObj(prev => ({...prev, [name]: value}))
	} 

	const onSubmitEditForm = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			const docRef = doc(db, "addresses", selectedAddress);
			await updateDoc(docRef, selectedAddressObj);
			setLoading(false);
			setEditForm(false);

		} catch (error) {
			if (error) {
				console.log(error);
				setLoading(false);
			}
		}
	}

	return {
		addForm,
		addresses,
		editForm,
		loading,
		selectedAddressObj,
		selectedAddress,
		onChangeForm,
		onClickAddForm,
		onClickCancel,
		onClickEditForm,
		onSubmitAddForm,
		onChangeEdit,
		onSubmitEditForm,
	}
}
 
export default AddressLogic;