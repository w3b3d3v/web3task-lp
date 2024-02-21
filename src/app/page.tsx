import {
	HeroSection,
	PartnersSection,
	WhyChooseUsSection,
	HowItWorksSection,
} from "@/components/04-templates";
import { CardStats } from "@/components/02-molecules";

export default function Home() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<HeroSection />
			<PartnersSection />
			<WhyChooseUsSection />
			<CardStats />
			<HowItWorksSection />
		</main>
	);
}
