"use client";

import { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Avatar,
	Button,
} from "@nextui-org/react";

export default function PostCard({
	content,
	userName,
	avatarUrl,
	userFullName,
}: {
	content: string;
	userName: string;
	avatarUrl: string;
	userFullName: string;
}) {
	const [isFollowed, setIsFollowed] = useState(false);

	return (
		<Card className="dark w-full">
			<CardHeader className="justify-between">
				<div className="flex gap-x-2">
					<Avatar radius="full" size="md" src={avatarUrl} />
					<div className="flex flex-col gap-y-2">
						<div className="flex flex-row gap-x-1 h-fit">
							<h4 className="font-bold leading-none text-default-600">
								{userFullName}
							</h4>
							<h5 className="tracking-tight text-default-400 text-small leading-none">
								@{userName}
							</h5>
						</div>
						<p className="leading-none">{content}</p>
					</div>
				</div>
			</CardHeader>

			<CardFooter className="gap-3">
				<div className="flex gap-1">
					<p className="font-semibold text-default-400 text-small">4</p>
					<p className=" text-default-400 text-small">Following</p>
				</div>
				<div className="flex gap-1">
					<p className="font-semibold text-default-400 text-small">
						97.1K
					</p>
					<p className="text-default-400 text-small">Followers</p>
				</div>
			</CardFooter>
		</Card>
	);
}
