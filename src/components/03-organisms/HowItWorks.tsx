import { CardsHowItWorks } from "@/components/02-molecules";

export const HowItWorks = () => {
	return (
		<div className="flex w-full flex-col items-center justify-center">
			<div>
				<span className="font-['Inter'] text-[32px] font-bold leading-[64px] text-white md:text-[64px]">
					How it
				</span>
				<span className="bg-gradient-to-r from-violet-700 to-cyan-400 bg-clip-text text-[32px] font-bold leading-[64px] text-transparent md:text-[64px]">
					&nbsp;works!
				</span>
			</div>
			<div>
				<CardsHowItWorks />
			</div>
		</div>
	);
};
