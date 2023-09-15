import './forgotpasswordpage.css';
import logo from 'R:/UTA/SEM-2/WDM/gpa-wizard/src/Images/logo.png';

export default function ForgotPasswordPage() {
    return (
        <div className="forgotPasswordPage">
            <div className="homePageNavBar">
                <div className="leftNavHomePage">
                    <img className="logo" src={logo} alt="logo"></img>
                    <h3 style={{ color: 'white' }}>GPA WIZARD</h3>
                </div>
                <div className="centerNavHomePage">

                </div>
                <div className="rightNavHomePage">
                    <ul className="navHomePageList">
                        <li className="navHomePageListItem"><p style={{ color: 'white' }}>SignUp</p></li>
                        <li className="navHomePageListItem" ><p style={{ color: 'white' }}>LogIn</p></li>
                    </ul>
                </div>
            </div>
                <div className="loginTextLoginPage">
                    <p> Forgot Password </p>
                </div>
                <form className="forgotPasswordForm">
                <div className="fieldsforgotPasswordPage">
                    <div className="emailForgotPasswordForm">
                        <label className="forgotPasswordFormLabel">Email Id</label>
                            <label className="colon">:</label>
                        <input className="forgotPasswordFormInput" type="email"></input>
                        </div>
                        <br></br>
                    <div className="newPasswordforgotPasswordForm">
                        <label className="forgotPasswordFormLabel">New Password</label>
                            <label className="colon">:</label>
                        <input className="forgotPasswordFormInput" type="password"></input>
                        </div>
                        <br></br>
                    <div className="confirmPasswordforgotPasswordForm">
                        <label className="forgotPasswordFormLabel">Confirm Password</label>
                            <label className="colon">:</label>
                        <input className="forgotPasswordFormInput" type="password" ></input>
                        </div>
                    </div>
                <div className="buttonsforgotPasswordPage">

                    <button className="cancelButtonforgotPasswordForm" type="submit" >Cancel</button>

                    <button className="submitButtonforgotPasswordForm">
                                Submit
                            </button>

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