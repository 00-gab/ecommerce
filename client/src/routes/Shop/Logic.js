import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const Logic = (uid) => {
	const [anchorCategory, setAnchorCategory] = useState(null);
	const [category, setCategory] = useState("all products");
	const [products, setProducts] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		getProducts();
		getFavorites();
	}, []);

	const addToCart = async (obj) => {
		const collectionRef = collection(db, "cart");
		const q = query(collectionRef, where("productId", "==", obj.id), where("uid", "==", uid));
		const snapshot = await getDocs(q);
		try {
			if (snapshot.docs.length === 1) {
				const quantity = snapshot.docs[0].data().quantity;
				const docRef = doc(db, "cart", snapshot.docs[0].id);
				await updateDoc(docRef, { quantity: quantity + 1  });
				setOpen(true);
			} else {
				const data = {
					...obj,
					productId: obj.id,
					quantity: 1,
					uid,
				}
				const docRef = await addDoc(collectionRef, data);
				if (docRef) setOpen(true);
			}
		} catch (error) {
			console.log(error);
		}
	}

	const handleClose = () => setOpen(false);

	const getProducts = async () => {
		const collectionRef = collection(db, "products");
		const q = query(collectionRef);
		onSnapshot(q, snapshot => {
			setProducts(snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			})));
		});
	}

	const getFavorites = async () => {
		const collectionRef = collection(db, "products");
		const q = query(collectionRef, where("favorite", "==", true));
		onSnapshot(q, snapshot => {
			setFavorites(snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			})));
		});
	}

	const handleMenuCategory = (event) => {
		setAnchorCategory(event.currentTarget);
	}

	const handleCloseCategory = () => {
		setAnchorCategory(null);
	}

	const toggleCategory = (event) => {
		const { target: { id } } = event;

		if (id === "favorites") setCategory("favorites");
		if (id === "all-products") setCategory("all products");
		setAnchorCategory(null);
	}

	return {
		anchorCategory,
		category,
		favorites,
		open,
		products,
		addToCart,
		handleClose,
		handleCloseCategory,
		handleMenuCategory,
		toggleCategory
	}
}
 
export default Logic;