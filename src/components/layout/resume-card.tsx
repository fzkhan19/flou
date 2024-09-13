"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
	logoUrl: string;
	altText: string;
	title: string;
	subtitle?: string;
	href?: string;
	badges?: readonly string[];
	period: string;
	description?: string;
}
export const ResumeCard = ({
	logoUrl,
	altText,
	title,
	subtitle,
	href,
	badges,
	period,
	description,
}: ResumeCardProps) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (description) {
			e.preventDefault();
			setIsExpanded(!isExpanded);
		}
	};

	return (
		<Link
			href={href || "#"}
			target="_blank"
			className="block cursor-pointer"
			onClick={handleClick}
		>
			<Card className="flex border-none bg-transparent shadow-none">
				<div className="-mt-1.5 flex-none">
					<Avatar className="m-auto size-12 border bg-muted-background dark:bg-foreground">
						<AvatarImage
							src={logoUrl}
							alt={altText}
							className="object-contain"
						/>
						<AvatarFallback className="object-contain">
							{altText[0]}
						</AvatarFallback>
					</Avatar>
				</div>
				<div className="group ml-4 flex-grow flex-col items-center">
					<CardHeader className="p-0">
						<div className="flex items-center justify-between gap-x-2 text-base">
							<h3 className="inline-flex items-center justify-center font-semibold text-xs leading-none sm:text-sm">
								{title}
								{badges && (
									<span className="inline-flex gap-x-1">
										{badges.map((badge, index) => (
											<Badge
												variant="secondary"
												className="align-middle text-xs"
												// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
												key={index}
											>
												{badge}
											</Badge>
										))}
									</span>
								)}
								<ChevronRightIcon
									className={cn(
										"size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
										isExpanded ? "rotate-90" : "rotate-0",
									)}
								/>
							</h3>
							<div className="min-w-[100px] text-right text-muted-foreground text-xs tabular-nums sm:text-sm md:min-w-auto">
								{period}
							</div>
						</div>
						{subtitle && (
							<div className="max-w-[200px] font-sans text-xs md:max-w-none">
								{subtitle}
							</div>
						)}
					</CardHeader>
					{description && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: isExpanded ? 1 : 0,

								height: isExpanded ? "auto" : 0,
							}}
							transition={{
								duration: 0.7,
								ease: [0.16, 1, 0.3, 1],
							}}
							className="mt-2 text-xs sm:text-sm"
						>
							<Markdown>{description}</Markdown>
						</motion.div>
					)}
				</div>
			</Card>
		</Link>
	);
};
