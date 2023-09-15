import React from "react";
import './contactpage.css';
import { Link } from "react-router-dom";
import 'R:/UTA/SEM-2/WDM/gpa-wizard/src/pages/homePage/homepage.css';
import contactUs from "R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/contactUs.png";
import logo from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/logo.png';


export default function ContactPage() {
    return (
    <div className="contactPage">
        <div className="homePageNavBar">
                <div className="leftNavHomePage">
                <img className="logo" src={logo} alt="logo"></img>
                <h3 style={{ color: 'white' }}>GPA WIZARD</h3>
            </div>
            <div className="centerNavHomePage">
            </div>
            <div className="rightNavHomePage">
                <ul className="navHomePageList">
                        <li className="navHomePageListItem" ><p style={{ color: 'white' }}>SignUp</p></li>
                        <li className="navHomePageListItem"><p style={{ color: 'white' }}>LogIn</p></li>
                </ul>
            </div>
        </div>
                <div className="contactInformation">
                    <div className="emptyForSpace">
                    </div>
                <fieldset>
                    <legend><b>Contact Us</b></legend>
                    <div className="contactDetails">
                        <div className="addressContactPage">
                            <i class="fa-solid fa-location-dot fa-xl"></i>
                            <p>701 S Nedderman Dr, Arlington, TX 76019</p>
                        </div>
                        <br></br>
                        <div className="phoneNoContactPage">
                            <i class="fa-solid fa-phone fa-xl"></i>
                            <p>+1 829-485-7283</p>
                        </div>
                        <br></br>
                        <div className="emailContactPage">
                            <i class="fa-regular fa-envelope fa-xl"></i>
                            <p>gpa@wizard.edu</p>
                        </div>
                        <br></br>   
                        <form className="contactForm">
                            <br></br>
                            <div className="emailDivContactPage">
                                <label className="emailLabelContactPage">Email:</label>
                                <input className="emailInputContactPage" type="text"></input>
                            </div>
                            <br></br>
                            <div className="msgDivContactPage">
                                <label className="msgLabelContactPage">Message:</label>
                                <textarea className="msgInputContactPage"></textarea>
                            </div>
                            <br></br>
                            <button className="buttonContactForm" type="accept">Submit</button>

                        </form>
                    </div>
                </fieldset>
                <div className="contactImage">
                    <img src={contactUs} alt="contact" />
                </div>
            </div>
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