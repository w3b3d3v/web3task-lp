import { HeroSection, PartnersSection } from "@/components/04-templates";

export default function Home() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-center">
			<HeroSection />
			<PartnersSection />
		</main>
	);
}
