import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, where, doc, updateDoc } from "firebase/firestore";
import { updateProfile } from 'firebase/auth';
import { db } from "../../firebase";

const Logic = (userDocId, auth) => {
	const [loading, setLoading] = useState(false);
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState(0);
	const [username, setUsername] = useState(auth.displayName || auth.email);
	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState([]);
	const [cartObject, setCartObject] = useState([]);

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

	// CART ITEM
	useEffect(() => {
		const collectionRef = collection(db, "cart");
		const q = query(collectionRef, where("uid", "==", auth.uid));
		const unsub = onSnapshot(q, snapshot => {
			setCartItems(snapshot.docs.map(doc => ({
				...doc.data(),
				cartId: doc.id,
			})))
		});
		return unsub;
	}, [auth.uid])

	// PRODUCT OBJECT
	useEffect(() => {
		let unsub;
		if (cartItems.length > 0) {
			let id = [];
			cartItems.forEach(item => id.push(item.productId));
			const collectionRef = collection(db, "products");
			const q = query(collectionRef, where("productId", "in", id));
			unsub = onSnapshot(q, snapshot => {
				setProducts(snapshot.docs.map(doc => ({
					...doc.data(),
				})))
			})
			return unsub;
		}
		return unsub;
	}, [cartItems])

	// CART OBJECT
	useEffect(() => {
		if (cartItems.length > 0) {
			let arr = [];
			products.forEach((product) => {
				const filtered = cartItems.filter(item => item.productId === product.productId);
				if (filtered) {
					const item = {
						...product, 
						quantity: filtered[0]?.quantity, 
						cartId: filtered[0]?.cartId,
					};
					arr.push({...item});
				}
			})
			setCartObject(arr)
		} else {
			setCartObject([]);
		}
	}, [products, cartItems])

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
		cartObject,
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