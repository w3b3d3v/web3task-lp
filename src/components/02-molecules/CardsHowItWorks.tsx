import {
	CardHowItWorksLayout,
	CardHowItWorksProps,
} from "@/components/01-atoms";
import manTasks from "@/app/public/how-it-works/manTasks.png";
import rewards from "@/app/public/how-it-works/rewards.png";
import wallet from "@/app/public/how-it-works/wallet.png";
import Image from "next/image";

export const CardsHowItWorks = () => {
	const CardsHowItWorksData: CardHowItWorksProps[] = [
		{
			image: <Image src={wallet} alt="wallet" />,

			number: "01.",
			title: "Setup and connect your wallet.",
			description:
				"Use Trust Wallet, Metamask or any wallet to connect to multiple chains the app.",
		},
		{
			image: <Image src={manTasks} alt="manTasks" />,

			number: "02.",
			title: "Find a task that matches your skills",
			description: (
				<>
					Make your offers and show why you deserve the job. <br />
					<br />
					Golden Tips: Deliver on time, Develop your profile and take care of
					your portfolio, the App has an on-chain scoring system to score
					contributions.
				</>
			),
		},
		{
			image: <Image src={rewards} alt="rewards" />,

			number: "03.",
			title: "Complete the task and earn rewards",
			description: (
				<>
					Instant payments, fast transactions and proven professional authority
					building. <br />
					<br />
					NFT to prove the specialties and scores of projects carried out in
					your profile.
				</>
			),
		},
	];

	return (
		<div className="p-10">
			{CardsHowItWorksData.map((card, index) => (
				<div key={index}>
					<CardHowItWorksLayout
						image={card.image}
						number={card.number}
						title={card.title}
						description={card.description}
					/>
				</div>
			))}
		</div>
	);
};
