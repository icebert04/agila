import React, { Component } from "react";
import Title from "./Title";

//icons
import { FaShieldAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { BsChatFill, BsFillHouseFill } from "react-icons/bs";
// import {  } from 'react-icons/ai';

export default class Landlord extends Component {
  render() {
    return (
      <div className="landlords">
        <Title title="for landlords" />
        <div className="landlords-center">
          <article className="landlord">
            <span>
              <GiReceiveMoney />
            </span>
            <h6>earnings</h6>
            <p> Attain higher occupancy rate through "Screened" rentals</p>
            <br />
            <p>
              Steady cash-flow guaranteed,
              <br /> maximizing the property's annual yield
            </p>
          </article>

          <article className="landlord">
            <span>
              <BsChatFill />
            </span>
            <h6>communication</h6>
            <p>We handle 100% of tenant's communication</p>
            <br />
            <p>
              Contactless Booking and Check-In
              <br /> Easy online so you can review,
              <br /> offer the contract, check-in and collect payments digitally
            </p>
          </article>

          <article className="landlord">
            <span>
              <FaShieldAlt />
            </span>
            <h6>security</h6>
            <p>
              Vetted tenants, typically business executives who stay for one
              month or longer
            </p>
            <br />
            <p>
              Your property will always be in impeccable condition,
              <br />
              Security Deposit Policy & Insurance a possibility
            </p>
          </article>

          <article className="landlord">
            <span>
              <BsFillHouseFill />
            </span>
            <h6>property management</h6>
            <p>
              Our customer support team will manage all the work on your behalf
              to enable a seamless guest experience
            </p>
            <br />
            <p>
              We help landlords provide <br /> 5-star quality housekeeping &
              maintenance management, assist professional cleaning
              (COVID-Protect), & scheduled regular check-ups to make sure it
              stays in top-notch condition
            </p>
          </article>
        </div>
      </div>
    );
  }
}
