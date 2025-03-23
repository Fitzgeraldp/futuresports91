import React, { useState } from 'react'; // Import TSX file
import './programsandinformation.css'// Import the CSS file
import stretchvideo from './assets/videos/stretchvideo.mp4';


const scrollToTop = () => {//Button allowing scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ProgramsandInformation = () => {
    const [ProgramLabel, setUploadLabel] = useState("Upload a Program");//Upload a program
    const [DownloadLabel, setDownloadLabel] = useState("Download a Program");//Download a program

    return (
        <div>
            <h2>Programs and Information</h2>
            <div id="programsandinformation">

                <p>Yoga Program Request:</p>
                <button onClick={() => setUploadLabel("Program uploaded")}>Upload Program Requests</button>
                {/*Button will allow the user to upload program requests*/}

                <p>Beginner's Program:</p>
                <button onClick={() => setDownloadLabel("Program downloaded")}>Download Program</button>

                {/*Button will download personalised individual program */}

                <p>Intermediate Program:</p>
                <button onClick={() => setDownloadLabel("Program downloaded")}>Download Program</button>
                {/*Button will download personalised individualprogram */}

                <p>Advanced Program:</p>
                <button onClick={() => setDownloadLabel("Program downloaded")}>Download Program</button>
                {/*Button will download personalised individualprogram */}

            </div>

            <br />


            <br />
            <br />
            <center><button onClick={scrollToTop}>Return to Top</button></center>

            <hr />
        </div>
    )
}

export default ProgramsandInformation