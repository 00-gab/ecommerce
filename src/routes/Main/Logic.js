import { useEffect, useState } from "react";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { db } from "../../firebase";

const Logic = () => {
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const collectionRef = collection(db, "products");
		const q = query(collectionRef, where("favorite", "==", true));
		const unsub = onSnapshot(q, snapshot => {
			setFavorites(snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			})));
		});
		return unsub;
	}, []);

	return { favorites };
}
 
export default Logic;