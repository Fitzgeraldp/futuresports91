import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './contactus.css'// Import the CSS file


const scrollToTop = () => {//Button to allow scrolling to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


const ContactUs = () => {
    const [buttonLabel, setButtonLabel] = useState("Submit"); //Click on button to submit contact request

    return (
        <div>
            <h2>Contact Us</h2>
            <form>
                <label>First Name:
                    <input
                        type="text" />
                </label>
                <label>Second Name:
                    <input
                        type="text" />
                </label>
                <label>Email:
                    <input
                        type="text" />
                </label>
                <label>Message:
                    <input type="text" />
                </label>

                <button onClick={() => setButtonLabel("Submit contact us message")}>Submit</button>{/*By clicking on Submit you send the message */}

                <br />

                <center><button onClick={scrollToTop}>Return to Top</button></center> {/*Button allows to scroll and return to the top of the page */}

            </form>
            <hr />

        </div>
    )
}


export default ContactUs