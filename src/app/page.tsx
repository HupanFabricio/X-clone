import { createClient } from "@/utils/supabase/server";
import PostList from "./components/post-list";
import ComposePost from "./components/compose-post";
// import { redirect } from "next/navigation";

export default async function Home() {
	const supabase = await createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// if (!user) {
	// 	redirect("/login");
	// }

	const { data: posts } = await supabase.from("posts").select(`
      *,
      user:users (*)
    `);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<section className="max-w-[600px] border-x border-white/20 w-full">
				<ComposePost userAvatarUrl={user?.user_metadata?.avatar_url} />
				<PostList posts={posts} />
			</section>
		</main>
	);
}
