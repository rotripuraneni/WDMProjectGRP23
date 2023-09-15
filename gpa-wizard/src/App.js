import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/loginPage/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import StudentDashboard from "./pages/studentDashboard/StudentDashboard";
import ContactPage from "./pages/contactPage/ContactPage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import ForgotPasswordPage from "./pages/forgotPasswordPage/ForgotPasswordPage";

function App() {
    return (
       
             /*<Routes>
                <Route path='/' exact element={<HomePage />}> </Route>
                <Route path="/login" element={<LoginPage />}> </Route>
                <Route path="/register" element={<RegisterPage />}> </Route>
             </Routes>*/
        <Router>
            <ForgotPasswordPage />
        </Router>

      
  );
}

export default App;
