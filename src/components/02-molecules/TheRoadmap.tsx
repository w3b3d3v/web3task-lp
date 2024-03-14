import Image from "next/image";
import roadmap from "@/app/public/roadmap/roadmap.png";
import { LineSeparatorIcon } from "@/components/01-atoms";

export const TheRoadmap = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="div mb-[100px] mt-[100px] flex justify-center">
				<LineSeparatorIcon />
			</div>
			<div>
				<span className="font-['Inter'] text-[32px] font-bold leading-[64px] text-white md:text-[64px]">
					The
				</span>
				<span className="bg-gradient-to-r from-violet-700 to-cyan-400 bg-clip-text text-[32px] font-bold leading-[64px] text-transparent md:text-[64px]">
					&nbsp;Roadmap
				</span>
			</div>
			<div>
				<Image src={roadmap} alt={"roadmap"} />
			</div>
			<div className="div mb-[100px] mt-[100px] flex justify-center">
				<LineSeparatorIcon />
			</div>
		</div>
	);
};
