import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Logic = () => {
	const [products, setProducts] = useState([]);
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState({});

	const handleOpen = (url, id) => {
		setSelected({ url, id })
		setOpen(true)
	};

	const handleClose = () => {
		setSelected({});
		setOpen(false)
	};

	useEffect(() => {
		const collectionRef = collection(db, "products");
		const q = query(collectionRef, orderBy("stocks", "desc"));
		const unsub = onSnapshot(q, snapshot => {
			setProducts(snapshot.docs.map(doc => ({
				...doc.data(),
				id: doc.id,
			})))
		})
		return unsub; 
	}, [])

	return {
		open,
		products,
		selected,
		handleClose,
		handleOpen,
	}
}
 
export default Logic;