import "./button.style.scss";
const Button = ({ name, classname, ...otherProps }) => {
	return (
		<button className={`button-container ${classname}`} {...otherProps}>
			{name}
		</button>
	);
};

export default Button;
