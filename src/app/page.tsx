import { createClient } from "@/utils/supabase/server";
import { handleSignOut } from "./login/actions";

export default async function Home() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data: post } = await supabase.from("posts").select(`
      *,
      user:users (id, name, user_name, avatar_url)
    `);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{user ? (
				<div className="gap-y-4 justify-center flex flex-col items-center">
					<h1 className="text-2xl font-bold">
						<span className="opacity-85">Bienvenido </span>
						<span className="opacity-100">
							{user.user_metadata.user_name}
						</span>
						<span className="opacity-85"> estas logueado 👋</span>
					</h1>
					<button
						onClick={handleSignOut}
						className="text-white max-w-[300px] justify-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
						Cerrar session
					</button>
				</div>
			) : (
				<div className="flex flex-col justify-center items-center gap-y-4">
					<h1 className="text-2xl font-bold">
						Hola X NO estas logueado😌
					</h1>

					<button className="text-white max-w-[300px] justify-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50  rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2 font-bold">
						ir al login
					</button>
				</div>
			)}

			<pre>{JSON.stringify(post, null, 2)}</pre>
		</main>
	);
}
