import { useState } from "react";
import { db, addModerator } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";


const Logic = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
		  return;
		}
		setOpen(false);
	};

	const onChange = (event) => {
		const { target: { name, value } } = event;
		if (name === "email") setEmail(value);
		if (name === "password") setPassword(value);
	}

	const handleAddMod = async (email, password) => {
		const collectionRef = collection(db, "users");
	
		await addDoc(collectionRef, { email, role: 'admin' });
		addModerator({ email, password });
	}

	const onSubmit = (event) => {
		event.preventDefault();
		setLoading(true);
		handleAddMod(email, password);
		setLoading(false);
		setOpen(true);
		setEmail("");
		setPassword("");
	}

	return { email, loading, open, password, handleClose, onChange, onSubmit };
}

export default Logic;