import React from "react";
import { useFormik } from "formik";
import {useNavigate} from 'react-router-dom';

export const UserReg = () =>{

    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            email : "",password : "",uname : "",
        },

        onSubmit: (values) =>{
            alert("User Registered successfully");
            navigate("/Home");
        },
        
        validate: (values) =>{
            let errors = {};
            if(!values.uname){
                errors.uname = "Please Enter the User Name";
            }
            if(!values.password){
                errors.password = "Please Enter the password";
            }
            if(!values.email){
                errors.email = "Please Enter the email";
            }

            return errors;
        }
        
    });

    return(
        <form onSubmit={formik.handleSubmit} onKeyDown={formik.handleKeyDown}>
            <br/>
            <br/>
            <label htmlFor="uname">Username :&nbsp;&nbsp;</label>
            <input type="text" id="uname" onChange={formik.handleChange} value={formik.values.uname}/>&nbsp;&nbsp;
            <br/>
            <div>
                {
                    formik.touched.uname && formik.errors.uname ?(
                        <div style={{color:'red'}}> {formik.errors.uname} </div>
                    ) : null
                }
            </div>
            <br/>


            <label htmlFor="password">Password : &nbsp;&nbsp;</label>
            <input type="password" id="password" onChange={formik.handleChange} value={formik.values.password}/>&nbsp;&nbsp;
            <br/>
            <div>
                {
                    formik.touched.password && formik.errors.password ?(
                        <div style={{color:'red'}}> {formik.errors.password} </div>
                    ) : null
                }
            </div>
            <br/>


            <label htmlFor="email">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email :&nbsp;&nbsp;&nbsp;</label>
            <input type="emial" id="email" onChange={formik.handleChange} value={formik.values.email}/>&nbsp;&nbsp;
            <br/>
            <div>
                {
                    formik.touched.email && formik.errors.email ?(
                        <div style={{color:'red'}}> {formik.errors.email} </div>
                    ) : null
                }
            </div>
            <br/>

            <button style={{background: "green", color:"white"}}>Submit</button>
            <br/>
            <br/>
        </form>
    )

}