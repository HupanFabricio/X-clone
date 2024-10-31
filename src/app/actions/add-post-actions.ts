"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData) => {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (user === null) return;

	const content = formData.get("content");

	if (content === null) return;

	console.log({ content });

	await supabase.from("posts").insert({ content, user_id: user.id });

	revalidatePath("/");
};
