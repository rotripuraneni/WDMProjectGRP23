import './aboutuspage.css';
import React from "react";
import studentBanner from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/studentBanner.webp';
import logo from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/logo.png';

export default function AboutUsPage() {
    return (
        <div className="aboutUsPage">
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
            <div className="aboutUsDetails">
                <img className="aboutUsImage"  src={studentBanner} alt="aboutUs"></img>
                <div className="aboutUsContent">
                    <h4>About Us</h4>
                    <p>Greetings from GPA Wizard! We are committed to creating a vibrant, 
                    diverse learning environment where there are no boundaries to knowledge. 
                    Our goal is to equip learners of all ages and backgrounds with the knowledge and skills necessary
                    to succeed in a society that is always changing. No matter if you're a student trying to broaden your
                    horizons or a teacher looking for creative.
                    </p>
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