import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { onClickDelete } from "../../utils";

const Logic = () => {
	const { id } = useParams();
	const history = useHistory();
	const [init, setInit] = useState(false);
	const [open, setOpen] = useState(false);
	const [product, setProduct] = useState([]);
	const stars = [1, 2, 3, 4, 5];

	useEffect(() => {
		getProduct();
	}, [])

	const confirmDelete = () => {
		onClickDelete(product.attachmentUrl, id)
		history.push("/");
	}
	
	const getProduct = async () => {
		setInit(false);
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		setProduct(docSnap.data());
		setInit(true);
	}

	const handleClose = () => setOpen(false);

	const handleOpen = () => setOpen(true);

	return {
		id,
		init,
		open,
		product,
		stars,
		confirmDelete,
		handleClose,
		handleOpen,
	}
}
 
export default Logic;