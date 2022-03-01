import { db, storage } from "./firebase";
import { ref, deleteObject } from "firebase/storage";
import { doc, deleteDoc } from "firebase/firestore";

export const onClickDelete = async (imageUrl, id) => {
	const imageRef = ref(storage, imageUrl);
	await deleteObject(imageRef);

	const docRef = 	doc(db, "products", id);
	await deleteDoc(docRef);
}

export const modalStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	height: 140,
	width: 350,
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 1,
	outline: 0,
}

export const styles = {
	"spacing": "1.125rem",
	"btn-padding": "0.5rem",
	"fs-primary": "1.125rem",
}