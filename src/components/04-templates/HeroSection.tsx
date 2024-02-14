import { CardHero, TheHeader } from "@/components/02-molecules";

export const HeroSection = () => {
	return (
		<section className="flex h-[1080px] w-full flex-col lg:h-[800px] xl:h-[1080px]">
			<TheHeader />
			<CardHero />
		</section>
	);
};
