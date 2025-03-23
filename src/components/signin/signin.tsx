import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './signin.css';
import stretch from "../assets/stretch.jpeg"; // Adjust the path if needed


const scrollToTop = () => {//Button allowing scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
const SignIn = () => { //Sign In function 
    const [buttonLabel, setButtonLabel] = useState("Submit"); //Click on button to submit contact request


    return (
        <div>
            <h2>Sign In</h2>
            <div id="signin">
                <label>Email:
                    <input
                        type="text" />
                </label>
                <label>Password :
                    <input
                        type="text" />
                </label>
                <button onClick={() => setButtonLabel("Submit sign in request")}>Submit</button>{/*By clicking on Sign In button you sign in */}
            </div>
            <br />
            <br />
            <center><button onClick={scrollToTop}>Return to Top</button></center>

            <hr />
        </div>
    )


}

export default SignIn