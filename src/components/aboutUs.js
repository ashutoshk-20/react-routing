import React from 'react';
import { useNavigate } from 'react-router-dom';
import myImg from '../logo.svg';

export function AboutUs() {

    const navigate = useNavigate();

    const navigateToPage = () =>{
        navigate("/Home");
    };


    return (
        <div>
            <h1>About Us Component</h1>
            <img src = {myImg} align="right" height="80px" alt='' onClick={navigateToPage}/>
            <h3>Put your company information here</h3>
        </div>
    )
}
