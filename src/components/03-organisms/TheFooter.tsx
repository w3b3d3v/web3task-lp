"use client";
import Link from "next/link";
import { useScreenSize } from "@/hooks/useScreenSize";
import { CardsTheFooter } from "../02-molecules/CardTheFooter";
import Image from "next/image";
import web3tasklogo1 from "@/app/public/the-footer/web3tasklogo1.svg";
import twiter from "@/app/public/the-footer/twiter-icon.png";
import instagran from "@/app/public/the-footer/instagran-icon.png";
import vector from "@/app/public/the-footer/Vector.svg";

export const TheFooter = () => {
	const { isMobile, isDesktop } = useScreenSize();

	return (
		<div className="relative flex h-full w-full justify-center md:flex-row">
			<div className="relative flex h-[250px] w-[365px] items-center justify-center md:w-full">
				<div className="absolute left-[0px] top-[51px] flex items-center justify-center md:h-[51px]">
					<Image src={web3tasklogo1} alt={"Web3Task"} />
				</div>
				<div className="right[15px] absolute left-[15px] top-[113px] flex items-center justify-center text-[12px] text-[18px] font-normal text-[#B7B4BB] md:h-[64px] md:w-[320px] md:text-[18px]">
					Join our Discord channel or follow us on Twitter to keep up to date
					with our latest work and announcements.
				</div>
				<div className="absolute left-[15px] top-[225px] flex items-center justify-center md:top-[215px] md:h-[20px]">
					<Image src={twiter} alt={"Twiter Icon"} />
				</div>
				<div className="absolute left-[58px] top-[225px] flex items-center justify-center md:top-[215px] md:h-[24px]">
					<Image src={instagran} alt={"Instagran Icon"} />
				</div>
			</div>
			<div className="absolute top-[280px] flex w-full justify-center md:right-[15px] md:top-[50px] md:w-[auto]">
				<CardsTheFooter />
			</div>
			<div className="absolute bottom-[22px] left-[5px] right-[5px] flex w-full md:left-[15px] md:right-[15px] md:w-[auto]">
				<span className="text-[10px] md:text-[15px]">
					Copyright 2023 Web3Task
				</span>
				<span className="absolute right-[110px] text-[10px] md:right-[175px] md:text-[15px]">
					Privacy policy
				</span>
				<span className="absolute right-[40px] text-[10px] md:right-[68px] md:text-[14px]">
					Terms of Use
				</span>
				<div className="absolute right-[10px] flex h-[15px] items-center justify-center md:right-[15px] md:h-[22px] md:w-[22px]">
					<Image src={vector} alt={"Vector Icon"} width={15} height={8} />
				</div>
			</div>
		</div>
	);
};
