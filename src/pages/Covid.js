import React from "react";
import Title from "../components/Title";
import Futer from "../components/Futer";

import { GiSpray } from "react-icons/gi";
import { BsGearFill, BsWifi } from "react-icons/bs";
import { FiPhoneOff } from "react-icons/fi";

export default function Covid() {
  return (
    <>
      <div className="covid">
        <Title title="during COVID times" />
        <h3>Our homes are fully-equipped for the "New-Norm"</h3>

        <p>
          With discounted rates & increased flexibility, our service are
          conveniently set up for all your self-distancing & remote working
          needs
        </p>

        <div className="covid-center">
          <div>
            <GiSpray className="icon" />
            <div>
              <b>Sanitized Spaces</b>{" "}
              <p>
                Professionally cleaned and disinfected before/after stays,
                <br /> and a Starter Kit to get you started with all your
                essential cleaning supplies
              </p>
            </div>
          </div>

          <div>
            <BsGearFill className="icon" />
            <div>
              <b>Ongoing Support</b>
              <div>
                <p>
                  Avoid face-to-face contact with around the clock support via
                  phone & email,
                  <br /> Our live chat is here to manage all high-priority
                  service needs
                </p>
              </div>
            </div>
          </div>

          <div>
            <FiPhoneOff className="icon" />
            <div>
              <b>Contactless Booking + Check-In</b>{" "}
              <div>
                <p>
                  Easy online so you can review, sign your contract, check-in
                  and make payments digitally
                </p>
              </div>
            </div>
          </div>

          <div>
            <BsWifi className="icon" />
            <div>
              <b>Connected For Productivity</b>
              <p>
                Set up for WFH,
                <br /> High-speed WiFi, Fully-equipped kitchen & coffee machine,
                <br />
                On-site laundry & gym,
                <br /> Working desks/Office space & more*
              </p>
            </div>
            <br />
            <span className="copyright">
              *May vary based on unit and building
            </span>
          </div>
        </div>
      </div>
      <Futer />
    </>
  );
}
