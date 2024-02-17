"use client";
import { useScreenSize } from "@/hooks/useScreenSize";
import { cn } from "@/lib/utils";

export interface CardHowItWorksProps {
	image: React.ReactNode;
	number: string;
	title: string;
	description: React.ReactNode;
}

export const CardHowItWorksLayout = (card: CardHowItWorksProps) => {
	const { isMobile } = useScreenSize();
	return (
		<div
			className={cn([
				"flex xl:h-[511px] xl:w-[1230px] xl:p-10",
				{
					"flex-row-reverse ": Number(card.number) % 2 === 0,
				},
				{ "flex-col": isMobile },
			])}
		>
			<div className="flex w-full ">{card.image}</div>
			<div className="flex w-full flex-col gap-8">
				<div className="flex flex-col gap-5 ">
					<div className="text-[19px] font-bold uppercase leading-[33px] text-violet-700">
						{card.number}
					</div>
					<div className="text-[40px] font-bold leading-[58.80px] text-white xl:w-[500px]">
						{card.title}
					</div>
				</div>
				<div className="flex text-[20px] font-normal leading-[30px] text-[#B7B4BB] ">
					{card.description}
				</div>
			</div>
		</div>
	);
};
