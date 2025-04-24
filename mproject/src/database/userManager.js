import {supabase} from "./supabaseClient.js";

export const deleteUsersByIds = async (ids) => {
    const res = await supabase.from('members')
        .delete()
        .in('id', ids);
    console.log(res);
}

export async function updateUserById(id, updatedData) {
    const {data, error} = await supabase.from('members')
        .update(updatedData)
        .eq('id', id);
}

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
        return {message: "email"}
    } else {
        return {
            message: 'ok',
            data: data[0]
        }
    }
}