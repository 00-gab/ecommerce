import { authService } from "../firebase";
import { signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
	const history = useHistory();

	const onLogOutClick = () => {
		signOut(authService);
		history.push("/");
	}

	return (
		<>
		<h1>This is the landing page</h1>
		<button onClick={onLogOutClick}>Log out</button>
		</>
	);
}
 
export default LandingPage;