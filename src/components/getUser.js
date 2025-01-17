import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


const baseURL = "https://6788a3762c874e66b7d5bd19.mockapi.io/v12/users/";
const initialObj = {
    id : 0,
    firstName : "",
    lastName : "",
};

export function GetUser(){
    const [user, setUser] = useState(initialObj);

    const {id} = useParams();

    useEffect(() => {
        axios.get(baseURL + id).then((response) => {
            setUser(response.data);
        });
    },[id]);

    if(!user) return "Not Found";

    return(
        <div>
            <h1>User Detail</h1>
            <h3>User ID : {user.id}</h3>
            <h3>First Name : {user.firstName}</h3>
            <h3>Last Name : {user.lastName}</h3>
        </div>

    )
}