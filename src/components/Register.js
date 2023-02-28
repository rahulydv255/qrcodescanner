import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import "./LoginStyle.css";

function Register() {
    const [errorMessages, setErrorMessages] = useState({});
    const [userData, setUserData] = useState({
        Name: "",
        Email:"",
        MobileNumber:"",
        Password:""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    const onTextChange=(e)=>{
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://localhost:44347/api/SaveUserData",userData)
        .then(res=>{
            alert("User Register Successfully. Please Login Again To Enter")
            navigate("/login")
        })
        .catch(err => console.log(err))
    }

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label className='formLbl'>Name </label>
                    <input type="text" onChange={onTextChange} name="Name" required />
                    
                </div>

                <div className="input-container">
                    <label className='formLbl'>Email</label>
                    <input type="text" onChange={onTextChange} name="Email" required />
                    
                </div>

                <div className="input-container">
                    <label className='formLbl'>Mobile Number </label>
                    <input type="text" onChange={onTextChange} name="MobileNumber" required />
                    
                </div>
                <div className="input-container">
                    <label className='formLbl'>Password </label>
                    <input type="password" onChange={onTextChange} name="Password" required />
                    
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
                <p className="loginregiLink">Alredy Have Account? Click to <Link to="/login"><b>Login</b></Link></p>
            </form>
        </div>
    );
    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Register</div>
                {isSubmitted ? <div>User is successfully Registered</div> : renderForm}
            </div>
        </div>
    );
}

export default Register
