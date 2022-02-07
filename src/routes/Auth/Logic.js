import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db, authService } from "../../firebase";
import { useHistory } from "react-router-dom";

const Logic = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const history = useHistory();

	const onChange = (event) => {
		const { target: { name, value } } = event;
		if (name === "email") setEmail(value);
		if (name === "password") setPassword(value);
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			if (newAccount) {
				const ok = await createUserWithEmailAndPassword(authService, email, password);
				if (ok) {
					let data = {
						email,
						role: 'user',
					}
					const collectionRef = collection(db, "users");
					await addDoc(collectionRef, data);
					history.push("/");
				}
			} else {
				const ok = await signInWithEmailAndPassword(authService, email, password);
				if (ok) {
					history.push("/");
				}
			}
		} catch (error) {
			setError(error.message);
		}
	}

	const onClickToggle = () => setNewAccount((prev) => !prev);

	return { 
		email, 
		error, 
		loading, 
		newAccount, 
		password, 
		onClickToggle,
		onChange,
		onSubmit,
	}
}
 
export default Logic;