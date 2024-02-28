"use client";
import { cn } from "@/lib/utils";
import { LineSeparatorIcon, CardMetrics } from "@/components/01-atoms";
import { CardsChooseUs } from "@/components/02-molecules";
import { useScreenSize } from "@/hooks/useScreenSize";

export const ChooseUs = () => {
	const { isMobile, isDesktop } = useScreenSize();

	return (
		<div>
			<div className="div mb-[100px] mt-[190px] flex justify-center">
				<LineSeparatorIcon />
			</div>
			<div
				className={cn([
					"div flex flex-col items-center justify-center gap-20",
					{ "px-2": isDesktop },
				])}
			>
				<div className="div flex w-full items-center justify-center xl:h-[64px]">
					<span className="font-['Inter'] text-[32px] font-bold leading-[64px] text-white md:text-[64px]">
						Why
					</span>
					<span className="bg-gradient-to-r from-violet-700 to-cyan-400 bg-clip-text text-[32px] font-bold leading-[64px] text-transparent md:text-[64px]">
						&nbsp;choose us?
					</span>
				</div>
				<div className="div flex justify-center xl:h-[587px]">
					<CardsChooseUs />
				</div>
			</div>
			<div
				className={cn([
					"div mb-[150px] flex justify-center sm:mt-[100px] lg:mt-0",
					{ "mt-[100px]": isMobile },
				])}
			>
				<LineSeparatorIcon />
			</div>
			<div className="flex items-center justify-center">
				<CardMetrics />
			</div>
		</div>
	);
};
