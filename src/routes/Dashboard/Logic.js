import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

const useFetchProduct = () => {
	const [products, setProducts] = useState([]);

	const onClickAddToFavorite = async (id, favorite) => {
		const docRef = doc(db, "products", id);
		if (favorite === true) await updateDoc(docRef, { favorite: false });
		if (favorite === false) await updateDoc(docRef, { favorite: true });
		// console.log(id, favorite)
	}

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

	return { products, onClickAddToFavorite };
}
 
export default useFetchProduct;