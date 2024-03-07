"use client";
import Link from "next/link";
import { useScreenSize } from "@/hooks/useScreenSize";
import { CardsTheFooter } from "../02-molecules/CardTheFooter";
import Image from "next/image";
import web3tasklogo1 from "@/app/public/the-footer/web3tasklogo1.svg";
import twiter from "@/app/public/the-footer/twiterIcon.png";
import instagran from "@/app/public/the-footer/instagranIcon.png";
import arrowUp from "@/app/public/the-footer/arrowUp.svg";

export const TheFooter = () => {
	const { isMobile, isDesktop } = useScreenSize();

	return (
		<div className="flex h-full w-full flex-col">
			<div className="flex w-full flex-col md:h-[250px] md:flex-row">
				<div className="flex w-full flex-col">
					<div className="ml-4 mt-11 flex md:h-[51px]">
						<Image src={web3tasklogo1} alt={"Web3Task"} />
					</div>
					<div className="ml-4 mt-4 flex w-[305px] text-[12px] font-normal text-[#B7B4BB] md:h-[81px] md:w-[394px] md:text-[18px]">
						Join our Discord channel or follow us on Twitter to keep up to date
						with our latest work and announcements.
					</div>
					<div className="ml-4 mt-6 flex items-center gap-6 md:h-[28px] md:w-[80px]">
						<Image
							className="h-[20px] w-[20px]  md:h-[24px] md:w-[25px]"
							src={twiter}
							alt={"Twiter Icon"}
						/>
						<Image
							className="h-[20px] w-[25px] md:h-[24px] md:w-[30px]"
							src={instagran}
							alt={"Instagran Icon"}
						/>
					</div>
				</div>
				<div className="order-last flex h-full w-full flex-col md:w-[375px]">
					<div className="mr-4  mt-11 flex flex-col md:w-[350px]">
						<CardsTheFooter />
					</div>
				</div>
			</div>

			<div className="relative mt-14 h-[30px] w-full">
				<span className="absolute left-[10px] text-[10px] md:left-[15px] md:text-[15px]">
					Copyright 2023 Web3Task
				</span>
				<span className="absolute right-[105px] text-[10px] md:right-[150px] md:w-[120px] md:text-[15px]">
					Privacy policy
				</span>
				<span className="absolute right-[30px] text-[10px] md:right-[30px] md:w-[100px] md:text-[14px]">
					Terms of Use
				</span>
				<div className="md:0right-[15px] absolute right-[10px] top-[5px] h-[15px] w-[15px] items-center justify-center md:h-[10px]">
					<Image src={arrowUp} alt={"Arrow Up"} width={15} height={8} />
				</div>
			</div>
		</div>
	);
};
