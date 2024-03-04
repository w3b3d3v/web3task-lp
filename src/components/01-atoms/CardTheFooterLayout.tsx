import React from "react";

interface CardItem {
	label: string;
	link: string;
}

interface CardTheFooterProps {
	title: string;
	items: CardItem[]; // Alteração do tipo de items
}

const CardTheFooterLayout = ({ title, items }: CardTheFooterProps) => {
	return (
		<div className="flex h-fit max-w-[205px] flex-col justify-center px-[15px] md:h-full lg:h-auto ">
			<div className="flex flex-col gap-3 ">
				<div className="text-[18px] font-bold leading-[30.80px] text-white md:text-[22px] xl:w-full">
					{title}
				</div>
				{items.map((item, index) => (
					<a
						className="text-[12px] md:text-[18px]"
						key={index}
						href={item.link}
					>
						{item.label}
					</a>
				))}
			</div>
		</div>
	);
};

export default CardTheFooterLayout;
