import React, { useState } from 'react'; // Import TSX file
import './footer.css'; // Import the CSS file

const scrollToTop = () => {//Button allowing to scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const footer = () => {
    const [DownloadLabel, setFooterLabel] = useState("Click here");//Click on button to go to part of website

    return (
        <div>
            <center><p>{/*Navigation tabs */}
                {/*Add in hyperlinks */}
                <nav>

                    <a href="#aboutus">About Us</a>
                    <a href="#classtimesandprices">Class Times and Prices</a>
                    <a href="#programsandinformation">Programs and Information</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#contactus">Contact Us</a>
                    <a href="#signin">Sign In</a>
                </nav>

            </p></center>
            <p>
                <center>&copy; 2025 Patrick J Fitzgerald. All rights reserved.
                </center> {/*Copyright*/}
            </p>

            <center><button onClick={scrollToTop}>Return to Top</button></center>

        </div>
    )
}

export default footer