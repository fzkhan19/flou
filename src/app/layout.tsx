import Providers from "@/components/layout/Providers";
import Dockbar from "@/components/layout/dockbar";
import { JSON_LD, METADATA } from "@/constants/Metadata";
import { siteMetadata } from "@/lib/siteMetaData";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-in",
});

const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mr",
});

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={cn("", inter.variable, manrope.variable)}>
				<main className="no-scrollbar overflow-x-hidden overflow-y-scroll scroll-smooth">
					<Script
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
						type="application/ld+json"
					/>
					<h1 className="sr-only">
						Faiz Khan | Portfolio | Fullstack Developer
					</h1>
					<h1 className="sr-only">
						Faiz Khan | Next.js | Freelancer | Web Developer | Fullstack
						Developer | Portfolio | Web Development | Portfolio Website | Blog |
						Software Development | Personal Website | Software Engineer | React
						| Typescript | Node.js | Python | MongoDB | TailwindCSS | Express.js
					</h1>
					<h2>{siteMetadata.title}</h2>
					<h2 className="sr-only">{siteMetadata.description}</h2>
					<h2 className="sr-only">
						Next.js | React | Typescript | Node.js | TailwindCSS | Python | AWS
						| GCP | Docker | AI
					</h2>
					<Providers>
						{children}
						<Dockbar />
					</Providers>
				</main>
			</body>
		</html>
	);
}
