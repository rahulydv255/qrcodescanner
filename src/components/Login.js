import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link, Navigate, useNavigate } from "react-router-dom";

import "./LoginStyle.css";

function Login() {
    // React States
    const [userInfo, setUserInfo] = useState({})
    const [userData, setUserData] = useState({
        Email: "",
        Password: ""
    });


    const navigate = useNavigate();


    const onTextChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit =  (event) => {
        event.preventDefault();

         axios.post("https://localhost:44347/api/Login", userData)
            .then(res =>{
                    setUserInfo(res.data);
                    if(userData.Email === res.data.Email && userData.Password === res.data.Password){
                        navigate("/home",{state: userInfo} )
                        sessionStorage.setItem("User-Details", JSON.stringify(res.data));
                    }
                    else{
                        alert("invalid credentials")
                    }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-container">
                            <label className='formLbl'>Email </label>
                            <input type="text" onChange={onTextChange} name="Email" required />
                        </div>
                        <div className="input-container">
                            <label className='formLbl'>Password </label>
                            <input type="password" onChange={onTextChange} name="Password" required />
                        </div>
                        <div className="button-container">
                            <input type="submit" />
                        </div>
                        <p className="loginregiLink">Click here to <Link to="/register"><b>Register</b></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;