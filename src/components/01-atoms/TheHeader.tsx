import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const TheHeader = () => {
	return (
		<header
			className={cn(
				"flex items-center justify-center gap-20  lg:h-[126px] lg:w-[1336px]"
			)}
		>
			<div className="flex ">Web3Task</div>
			<div className="flex">Home How It Works Roadmap FAQ</div>
			<div className="flex">
				<Button size={"sm"}>Open dAPP</Button>
			</div>
		</header>
	);
};
