"use client";
import Image from "next/image";
import ctabg from "@/app/public/call-to-action/ctabg.png";
import ethereum02 from "@/app/public/call-to-action/ethereum02.png";
import bitcoin01 from "@/app/public/call-to-action/bitcoin01.png";
import { ArrowIcon, Button } from "@/components/01-atoms";
import { useScreenSize } from "@/hooks/useScreenSize";

export const CardCallToAction = () => {
	const { isMobile, isTablet } = useScreenSize();
	return (
		<div className="relative flex h-[auto] w-full flex-col items-center">
			<div>
				<Image
					src={ctabg}
					alt={"ctabg"}
					style={{
						position: "absolute",
						left: 0,
						top: 0,
						zIndex: 1,
						border: 1,
					}}
				/>
			</div>
			<div className="absolute right-[20%] top-[37px] flex h-[25px] w-[25px] md:right-[15%] md:h-[40px] md:w-[40px]">
				<Image src={ethereum02} alt={"Ethereum Icon"} />
			</div>
			<div className="mt-[37px] flex w-[585px] flex-col items-center md:h-[192px]">
				<p className="flex text-[32px] font-bold leading-none text-white md:text-[96px]">
					Let&#039;s start
				</p>
				<p className=" flex bg-gradient-to-r from-violet-700 to-cyan-400 bg-clip-text text-[32px] font-bold text-transparent md:text-[96px] md:leading-[110px]">
					building
				</p>
			</div>
			<div className="md:mt-[46px]">
				{isMobile ? (
					<Button size={"sm"}>
						Open dApp
						{
							<div className="ml-1">
								<ArrowIcon />
							</div>
						}
					</Button>
				) : (
					<Button size={"lg"}>
						Open dApp
						{
							<div className="ml-2">
								<ArrowIcon />
							</div>
						}
					</Button>
				)}
			</div>
			<div className="absolute bottom-[10%] left-[20%] flex h-[25px] w-[25px] md:left-[15%] md:h-[40px] md:w-[40px]">
				<Image src={bitcoin01} alt={"Bitcoin Icon"} />
			</div>
		</div>
	);
};
