import React from "react"
import "./homepage.css" 
import { Link } from "react-router-dom";
import desktop from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/homePageDesktop.jpg';
import studentBanner from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/studentBanner.webp';
import logo  from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/logo.png';

export default function HomePage() {
    return (
        <div className="homePage">
            <div className="homePageNavBar">
                <div className="leftNavHomePage">
                    <img className="logo" src={logo} alt="logo"></img>
                    <h3 style={{color:'white'}}>GPA WIZARD</h3>
                </div>
                <div className="centerNavHomePage">

                </div>
                <div className="rightNavHomePage">
                    <ul className="navHomePageList">
                        <Link className="navHomePageListItem" to="/register">
                            <li ><p style={{ color: 'white' }}>SignUp</p></li>
                        </Link>
                        <Link className="navHomePageListItem" to="/login">
                            <li ><p style={{ color: 'white' }}>LogIn</p></li>
                        </Link>
                    </ul>
                </div>
            </div>

            <div className="programDescription">
                <h3 className="programDescriptionTitle">Master of Science Computer Science</h3>
                <p className="programDescriptionText">With a cutting-edge curriculum and distinguished faculty, our Master of Science in Computer Science program provides a unique educational experience. We give students the tools and information they need to succeed in cutting-edge subjects so they may thrive in the continuously changing digital industry   </p>
            </div>


            <div className="programObjectives">
                <div className="programObjectiveLeft">
                    <img src={desktop} alt="computer" />
                    <p className="programObjectiveTitle"><b>Program Objectives </b></p>
                    <ul className="objectivesListLeft">
                        <li className="objectivesListLeftItem"><p>Problem Solving and Critical Thinking</p></li>
                        <li className="objectivesListLeftItem"><p>Software Development Expertise</p></li>
                        <li className="objectivesListLeftItem"><p>Enterpreneurship and Innovation</p></li>
                    </ul>
                </div>

                <div className="programObjectiveRight">
                    <img src={studentBanner} alt="banner" />
                    <p className="performanceMeasureTitle"><b>Performance Measurement and Assessment </b></p>
                     <ul className="objectivesListRight">
                        <li className="objectivesListRightItem"><p>Assessment of Learning Outcomes </p></li>
                        <li className="objectivesListRightItem"><p>Practical Demonstration</p></li>
                        <li className="objectivesListRightItem"><p>Feedback and Self-Reflection</p></li>
                     </ul>  
                 </div>
            </div>

            <div className="bottomHomePage">
                <div className="contactInfoBottom">
                    <p className="contactInfoItem"  style={{ color: 'white' }}>Contact Us</p>
                    <p className="contactInfoItem" style={{ color: 'white' }}>About Us</p>
                </div>
                <div className="centerBottomHomePage">

                </div>
                <div className="socialMedia">
                    <p className="socialMediaText" style={{ color: 'white' }}>Social Media</p>
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