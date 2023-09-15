import React, { useState } from "react"
import "./loginpage.css"
import "../homePage/homepage.css"
import { Link,useNavigate } from "react-router-dom";
import Validation from "../../LoginValidation";
import axios from 'axios';
import logo from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/logo.png';





export default function LoginPage() {
    const [values, setValues] = useState({
        userName: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.userName === ""  && errors.password === "") {
            axios.post('http://localhost:8081/login', values)
                .then(res => {
                    if (res.data === "Success") {
                        navigate('/');
                    }
                    else {
                        alert("No Record Exists");
                    }
                    
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="loginPage">
            <div className="loginPageNavBar">
                <div className="leftNavLoginPage">
                    <img className="logo" src={logo} alt="logo"></img>
                    <h3 style={{ color: 'white' }}>GPA WIZARD</h3>
                </div>
            </div>
            <div className="loginTextLoginPage">
            <p> Login </p>
            </div>
            <form action="" onSubmit={handleSubmit} className="loginForm">
                <div className="fieldsLoginPage">
                    <div className="userNameDetailsLoginPage">
                        <label className="loginFormLabel">UserName</label>
                        <label className="colon">:</label>
                        <input onChange={handleInput} className="loginFormInput" type="email" name="userName"></input>
                        {errors.userName && <span className="text-danger"> {errors.userName}</span>}
                    </div>
                    <br></br>
                    <br></br>
                    <div className="passwordDetailsLoginPage">
                        <label className="loginFormLabel">Password  </label>
                        <label className="colon">:</label>
                        <input onChange={handleInput} className="loginFormInput" type="password" name="password"></input>
                        {errors.password && <span className="text-danger"> {errors.password}</span>}
                    </div>
                    <div className="forgotPasswordLink">
                        <a href="forgot">Forgot Password?</a>
                    </div>
                </div>
                <div className="buttonsLoginPage">
                    <button type="submit" className="logInButtonLoginForm">Login</button>
                    <Link to="/register" className="link">
                        <button  className="signUpButtonLoginForm">
                        SignUp
                        </button>
                    </Link>
                </div>
                 
            </form>
            <div className="bottomHomePage">
                <div className="contactInfoBottom">
                    <li className="navHomePageListItem"><p style={{ color: 'white' }}>ContactDetails</p></li>
                </div>
                <div className="centerBottomHomePage">

                </div>
                <div className="socialMedia">
                    <ul className="socialMediaIcons">
                        <li className="socialMediaIconsList"><i class="fa-brands fa-facebook"></i></li>
                        <li className="socialMediaIconsList"><i class="fa-brands fa-instagram"></i></li>
                        <li className="socialMediaIconsList"><i class="fa-brands fa-linkedin-in"></i></li>
                        <li className="socialMediaIconsList"><i class="fa-brands fa-x-twitter"></i></li>

                    </ul>

                </div>
            </div>
        </div>
    )
}