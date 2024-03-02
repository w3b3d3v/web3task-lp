import {
	HeroSection,
	PartnersSection,
	WhyChooseUsSection,
	HowItWorksSection,
	RoadmapSection,
} from "@/components/04-templates";
import { TheFooterSection } from "@/components/04-templates/TheFooterSection";

export default function Home() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<HeroSection />
			<PartnersSection />
			<WhyChooseUsSection />
			<HowItWorksSection />
			<RoadmapSection />
			<TheFooterSection />
		</main>
	);
}
