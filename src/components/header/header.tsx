import React, { useState } from 'react'; // Import TSX file
import './header.css'// Import the CSS file


const Header = () => {

    const [DownloadLabel, setHeaderLabel] = useState("Click here");//Click on button to go to part of website

    return (
        <div>


            Fitzy's Online Yoga
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
        </div>
    )
}

export default Header
