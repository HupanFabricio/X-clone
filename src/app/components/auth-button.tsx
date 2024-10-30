import { GitHubIcon } from "./icons";

interface AuthButtonProps {
	handleFunction: () => void; // Tipo de la función
}

export async function AuthButton({ handleFunction }: AuthButtonProps) {
	return (
		<button
			type="button"
			onClick={handleFunction}
			className="text-white max-w-[300px] justify-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
			<GitHubIcon />
			Iniciar sesion con Github
		</button>
	);
}
