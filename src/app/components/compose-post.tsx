"use client";

import { useRef } from "react";
import { Avatar } from "@nextui-org/react";
import { addPost } from "../actions/add-post-actions";

export default function ComposePost({
	userAvatarUrl,
}: {
	userAvatarUrl: string;
}) {
	const textareaRef = useRef(null);

	const handleInput = () => {
		const textarea = textareaRef.current;
		textarea.style.height = "auto"; // Resetea la altura
		textarea.style.height = `${textarea.scrollHeight}px`; // Ajusta la altura al scroll interno
	};

	return (
		<form
			action={addPost}
			className="flex flex-row space-x-2 border-b border-white/20 p-3">
			<Avatar radius="full" size="md" src={userAvatarUrl} />
			<div className="w-full flex flex-col space-y-2">
				<textarea
					ref={textareaRef}
					className="bg-transparent text-large outline-none overflow-y-hidden resize-none"
					name="content"
					rows={1}
					placeholder="¡¿Qué está pasando?!"
					onInput={handleInput}
				/>
				<button
					type="submit"
					className="bg-sky-500 px-5 py-2 rounded-full font-bold transition hover:bg-opacity-90 self-end">
					Postear
				</button>
			</div>
		</form>
	);
}
