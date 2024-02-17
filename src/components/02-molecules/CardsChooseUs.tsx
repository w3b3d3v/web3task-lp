import {
	CheckIcon,
	GlobeIcon,
	CardChooseUsLayout,
	CardProps,
	SystemCodeIcon,
	UserCardId,
} from "@/components/01-atoms";
import { cn } from "@/lib/utils";

const CardsChooseUsData: CardProps[] = [
	{
		icon: <GlobeIcon />,
		title: "DAOs",
		description: "Tool for organizations",
	},
	{
		icon: <UserCardId />,
		title: "Proof-of-Value",
		description: "Score system for measuring user results.",
	},
	{
		icon: <CheckIcon />,
		title: "NFT",
		description: "Work tokenization and portfolio registration.",
	},
	{
		icon: <SystemCodeIcon />,
		title: "Open Source",
		description: "Networking for users and projects.",
	},
];

export const CardsChooseUs = () => {
	return (
		<div className="grid gap-[30px] md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 xl:grid-rows-4  ">
			{CardsChooseUsData.map((card, index) => (
				<div
					key={index}
					className={cn([
						{
							" lg:row-start-0 flex lg:row-span-2 lg:items-center xl:row-span-3 xl:items-end":
								index % 2 != 0,
						},
					])}
				>
					<CardChooseUsLayout
						key={index}
						icon={card.icon}
						title={card.title}
						description={card.description}
					/>
				</div>
			))}
		</div>
	);
};
