import { createClient } from "@/utils/supabase/server";
import { AuthButton } from "../components/auth-button";
// import { handleSignIn, login, signup } from "./actions";
import { handleSignIn } from "./actions";
import { redirect } from "next/navigation";

export default async function LoginPage() {
	const supabase = await createClient();

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (user) {
		redirect("/");
	}
	return (
		<form className="flex flex-col items-center gap-4 max-w-[400px] m-auto justify-center min-h-screen">
			{/* <label htmlFor="email">Email:</label>
			<input id="email" name="email" type="email" />
			<label htmlFor="password">Password:</label>
			<input id="password" name="password" type="password" />
			<button formAction={login}>Log in</button>
			<button formAction={signup}>Sign up</button> */}
			<AuthButton handleFunction={handleSignIn} />
		</form>
	);
}
