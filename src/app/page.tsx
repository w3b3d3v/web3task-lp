import { CardCallToAction } from "../components/02-molecules/CardCallToAction";
import {
	HeroSection,
	PartnersSection,
	WhyChooseUsSection,
	HowItWorksSection,
	RoadmapSection,
} from "@/components/04-templates";

export default function Home() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<HeroSection />
			<PartnersSection />
			<WhyChooseUsSection />
			<HowItWorksSection />
			<RoadmapSection />
			<CardCallToAction />
		</main>
	);
}
