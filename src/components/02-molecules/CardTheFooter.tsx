import CardTheFooterLayout from "@/components/01-atoms/CardTheFooterLayout";

const CardsTheFooterData = [
	{
		title: "Quick Link",
		items: [
			{ label: "About", link: "/#" },
			{ label: "How it works", link: "/#" },
			{ label: "Roadmap", link: "/#" },
			{ label: "FAQ", link: "/#" },
		],
	},
	{
		title: "Community",
		items: [
			{ label: "Documentation", link: "/#" },
			{ label: "Web3Dev", link: "/#" },
			{ label: "LinkTree", link: "/#" },
		],
	},
];

export const CardsTheFooter = () => {
	return (
		<div className="grid grid-cols-2 gap-[60px] md:gap-[20px]">
			{CardsTheFooterData.map((card, index) => (
				<div key={index}>
					<CardTheFooterLayout title={card.title} items={card.items} />
				</div>
			))}
		</div>
	);
};

export default CardsTheFooter;
