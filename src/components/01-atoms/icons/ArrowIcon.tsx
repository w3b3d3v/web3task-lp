import React, { ButtonHTMLAttributes } from "react";

interface AnimatedArrowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: string;
}

export const ArrowIcon = ({ color }: AnimatedArrowProps) => {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="Vector"
				d="M3.25 0.5V2H12.6953L0.25 14.4453L1.30469 15.5L13.75 3.05469V12.5H15.25V0.5H3.25Z"
				fill={color ? color : "white"}
			/>
		</svg>
	);
};
