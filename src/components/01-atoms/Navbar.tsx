import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { navBarMenu } from ".";
import Link from "next/link";

export const Navbar = () => {
	const [open, setOpen] = useState<boolean>();
	return (
		<div className="flex flex-col">
			<div className="flex">
				<button
					onClick={() => {
						setOpen(!open);
					}}
				>
					{open ? <MenuIcon /> : <X />}
				</button>
			</div>
			{open && (
				<div className="border border-[#1d0939] bg-[#0f051d] text-lg font-bold md:gap-4 xl:gap-10">
					{navBarMenu.map((menuItem, index) => (
						<div key={index}>
							<Link href={menuItem.href}>{menuItem.title}</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
