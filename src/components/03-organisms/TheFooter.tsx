"use client";
import Link from "next/link";
import { useScreenSize } from "@/hooks/useScreenSize";
import { CardsTheFooter } from "../02-molecules/CardTheFooter";
import Image from "next/image";
import web3tasklogo1 from "@/app/public/the-footer/web3tasklogo1.svg";
import twiter from "@/app/public/the-footer/twiter-icon.png";
import instagran from "@/app/public/the-footer/instagran-icon.png";

export const TheFooter = () => {
	const { isMobile, isDesktop } = useScreenSize();

	return (
		<div>
			<div className="relative flex flex-row justify-center">
				<div className="absolute left-[0px] flex items-center justify-center xl:h-[51px]">
					<Image src={web3tasklogo1} alt={"Web3Task"} />
				</div>
				<div className="absolute left-[0px] top-[62.65px] flex w-[380px] items-center justify-center text-[18px] font-normal text-[#B7B4BB] xl:h-[64px]">
					Join our Discord channel or follow us on Twitter to keep up to date
					with our latest work and announcements.
				</div>
				<div className="absolute left-[0px] top-[168px] flex items-center justify-center xl:h-[20px]">
					<Image src={twiter} alt={"Twiter Icon"} />
				</div>
				<div className="absolute left-[43px] top-[168px] flex items-center justify-center xl:h-[24px]">
					<Image src={instagran} alt={"Instagran Icon"} />
				</div>
				<div className="absolute right-[0px] flex justify-center">
					<CardsTheFooter />
				</div>
			</div>
		</div>
	);
};
