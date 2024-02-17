export interface CardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export const CardChooseUsLayout = (card: CardProps) => {
	return (
		<div className="div flex h-fit max-w-[277.5px] flex-col justify-center gap-[34px] rounded-3xl border px-[33px] py-[49px] md:h-full lg:h-auto ">
			<div>{card.icon}</div>
			<div className="flex flex-col gap-6 ">
				<div className="text-[28px] font-bold leading-[30.80px] text-white">
					{card.title}
				</div>
				<div className="font-normal leading-[27px] text-[#B7B4BB] xl:w-[211px]">
					{card.description}
				</div>
			</div>
		</div>
	);
};
