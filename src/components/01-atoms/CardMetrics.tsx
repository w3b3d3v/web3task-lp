"use client";
import Image from "next/image";
import { useScreenSize } from "@/hooks/useScreenSize";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ether from "@/app/public/ether.png";
import bitcoin from "@/app/public/bitcoin.png";

export const CardMetrics = () => {
	const { isMobile, isTablet } = useScreenSize();

	return (
		<div
			className={cn([
				"flex flex-wrap  items-center justify-center gap-[24px] md:mx-[50px] lg:mx-[40px] lg:gap-[10px] xl:w-[1350px]",
				isMobile &&
					"mx-[50px] mt-[50px] flex h-[680px] flex-col flex-wrap gap-[30px]",
			])}
			style={{ marginBottom: "187px" }}
		>
			<div
				className={cn([
					"bottom-0 left-1 flex h-[157px] items-end justify-end",
					isMobile && "flex h-[23px] w-full items-center justify-center",
				])}
			>
				<Image
					src={bitcoin}
					alt="Cursor Icon"
					width={32}
					height={23}
					className=""
				/>
			</div>
			<div
				className={cn([
					"flex h-[111.176px] w-[307.5px] flex-col items-center justify-center border-r",
					isMobile && "border-0",
					isTablet && "border-0",
				])}
			>
				<div className="flex w-[62px] items-center justify-center">
					<p className="text-[50px] font-bold text-white md:text-[71px]">5k+</p>
				</div>
				<div className="top-8 flex h-full w-full items-center justify-center">
					<p className="text-[17px] font-normal text-[#B7B4BB]">
						Community members
					</p>
				</div>
			</div>
			<div
				className={cn([
					"flex h-[111.176px] w-[307.5px] flex-col items-center justify-center border-r",
					isMobile && "border-0",
					isTablet && "border-0",
				])}
			>
				<div className="flex w-[62px] items-center justify-center">
					<p className=" text-[50px] font-bold text-white md:text-[71px]">
						200
					</p>
				</div>
				<div className="top-8 flex h-full w-full items-center justify-center">
					<p className="text-[17px] font-normal text-[#B7B4BB]">Active Users</p>
				</div>
			</div>
			<div
				className={cn([
					"flex h-[111.176px] w-[307.5px] flex-col items-center justify-center border-r",
					isMobile && "border-0",
					isTablet && "border-0",
				])}
			>
				<div className="flex w-[6px] items-center justify-center">
					<p className=" text-[50px] font-bold text-white md:text-[69px]">4h</p>
				</div>
				<div className="top-8 flex h-full w-full items-center justify-center">
					<p className="text-[17px] font-normal text-[#B7B4BB]">
						Average Task Due Date
					</p>
				</div>
			</div>
			<div className="flex h-[111.176px] w-[307.5px] flex-col  items-center justify-center">
				<div className="flex w-[62px] items-center justify-center">
					<p className=" text-[50px] font-bold text-white md:text-[71px]">
						$15
					</p>
				</div>
				<div className="top-8 flex h-full w-full items-center justify-center">
					<p className="text-[17px] font-normal text-[#B7B4BB]">
						Average Reward per Task
					</p>
				</div>
			</div>
			<div
				className={cn([
					"right-1 top-0 flex h-[157px] items-start justify-end",
					isMobile && "flex h-[23px] w-full items-center justify-center",
				])}
			>
				<Image
					src={ether}
					alt="Cursor Icon"
					width={24}
					height={16}
					className=""
				/>
			</div>
		</div>
	);
};
