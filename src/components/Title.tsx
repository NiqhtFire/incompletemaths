import React from "react";

interface Props {
	title: string;
}

const Title = ({ title }: Props) => {
	return (
		<span className="Title">
			{title}
		</span>
	);
};

export default Title;
