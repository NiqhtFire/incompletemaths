import React from "react";

interface Props {
	children: React.ReactNode;
}

const Navbar = (props: Props) => {
	return (
		<div className="Navbar">
			{props.children}
		</div>
	);
};

export default Navbar;