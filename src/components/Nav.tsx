import React from "react";

interface Props {
	title: string;
}

const Nav = ({ title }: Props) => {
	return (
		<span className="Nav">
			{title}
		</span>
	);
};

export default Nav;
