import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const useFetchProduct = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const collectionRef = collection(db, "products");
		const q = query(collectionRef, orderBy("stocks", "desc"));
		const unsub = onSnapshot(q, snapshot => {
			setProducts(snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			})));
		});
		return unsub;
	}, [])

	return products;
}
 
export default useFetchProduct;