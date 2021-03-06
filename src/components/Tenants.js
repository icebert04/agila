import React, { Component } from "react";
import Title from "./Title";

//icons
import { FaCoffee, FaVideo } from "react-icons/fa";
// import {  } from 'react-icons/ti';
// import {  } from 'react-icons/gr';
import { GiTwoCoins, GiLifeSupport } from "react-icons/gi";
// import {  } from 'react-icons/bs';
// import {  } from 'react-icons/ai';

export default class Tenants extends Component {
  render() {
    return (
      <div className="tenants">
        <Title title="for tenants" />
        <div className="tenants-center">
          <article className="guest">
            <span>
              <FaVideo />
            </span>
            <h6>view online</h6>
            <p>
              Our team will visit properties, take Photos, Floor Plans and
              "Video Tours" for you, at no cost
            </p>
            <br />
            <p>
              We will show you around
              <br />a guided tour from the comforts of your home
            </p>
          </article>

          <article className="guest">
            <span>
              <FaCoffee />
            </span>
            <h6>complete amenities</h6>
            <p>
              High-speed WiFi,
              <br /> Fully-equipped kitchen & coffee machine,
              <br /> On-site laundry & gym,
              <br /> Working desks/Office space & more
            </p>
            <br />
            <p>Tell us what else do you need... We'll add that too</p>
          </article>

          <article className="guest">
            <span>
              <GiTwoCoins />
            </span>
            <h6>cheaper</h6>
            <p>
              Will help you find the right location and a furnished home to fit
              your need within your budget
            </p>
            <br />
            <p>
              Provide more spacious and <br /> lower-cost alternative 
            </p>
          </article>

          <article className="guest">
            <span>
              <GiLifeSupport />
            </span>
            <h6>Ongoing Support</h6>
            <p>
              Avoid face-to-face contact with around the clock support via phone
              & email
            </p>
            <br />
            <p>Our live chat is here to manage all critical service needs</p>
          </article>
        </div>
      </div>
    );
  }
}
