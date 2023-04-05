import { createContext, useEffect, useState } from "react";
import { createUser, onAuthStateChangeByUser } from "../utils/firebase";

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = { currentUser, setCurrentUser };
	useEffect(() => {
		onAuthStateChangeByUser(async (user) => {
			if (user) {
				await createUser(user);
			}
			setCurrentUser(user);
		});
	}, []);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
