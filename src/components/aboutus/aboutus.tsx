import React from 'react';
import './aboutus.css';
import stretchvideo from './assets/videos/stretchvideo.mp4'; // Adjust the path accordingly


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); //Allows for scrolling to the top with ease
};

const AboutUs = () => {
    return (
        <div>
            <h2>About Us</h2>

            <div id="aboutus">
                <p>Hi and welcome to Fitzy's Online Yoga. We aim to provide a platform to view class times and prices along with programs and information.</p>
                <p>Everything yoga is provided here on this website.</p>
                <p>Enjoy!</p>
                <center><video width="600" controls>
                    <source src="/videos/stretchvideo.mp4" type="video/mp4" />
                </video></center>
            </div>



            <center><button onClick={scrollToTop}>Return to Top</button></center> {/*Allows for button to be clicked to Return to the Top */}

            <hr />

        </div >

    )
}

export default AboutUs