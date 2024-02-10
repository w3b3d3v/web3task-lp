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
	const { isMobile, isTablet } = useScreenSize();

	return (
		<header className={cn("flex w-full justify-center")}>
			{!isMobile ? (
				<div
					className={cn(
						"flex h-[126px] items-center justify-center md:gap-14 lg:gap-[60px]  xl:w-[1336px] xl:gap-[78px]"
					)}
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
					<div className="flex h-[80px] xl:px-[90px]">
						{navBarMenu.map((menuItem, index) => (
							<div key={index} className="flex items-center">
								<Link
									href={menuItem.href}
									className="navbar-title flex h-[80px] flex-shrink items-center justify-center px-[16.69px] py-[30px] hover:opacity-60"
								>
									{menuItem.title}
								</Link>
							</div>
						))}
					</div>
					<div className="flex flex-col">
						{isTablet ? (
							<Button size={"sm"}>Open dApp</Button>
						) : (
							<Button>Open dApp</Button>
						)}
					</div>
				</div>
			) : (
				<div className="flex h-[126px] w-full items-center justify-between">
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
