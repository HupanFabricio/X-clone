import { AuthButton } from "../components/auth-button";
import { handleSignIn, login, signup } from "./actions";

export default function LoginPage() {
	return (
		<form className="flex flex-col gap-4 max-w-2xl m-auto justify-center min-h-screen bg-slate-300/10">
			<label htmlFor="email">Email:</label>
			<input id="email" name="email" type="email" />
			<label htmlFor="password">Password:</label>
			<input id="password" name="password" type="password" />
			<button formAction={login}>Log in</button>
			<button formAction={signup}>Sign up</button>
			<AuthButton handleFunction={handleSignIn} />
		</form>
	);
}
