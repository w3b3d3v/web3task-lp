"use client";
import { CardsTheFooter } from "@/components/02-molecules";
import Image from "next/image";
import web3tasklogo1 from "@/app/public/the-footer/web3tasklogo1.svg";
import twiter from "@/app/public/the-footer/twiterIcon.png";
import instagram from "@/app/public/the-footer/instagramIcon.png";
import arrowUp from "@/app/public/the-footer/arrowUp.svg";

export const TheFooter = () => {
	return (
		<div className="flex w-full flex-col md:h-[250px]">
			<div className="flex w-full flex-col-reverse justify-between md:flex-row">
				<div className="mt-4 flex flex-col gap-4 md:mt-0">
					<div className="flex items-start">
						<Image src={web3tasklogo1} alt={"Web3Task"} />
					</div>
					<div className="flex justify-center text-center text-[12px] font-normal text-[#B7B4BB] md:justify-normal md:text-start md:text-[18px]">
						<p className="flex w-[274px] md:h-[81px] md:w-[394px]">
							Join our Discord channel or follow us on Twitter to keep up to
							date with our latest work and announcements.
						</p>
					</div>
					<div className="flex items-center justify-center gap-6 md:h-[28px] md:w-[80px] md:justify-start">
						<Image
							className="h-[20px] w-[20px]  md:h-[24px] md:w-[25px]"
							src={twiter}
							alt={"Twiter Icon"}
						/>
						<Image
							className="h-[20px] w-[25px] md:h-[24px] md:w-[30px]"
							src={instagram}
							alt={"Instagram Icon"}
						/>
					</div>
				</div>
				<div className="flex flex-col md:w-[350px]">
					<CardsTheFooter />
				</div>
			</div>
			<div className="mt-12 flex w-full flex-col-reverse items-center justify-between text-[#B7B4BB] md:flex-row md:items-start">
				<div className="flex text-[15px] text-[#B7B4BB]">
					Copyright 2023 Web3Task
				</div>
				<div className="flex flex-row items-center gap-5 ">
					<div>Privacy policy</div>
					<div>Terms of Use</div>
					<div className="h-[15px] w-[15px] items-center justify-center md:h-[10px]">
						<Image src={arrowUp} alt={"Arrow Up"} width={15} height={8} />
					</div>
				</div>
			</div>
		</div>
	);
};
