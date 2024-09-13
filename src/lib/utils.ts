import { type ClassValue, clsx } from "clsx";
import { compareDesc, parseISO } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const sortBlogs = (blogs: any) => {
	return blogs
		.slice()
		.sort((a: { publishedAt: string }, b: { publishedAt: string }) =>
			compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)),
		);
};
