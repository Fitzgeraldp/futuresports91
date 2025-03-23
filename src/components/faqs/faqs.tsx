import React from 'react';
import './faqs.css'// Import the CSS file
import yogavideo from './assets/videos/yogavideo.mp4';// Adjust the path accordingly


const scrollToTop = () => {//Button allowing scrolling to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const FAQs = () => {
    return (
        <div>
            <h2>Frequently Asked Questions</h2>
            <div className="FAQs">
                <details>
                    <summary>Is yoga safe?</summary>
                    <p>Yes, anyone can do yoga.</p>
                </details>
                <details>
                    <summary>Do I have to be a certain weight and height to do yoga classes? can I track my order?
                    </summary>
                    <p>No, yoga does not discriminate against weight or height.</p>
                </details>

                <details>
                    <summary>Is yoga good for weight loss?</summary>
                    <p>Yes.</p>
                </details>

                <details>
                    <summary>Can I opt out of classes?</summary>
                    <p>Yes.</p>
                </details>
                <details>
                    <summary>Can I buy a program and workout on my own?</summary>
                    <p>Yes.</p>
                </details>

                <br />

                <center><video width="600" controls>
                    <source src="/videos/yogavideo.mp4" type="video/mp4" />
                </video></center>

                <br />

                <center><button onClick={scrollToTop}>Return to Top</button></center> {/*Button allows to scroll to the top of the page */}

                <hr />
            </div>


        </div>
    )
}

export default FAQs