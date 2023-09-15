import React, { useState } from "react"
import "./registerpage.css"
import { Link, useNavigate } from "react-router-dom";
import Validation from "../../SignUpValidation";
import axios from 'axios';
import logo from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/logo.png';




export default function RegisterPage() {
    const [values, setValues] = useState({
        userName: '',
        password: '',
        email: '',
        role: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.userName === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/login'); 
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="registerPage">
            <div className="registerPageNavBar">
                <div className="leftNavregisterPage">
                    <img className="logo" src={logo} alt="logo"></img>
                    <h3 style={{ color: 'white' }}>GPA WIZARD</h3>
                </div>
            </div>
            <div className="loginTextLoginPage">
                <p> SignUp </p>
            </div>
            <form className="registerForm" onSubmit={handleSubmit}>
                <div className="fieldsRegisterPage">
                    <div className="userNameDetailsRegisterPage">
                        <label className="registerFormLabel">UserName</label>
                       <label className="colon">:</label>
                        <input className="registerFormInput" type="email" name="userName" onChange={handleInput} ></input>
                        {errors.userName && <span className="text-danger"> {errors.userName}</span>}
                    </div>
                    <br></br>
                    <div className="passwordDetailsRegisterPage">
                        <label className="registerFormLabel">Password</label>
                        <label className="colon">:</label>
                        <input className="registerFormInput" type="password" name="password" onChange={handleInput}></input>
                        {errors.password && <span className="text-danger"> {errors.password}</span>}
                    </div>
                    <br></br>
                    <div className="emailRegisterPage">
                        <label className="registerFormLabel">Email</label>
                        <label className="colon">:</label>
                        <input className="registerFormInput" type="email" name="email" onChange={handleInput}></input>
                        {errors.email && <span className="text-danger"> {errors.email}</span>}
                    </div>
                    <br></br>
                    <div className="roleRegiserPage">
                        <label className="registerFormLabel">Role</label>
                        <label className="colon">:</label>
                        <input className="registerFormInput" type="text" name="role"></input>
                    </div>
                </div>
                <div className="buttonsRegisterPage">
                    
                    <button className="signUpButtonRegisterForm" type="submit" >SignUp</button>
                    <Link to="/login" className="link">
                        <button  className="logInButtonRegisterForm">
                        LogIn
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