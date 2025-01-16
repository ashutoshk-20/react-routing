import React from "react";
import { useNavigate } from "react-router-dom";


export function ContactUS() {

    const navigate = useNavigate();

    const navigateToPage = ()=>{
        navigate("/Home");
    };

    return (
        <div>
            <h1>Contact Us Component</h1>
            <h3>asdfghgfdsa@gmail.com</h3>
            <h3>Contact No. : 9322325646</h3>

            <button onClick={navigateToPage}>Back To Home</button>
        </div>
    )
}

