import React from "react";
import Title from "../components/Title";
import Futer from "../components/Futer";

import { BsFillPeopleFill } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className="about">
        <Title title="About Us" />
        <div>
          <span className="icon">
            {" "}
            <BsFillPeopleFill />{" "}
          </span>
          <p>
            We are <b className="gold-text">Balay Agila</b>!<br />
            We upgrade properties, transforming them into fully-furnished and
            equipped homes.
            <br /> We do also educate landlords to pay more attention to their
            tenant's needs.
          </p>

          <p>
            The <b className="gold-text">Balay Agila</b> experience removes the
            need for in-person viewings, saving both tenants and landlords the
            time and expense.
            <br /> We take professional photos, design floor plans, and record
            high-definition videos of the property and neighborhood.
            <br /> We also write detailed descriptions about the home and local
            area.
          </p>

          <p>
            We play a pivotal role in reducing face-to-face communication
            between landlords and tenants by offering exemplary customer
            support.
          </p>
        </div>

        <p>
          Renting a home should be as easy as like shopping online.
          <br /> And so, <b className="gold-text">Balay Agila</b> was born.
        </p>

        <p>
          Our dream is to make Renting as simple and fast as ordering a coffee.
          <br />
          We work to Teleport people into homes anywhere in The Philippines, so
          they can live the experience even without being physically there.
          <br /> We connect with them. We bring reality to them.
        </p>
      </div>

      <Futer />
    </>
  );
}
