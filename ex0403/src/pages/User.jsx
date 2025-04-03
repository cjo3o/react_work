import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {signUp, supabase} from "../jslib/supa.js";
import Swal from 'sweetalert2';

function User(props) {
    const {userId} = useParams();
    console.log(userId);
    const sign = () => {
        const {data, error} = await signUp('')

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    return (
        <>
            <div>
                User
            </div>
            <button onClick={sign}>회원가입</button>
        </>

    );
}

export default User;