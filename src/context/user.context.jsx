import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener } from "../Utils/Firebase/firebase.utils";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };

	useEffect(() => {
		return onAuthStateChangeListener((user) => {
			setCurrentUser(user);
		});
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
