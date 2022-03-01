import { 
	doc, 
	updateDoc, 
	deleteDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";

const CartLogic = () => {	
	const incrementCartItem = async (id, quantity) => {
		const docRef = doc(db, "cart", id);
		await updateDoc(docRef, { quantity: quantity + 1 });
	}

	const decrementCartItem = async (id, quantity) => {
		if (quantity <= 0) return;
		const docRef = doc(db, "cart", id);
		await updateDoc(docRef, { quantity: quantity - 1 });
	}

	const deleteCartItem = async (id) => {
		const docRef = doc(db, "cart", id);
		await deleteDoc(docRef);
	}

	return {
		decrementCartItem,
		deleteCartItem,
		incrementCartItem,
	}
}
 
export default CartLogic;