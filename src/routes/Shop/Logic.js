import { useState, useEffect } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../firebase";

const Logic = () => {
	const [anchorAccount, setAnchorAccount] = useState(null);
	const [anchorCategory, setAnchorCategory] = useState(null);
	const [category, setCategory] = useState("all products");
	const [products, setProducts] = useState([]);
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		getProducts();
		getFavorites();
	}, []);

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

	const handleMenuAccount = (event) => {
		setAnchorAccount(event.currentTarget);
	  };
	
	const handleCloseAccount = () => {
	setAnchorAccount(null);
	};

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
		anchorAccount,
		anchorCategory,
		category,
		favorites,
		products,
		handleCloseAccount,
		handleCloseCategory,
		handleMenuAccount,
		handleMenuCategory,
		toggleCategory
	}
}
 
export default Logic;