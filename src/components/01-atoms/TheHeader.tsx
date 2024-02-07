"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
import web3TaskLogo from "@/app/public/web3TaskLogo.png";
import { useScreenSize } from "@/hooks/useScreenSize";
import { Navbar } from "./Navbar";
import Link from "next/link";

enum NavbarMenuTitle {
	HOME = "Home",
	HOW_IT_WORKS = "How it Works",
	ROADMAP = "Roadmap",
	FAQ = "FAQ",
}

interface NavBarMenuProps {
	title: NavbarMenuTitle;
	href: string;
}

export const navBarMenu: NavBarMenuProps[] = [
	{ title: NavbarMenuTitle.HOME, href: "/" },
	{ title: NavbarMenuTitle.HOW_IT_WORKS, href: "/" },
	{ title: NavbarMenuTitle.ROADMAP, href: "/" },
	{ title: NavbarMenuTitle.FAQ, href: "/" },
];

export const TheHeader = () => {
	const { isMobile } = useScreenSize();

	return (
		<header className={cn("flex w-full justify-center")}>
			{!isMobile ? (
				<div
					className={cn("flex items-center justify-center md:gap-14 xl:gap-24")}
				>
					<div className="flex items-center">
						<Image
							src={web3TaskLogo}
							alt={"Web3Task Logo"}
							width={80}
							height={80}
						/>
						<p className="text-lg font-normal tracking-widest">
							WEB<span className="text-[#00E1FF]">3</span>TASK
						</p>
					</div>
					<div className="flex text-lg font-bold md:gap-4 xl:gap-10">
						{navBarMenu.map((menuItem, index) => (
							<div key={index}>
								<Link href={menuItem.href}>{menuItem.title}</Link>
							</div>
						))}
					</div>
					<div className="flex flex-col">
						<Button className="rounded-2xl bg-gradient-to-tr from-[#6100FF] to-[#00FFD1] px-5">
							Open dAPP
						</Button>
					</div>
				</div>
			) : (
				<div className="flex w-full items-center justify-between">
					<div className="flex items-center">
						<Image
							src={web3TaskLogo}
							alt={"Web3Task Logo"}
							width={80}
							height={80}
						/>
						<p className="text-lg font-normal tracking-widest">
							WEB<span className="text-[#00E1FF]">3</span>TASK
						</p>
					</div>
					<div className="mr-4 ">
						<Navbar />
					</div>
				</div>
			)}
		</header>
	);
};
