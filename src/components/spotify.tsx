"use client";

import { IconBrandSpotifyFilled } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

export default function Spotify() {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const fetcher = (url: any) => fetch(url).then((r) => r.json());
	const { data } = useSWR("/api/getNowPlaying", fetcher);
	return (
		<>
			<section className="flex w-full justify-center pt-24">
				<Link
					target="_blank"
					rel="noreferrer noopener"
					className="flex items-center gap-2"
					href={
						data?.isPlaying
							? data.songUrl
							: "https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig"
					}
				>
					<div>
						{data?.isPlaying ? (
							<div className="flex items-center">
								<Image
									className="rounded-full shadow-sm"
									src={data?.albumImageUrl}
									alt={data?.album}
									width={36}
									height={36}
								/>
							</div>
						) : (
							<IconBrandSpotifyFilled
								size={24}
								color={"#1ED760"}
								strokeWidth={1.2}
							/>
						)}
					</div>

					<div className="flex flex-1 items-center gap-2 text-sm">
						<p className="font-medium">
							{data?.isPlaying ? data.title : "Not Listening"}
						</p>
						<span className="self-start opacity-50">–</span>
						<p className="opacity-50">
							{data?.isPlaying ? (
								<>
									{data.artist}
									<span className="text-[10px] opacity-40">
										{" "}
										&nbsp;(Listening on Spotify)
									</span>
								</>
							) : (
								"Spotify"
							)}
						</p>
					</div>
				</Link>
			</section>
		</>
	);
}
