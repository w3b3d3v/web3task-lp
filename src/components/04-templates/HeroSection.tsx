import { CardHero, TheHeader } from "@/components/02-molecules";

export const HeroSection = () => {
	return (
		<section className="flex w-full flex-col">
			<TheHeader />
			<CardHero />
		</section>
	);
};
