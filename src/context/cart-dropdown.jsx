import { createContext, useState } from "react";

export const CartDropDownContext = createContext({
	isOpen: false,
	setOpen: () => {},
});

export const CartDropDownProvider = ({ children }) => {
	const [isOpen, setOpen] = useState(false);

	const value = { isOpen, setOpen };

	return (
		<CartDropDownContext.Provider value={value}>
			{children}
		</CartDropDownContext.Provider>
	);
};
