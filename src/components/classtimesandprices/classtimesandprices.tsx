import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './classtimesandprices.css'// Import the CSS file


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const ClassTimesandPrices = () => {
    const [bookingLabel, setBookingLabel] = useState("Book a Class"); // booking variable label
    const [paymentLabel, setPaymentLabel] = useState("Pay for a Class"); // Payment variable label


    // Function to handle click


    //Add in a class to connect with the buttons
    return (
        <div>

            <h2>Class Times</h2>

            <div id="classtimesandprices">


                <p>Monday: 04:00 AM - 05:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Monday: 05:00 AM - 06:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Monday: 06:00 AM - 07:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Monday: 04:00 PM - 05:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Monday: 05:00 PM - 06:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Monday: 06:00 PM - 07:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Monday: 07:00 PM - 08:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>

                <p>Tuesday: 04:00 AM - 05:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Tuesday: 05:00 AM - 06:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Tuesday: 06:00 AM - 07:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Tuesday: 04:00 PM - 05:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Tuesday: 05:00 PM - 06:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Tuesday: 06:00 PM - 07:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Tuesday: 07:00 PM - 08:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>

                <p>Wednesday: 04:00 AM - 05:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Wednesday: 05:00 AM - 06:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Wedesday: 06:00 AM - 07:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Wednesday: 04:00 PM - 05:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Wednesday: 05:00 PM - 06:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Wednesday: 06:00 PM - 07:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Wednesday: 07:00 PM - 08:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>

                <p>Thursday: 04:00 AM - 05:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Thursday: 05:00 AM - 06:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Thursday: 06:00 AM - 07:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Thursday: 04:00 PM - 05:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Thursday: 05:00 PM - 06:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Thursday: 06:00 PM - 07:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Thursday: 07:00 PM - 08:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>

                <p>Friday: 04:00 AM - 05:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Friday: 05:00 AM - 06:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Friday: 06:00 AM - 07:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Friday: 04:00 PM - 05:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Friday: 05:00 PM - 06:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Friday: 06:00 PM - 07:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Friday: 07:00 PM - 08:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>

                <p>Saturday: 04:00 AM - 05:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Saturday: 05:00 AM - 06:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Saturday: 06:00 AM - 07:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Saturday: 04:00 PM - 05:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Saturday: 05:00 PM - 06:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Saturday: 06:00 PM - 07:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Saturday: 07:00 PM - 08:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>

                <p>Sunday: 04:00 AM - 05:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Sunday: 05:00 AM - 06:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Sunday: 06:00 AM - 07:00 AM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Sunday: 04:00 PM - 05:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Sunday: 05:00 PM - 06:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Sunday: 06:00 PM - 07:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>
                <p>Sunday: 07:00 PM - 08:00 PM</p>{/*Hook - Book a class time by clicking on the Book a Class button*/}
                <button onClick={() => setBookingLabel("Class booked")}>Book a Class</button>

                <h2>Prices</h2>

                <p>Daily: $15</p>
                <button type="button" onClick={() => setPaymentLabel("Pay for a Class")}>
                    Pay now</button> {/*Pay for a class on the button Pay for a Class*/}
                <p>Weekly: $25</p>
                <button type="button" onClick={() => setPaymentLabel("Pay for a Class")}>
                    Pay now</button>{/*Pay for a class by clicking on the button Pay for a Class*/}
                <p>Monthly: $50</p>
                <button type="button" onClick={() => setPaymentLabel("Pay for a Class")}>
                    Pay now</button>{/*Pay for a class by clicking on the button Pay for a Class*/}
            </div>
            <br />
            <br />
            <center><button onClick={scrollToTop}>Return to Top</button></center> {/*Button to Return to Top */}

            <hr />
        </div>
    );
}

export default ClassTimesandPrices
