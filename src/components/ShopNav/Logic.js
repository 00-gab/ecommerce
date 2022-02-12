import { useState } from "react";
import { signOut } from "firebase/auth";
import { authService } from "../../firebase";

const Logic = () => {
	const [anchorAccount, setAnchorAccount] = useState(null);

	const onLogOutClick = () => {
		signOut(authService);
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