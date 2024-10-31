"use client";

import { useRef } from "react";

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
		<form className="flex flex-row space-x-2 border-b border-white/20 p-3">
			<img
				src={userAvatarUrl}
				alt="avatar_user"
				className="w-10 h-10 object-contain"
			/>
			<div className="w-full flex flex-col space-y-2">
				<textarea
					ref={textareaRef}
					className="bg-transparent text-large outline-none overflow-y-hidden resize-none"
					name="post"
					rows={1}
					placeholder="¡¿Qué está pasando?!"
					onInput={handleInput}
				/>
				<button className="bg-sky-500 px-5 py-2 rounded-full font-bold transition hover:bg-opacity-90 self-end">
					Postear
				</button>
			</div>
		</form>
	);
}
