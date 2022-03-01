import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, deleteObject, getDownloadURL, uploadString } from "firebase/storage";
import { db, storage } from "../../firebase";

const Logic = () => {
	const { id } = useParams();
	const history = useHistory();
	const [product, setProduct] = useState(null);
	const [attachment, setAttachment] = useState(null);
	const [productName, setProductName] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productStocks, setProductStocks] = useState("");
	const [originalImg, setOriginalImg] = useState(null);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getProduct();
	}, [])

	const getProduct = async() => {
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		setProduct(docSnap.data())
		setProductName(docSnap.data().name);
		setProductPrice(docSnap.data().price);
		setProductStocks(docSnap.data().stocks);
		setAttachment(docSnap.data().attachmentUrl);
		setOriginalImg(docSnap.data().attachmentUrl);
	}

	const onChange = (event) => {
		const { target: { name, value } } = event;
		if (name === 'product') setProductName(value);
		if (name === 'price') setProductPrice(value);
		if (name === 'stocks') setProductStocks(value);
	}

	const onFileChange = (event) => {
		const { target: { files } } = event;
		const imgFile = files[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			const { target: { result } } = e;
			setAttachment(result);
		}

		reader.onloadend = (finishedEvent) => {
			const { currentTarget: { result } } = finishedEvent;
			setAttachment(result);
		}

		reader.readAsDataURL(imgFile);
	}

	const onSubmit = async (event) => {
		event.preventDefault();
		if (attachment === null) {
			setError('Image is required...');
			return;
		}
		setLoading(true);
		let attachmentUrl = null;
		if (attachment === originalImg) {
			attachmentUrl = attachment;
		} else {
			// delete image reference from fbase storage
			if (originalImg !== null) {
				const imageRef = ref(storage, originalImg);
				await deleteObject(imageRef);
			}
			// upload the new one
			const attachmentRef = ref(storage, `admin/${uuidv4()}`);
			await uploadString(attachmentRef, attachment, 'data_url');
			attachmentUrl = await getDownloadURL(attachmentRef);
		}

		const data = {
			'name': productName,
			'price': productPrice,
			'stocks': productStocks,
			attachmentUrl,
		}
		const docRef = doc(db, "products", id);
		await updateDoc(docRef, data);
		setLoading(false);
		history.push("/")
	}

	return { 
		attachment, 
		error, 
		loading,
		product, 
		productName, 
		productPrice, 
		productStocks, 
		onChange,
		onFileChange,
		onSubmit,
	}
}
 
export default Logic;