// CardsTheFooter.tsx
import React from "react";
import CardTheFooterLayout from "@/components/01-atoms/CardTheFooterLayout";

const CardsTheFooterData = [
	{
		title: "Quick Link",
		items: [
			{ label: "About", link: "/about" },
			{ label: "How it works", link: "/how-it-works" },
			{ label: "Roadmap", link: "/roadmap" },
			{ label: "FAQ", link: "/faq" },
		],
	},
	{
		title: "Community",
		items: [
			{ label: "Documentation", link: "/documentation" },
			{ label: "Web3Dev", link: "/web3dev" },
			{ label: "LinkTree", link: "/linktree" },
			{ label: "Contact", link: "/contact" },
		],
	},
];

export const CardsTheFooter = () => {
	return (
		<div className="grid gap-[20px] md:grid-cols-2">
			{CardsTheFooterData.map((card, index) => (
				<div key={index}>
					<CardTheFooterLayout
						title={card.title}
						items={card.items} // Passando os itens diretamente
					/>
				</div>
			))}
		</div>
	);
};

export default CardsTheFooter;
