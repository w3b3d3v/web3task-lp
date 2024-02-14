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

export const CardPartners = () => {
	const { isMobile } = useScreenSize();

	return (
		<div
			className={cn([
				" flex h-[76px] items-center justify-center gap-[24px] md:mx-[50px] lg:mx-[50px] lg:gap-[34px]",
				isMobile && "mx-[50px] mt-[50px] flex h-[650px] flex-col gap-[30px]",
			])}
		>
			<div className="div">
				<Image src={web3dev} width={185} height={53} alt={"Web3dev"} />
			</div>
			<div className="div">
				<Image src={solana} width={213} height={25} alt={"Solana"} />
			</div>
			<div className="div">
				<Image src={metamask} width={270} height={47} alt={"Metamask"} />
			</div>
			<div className="div">
				<Image src={theGraph} width={128} height={72} alt={"The Graph"} />
			</div>
			<div className="div">
				<Image src={thinkDev} width={148} height={66} alt={"Think and Dev"} />
			</div>
			<div className="div">
				<Image src={polygon} width={217} height={76} alt={"Polygon"} />
			</div>
			<div className="div">
				<Image src={LaChain} width={255} height={67} alt={"LaChain"} />
			</div>
		</div>
	);
};
