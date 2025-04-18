import {supabase} from "./supabaseClient.js";

export const getUsers = async () => {
    const users = await supabase.from("members").select();
    return users;
}

export const loginUser = async (email, password) => {
    console.log(email, password);

    const res = await supabase.from("members")
        .select()
        .eq('email', email)
        .limit(1);

    const {data} = res;
    if (data.length === 0) {
        return { message:"email"}
    } else {
        return {
            message:'ok',
            data: data[0]
        }
    }
}