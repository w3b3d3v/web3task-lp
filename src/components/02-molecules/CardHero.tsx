"use client";
import { ArrowIcon, Button } from "@/components/01-atoms";
import personIcon01 from "@/app/public/hero/personIcon01.png";
import personIcon02 from "@/app/public/hero/personIcon02.png";
import personIcon03 from "@/app/public/hero/PersonIcon03.png";
import moneyIcon from "@/app/public/hero/moneyIcon.png";
import clockIcon from "@/app/public/hero/clockIcon.png";
import rocketIcon from "@/app/public/hero/rocketIcon.png";
import cardTaskReview from "@/app/public/hero/cardTaskReview.png";
import cursorIcon from "@/app/public/hero/cursorIcon.png";
import cardTakProgress from "@/app/public/hero/cardTakProgress.jpg";
import cardTaskDone from "@/app/public/hero/cardTaskDone.jpg";
import mailIcon from "@/app/public/hero/mailIcon.png";
import linesGreen from "@/app/public/hero/linesGrey.png";

import Image from "next/image";
import { useScreenSize } from "@/hooks/useScreenSize";
import { cn } from "@/lib/utils";

export const CardHero = () => {
	const { isMobile, isTablet } = useScreenSize();
	return (
		<div className="flex w-full items-center justify-center">
			<div className=" grid lg:grid-cols-2 xl:mt-[70px] xl:h-[560px] xl:w-[1232px]">
				<div
					className={cn([
						"ml-20 flex flex-col items-center justify-center md:my-4 lg:items-start lg:justify-normal",
						isMobile && "ml-0",
					])}
				>
					<div className=" xl:w-[518px]">
						<p
							className={cn([
								" font-bold leading-[72px] text-white md:text-5xl lg:text-7xl",
								isMobile && "items-center text-center text-4xl",
							])}
						>
							The on-chain Git Hub is here
						</p>
					</div>
					<div
						className={cn([
							"md:mt-4 md:text-center lg:text-start xl:mt-6 xl:w-[620px]",
							isMobile &&
								"mt-3 items-center justify-center text-center text-lg",
						])}
					>
						<p
							className={cn([
								"font-normal leading-9 text-[#B7B4BB] md:text-lg lg:text-2xl",
							])}
						>
							Spend less money in projects while providing a learning curve for
							students worldwide.
						</p>
					</div>
					<div className="mt-[36px] lg:ml-[23.5px]">
						<Button size={"lg"}>
							Open dApp
							{
								<div className="ml-2">
									<ArrowIcon />
								</div>
							}
						</Button>
					</div>
					<div className="mt-[65px] flex gap-5 xl:h-[53px] xl:w-[255px]">
						<div
							className=" flex items-center justify-center"
							style={{ position: "relative", width: "144px", height: "53px" }}
						>
							<Image
								src={personIcon01}
								alt={"Person Icon"}
								width={48}
								height={48}
								style={{ position: "absolute", left: 0, top: 0, zIndex: 1 }}
							/>
							<Image
								src={personIcon02}
								alt={"Person Icon"}
								width={48}
								height={48}
								style={{
									position: "absolute",
									left: "24px",
									top: 0,
									zIndex: 2,
								}}
							/>
							<Image
								src={personIcon03}
								alt={"Person Icon"}
								width={48}
								height={48}
								style={{
									position: "absolute",
									left: "48px",
									top: 0,
									zIndex: 3,
								}}
							/>
						</div>
						<div className="flex h-full w-full flex-col justify-between ">
							<div className="flex h-[31px] w-[62px] items-center justify-center">
								<p className=" text-[32px] font-bold text-white">5k+</p>
							</div>
							<div className="flex h-[21px] w-[122px] items-center justify-center">
								<p className="text-[12px] font-normal leading-[21px] text-[#B7B4BB]">
									Community members
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="relative flex flex-col">
					<div className="absolute left-0 top-0 w-full">
						{isMobile ? (
							<Image
								alt="Lines Green Background"
								src={linesGreen}
								quality={100}
								fill
								style={{
									objectFit: "cover",
									backgroundPosition: "top left",
									backgroundSize: "cover",
								}}
							/>
						) : (
							<Image
								alt="Lines Green Background"
								src={linesGreen}
								fill={true}
								quality={100}
								style={{
									objectFit: "cover",
									backgroundPosition: "top left",
									backgroundSize: "cover",
								}}
							/>
						)}

						<div className="relative bottom-[20px] mt-[44px] flex justify-center xl:left-[80px]">
							<div className="relative">
								<div className="absolute bottom-[-40px] left-40">
									<Image
										src={cursorIcon}
										alt="Cursor Icon"
										width={133}
										height={117}
										className=""
									/>
								</div>
								<Image
									src={cardTaskReview}
									alt="In Review Card"
									width={254}
									height={187}
									className=""
								/>
							</div>
						</div>
						<div className="flex w-full items-center justify-end">
							<Image
								src={mailIcon}
								alt="Mail Icon"
								width={33}
								height={30}
								className="opacity-70"
							/>
						</div>

						<div
							className={cn([
								"relative bottom-[20px] flex h-full w-full items-center justify-center",
								isMobile && "bottom-[50px] opacity-40 md:left-[25px]",
							])}
						>
							<Image
								src={moneyIcon}
								alt="Money Icon"
								width={254}
								height={187}
								className=""
							/>
						</div>

						<div className="relative top-[-110px] flex w-full justify-between xl:left-[-50px]">
							<div className="relative lg:bottom-[-40px] xl:bottom-10">
								<div className="absolute bottom-24 left-10 md:left-28 lg:bottom-20">
									<Image
										src={clockIcon}
										alt="Clock Icon"
										width={155}
										height={155}
										className=""
									/>
								</div>
								<Image
									src={cardTakProgress}
									alt="In Progress Icon"
									width={254}
									height={187}
									className=""
								/>
							</div>

							<div className="relative top-[90px] flex">
								<div>
									<div className="absolute bottom-24 left-8 w-fit md:bottom-20 md:left-28">
										<Image
											src={rocketIcon}
											alt="Rocket Icon"
											width={243}
											height={229}
											className=""
										/>
									</div>
									<Image
										src={cardTaskDone}
										alt="Done Icon"
										width={254}
										height={187}
										className=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
