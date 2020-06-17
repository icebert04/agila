import React from 'react'
import Title from '../components/Title'
import Futer from '../components/Futer'

import { GiSpray } from "react-icons/gi";
import { BsGearFill, BsWifi } from "react-icons/bs";
import { FiPhoneOff } from "react-icons/fi";

export default function Covid() {
    return (
        <>
        <div className="covid">
            <Title title="during covid times"/>
            <h3>Our homes are fully-equipped for these times</h3>

            <p>With discounted rates & increased flexibility, our times are conveniently set up for all your self-distancing & remote working needs</p>

            <ul>
                <li>
                    <GiSpray className="icon"/>
                    <div>
                        <b>Sanitized Spaces</b>  <p>Professionally cleaned and disinfected before/after stays, and a Welcome Kit to get you started with all your essential cleaning supplies</p>
                    </div>
                </li>

                <li>
                    <BsGearFill className="icon"/>
                    <div>
                    <b>Ongoing Support</b> <p>Avoid face-to-face contact with around-the-clock support via phone & email; our live chat to manage all critical service needs</p>
                    </div>
                </li>

                <li>
                    <FiPhoneOff className="icon"/>
                    <div>
                    <b>Contactless Booking + Check-In</b> <p>Easy online so you can review, sign your contract, check-in and make payments digitally</p>
                    </div>
                    </li>

                <li>
                    <BsWifi className="icon"/>
                    <div>
                    <b>Connected For Productivity</b> 
                    <p>Set up to WFH, with high-speed WiFi, fully-equipped kitchen, a coffee machine, on-site laundry, gym, working desks/office space & more*</p>
                    </div>
                <a className="copyright">May vary based on unit and building</a>
                </li>
            </ul>
            
        </div>
        <Futer/>
        </>
    )
}