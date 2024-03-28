"use client";
import Image from "next/image";
import LaChain from "@/app/public/partners/lachain.png";
import metamask from "@/app/public/partners/metamask.png";
import polygon from "@/app/public/partners/polygon.png";
import solana from "@/app/public/partners/solana.png";
import theGraph from "@/app/public/partners/theGraph.png";
import thinkDev from "@/app/public/partners/thinkDev.png";
import web3dev from "@/app/public/partners/web3dev.png";
import { useScreenSize } from "@/hooks/useScreenSize";
import { cn } from "@/lib/utils";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/01-atoms/ui/carousel";

export const CardPartners = () => {
	const { isMobile } = useScreenSize();
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);
	return (
		<div
			className={cn([
				" flex h-[76px] items-center justify-center md:mx-[30px] lg:mx-[30px]",
				isMobile && "mx-[10px] mt-[20px] flex h-[76px]",
			])}
		>
			{isMobile ? (
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					plugins={[plugin.current]}
					className="w-full max-w-xs"
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
				>
					<CarouselContent>
						<CarouselItem className="basis-1/3">
							<div className="div flex h-[76px] items-center ">
								<Image src={web3dev} width={100} height={43} alt={"Web3dev"} />
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="div flex h-[76px] items-center ">
								<Image src={solana} width={128} height={25} alt={"Solana"} />
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="div flex h-[76px] items-center ">
								<Image
									src={metamask}
									width={195}
									height={77}
									alt={"Metamask"}
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="div flex h-[76px] items-center ">
								<Image
									src={theGraph}
									width={63}
									height={72}
									alt={"The Graph"}
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="div flex h-[76px] items-center ">
								<Image
									src={thinkDev}
									width={83}
									height={66}
									alt={"Think and Dev"}
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="div flex h-[76px] items-center ">
								<Image src={polygon} width={134} height={76} alt={"Polygon"} />
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/3">
							<div className="div flex h-[76px] items-center ">
								<Image src={LaChain} width={172} height={67} alt={"LaChain"} />
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			) : (
				<Carousel>
					<CarouselContent>
						<CarouselItem className="basis-1/7">
							<div className="div flex h-[76px] items-center ">
								<Image src={web3dev} width={150} height={53} alt={"Web3dev"} />
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className="div flex h-[76px] items-center ">
								<Image src={solana} width={178} height={25} alt={"Solana"} />
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className="div flex h-[76px] items-center ">
								<Image
									src={metamask}
									width={235}
									height={47}
									alt={"Metamask"}
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className="div flex h-[76px] items-center ">
								<Image
									src={theGraph}
									width={93}
									height={72}
									alt={"The Graph"}
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className="div flex h-[76px] items-center ">
								<Image
									src={thinkDev}
									width={113}
									height={66}
									alt={"Think and Dev"}
								/>
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className="div flex h-[76px] items-center ">
								<Image src={polygon} width={184} height={76} alt={"Polygon"} />
							</div>
						</CarouselItem>
						<CarouselItem className="basis-1/7">
							<div className="div flex h-[76px] items-center ">
								<Image src={LaChain} width={222} height={67} alt={"LaChain"} />
							</div>
						</CarouselItem>
					</CarouselContent>
				</Carousel>
			)}
		</div>
	);
};
