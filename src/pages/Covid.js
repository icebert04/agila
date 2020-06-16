import React from 'react'
import Title from '../components/Title'
import Futer from '../components/Futer'

export default function Covid() {
    return (
        <>
        <div className="covid">
            <Title title="during covid times"/>
            <h3>Our homes are fully-equipped for these times</h3>

            <p>With discounted rates & increased flexibility, our times are conveniently set up for all your self-distancing & remote working needs</p>

            <ul>
                <li><b>Sanitized Spaces</b>  <p>Professionally cleaned and disinfected before/after stays, and a Welcome Kit to get you started with all your essential cleaning supplies</p>
                </li>
                <li><b>Ongoing Support</b> <p>Avoid face-to-face contact with around-the-clock support via phone & email; our live chat to manage all critical service needs</p>
                </li>
                <li><b>Contactless Booking + Check-In</b> <p>Easy online so you can review, sign your contract, check-in and make payments digitally</p></li>
                <li><b>Connected For Productivity</b> <p>Set up to WFH, with high-speed WiFi, fully-equipped kitchen, a coffee machine, on-site laundry, gym, working desks/office space & more*</p>
                <a className="copyright">May vary based on unit and building</a></li>
            </ul>
            
        </div>
        <Futer/>
        </>
    )
}