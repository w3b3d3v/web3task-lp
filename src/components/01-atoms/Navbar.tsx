import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { navBarMenu } from ".";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="relative flex flex-col">
			<button
				className="flex items-center justify-center"
				onClick={() => {
					setOpen(!open);
				}}
			>
				{open ? <X /> : <MenuIcon />}
			</button>
			{open && (
				<div
					className={cn([
						"absolute right-0 top-12 border border-[#1d0939] bg-[#0f051d] text-lg font-bold md:gap-4 xl:gap-10 ",
						open && " mb-[150px] opacity-100",
					])}
				>
					<button
						className="absolute right-0 top-0"
						onClick={() => {
							setOpen(false);
						}}
					/>
					{navBarMenu.map((menuItem, index) => (
						<div key={index}>
							<Link href={menuItem.href} className="hover:opacity-60">
								{menuItem.title}
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
