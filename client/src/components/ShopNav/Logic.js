import { useState } from "react";
import { signOut } from "firebase/auth";
import { authService } from "../../firebase";
import { useHistory } from "react-router-dom";

const Logic = () => {
	const [anchorAccount, setAnchorAccount] = useState(null);
	const history = useHistory();

	const onLogOutClick = () => {
		signOut(authService);
		history.push("/");
	}

	const handleMenuAccount = (event) => {
		setAnchorAccount(event.currentTarget);
	  };
	
	const handleCloseAccount = () => {
	setAnchorAccount(null);
	};

	return {
		anchorAccount,
		handleCloseAccount,
		handleMenuAccount,
		onLogOutClick,
	}
}
 
export default Logic;