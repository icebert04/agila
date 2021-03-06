import React, { Component } from "react";
import agila from "../images/Agila.png";
import { Link } from "react-router-dom";

import { GrFacebook, GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

export default class Futer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-center">
          <article className="footers">
            <h5>contact us</h5>
            <h6>Our team is at your disposal</h6>

            <p>
              <b>
                <MdPhoneIphone />
              </b>
              0917-5691002
            </p>

            <p>
              <b>
                <FaPhoneAlt />
              </b>{" "}
              02-88090130
            </p>

            <br />
            <p>
              <b>
                <GrMail />
              </b>{" "}
              admin@balayagila.com
            </p>
            <br />
            <h5>Visit our FB Page</h5>
            <a
              className="btn-primary btn"
              href="https://www.facebook.com/balayagila/"
              target="_new"
            >
              Balay Agila
            </a>
          </article>

          <article className="footers">
            <div>
              <h5>Our Philippine Eagle is diminishing</h5>
              <p>Help the Philippine Eagle Foundation in your own way</p>
              <a
                className="btn-secondary btn"
                href="https://www.philippineeaglefoundation.org/"
                target="_new"
              >
                Donate
              </a>
            </div>
            <div>
              <img src={agila} className="img" alt="phillipine eagle" />
            </div>
          </article>

          <div className="footers">
            <h5>Site Links</h5>
            <ul className="footer-sites footer-link">
              <li>
                <Link to="/covid" target="_blank">
                  COVID-19 protect
                </Link>
              </li>
              <div className="seperator" />
              <li>
                <Link to="/about" target="_blank">
                  About us
                </Link>
              </li>
              <div className="seperator" />
              <li>FAQ</li>
              <div className="seperator" />
              <li>insurance</li>
              <div className="seperator" />
              <li>
                <Link to="/apply" target="_blank">
                  Apply As Landlord
                </Link>
              </li>
            </ul>
          </div>

          <div className="footers">
            <span>
              <GrFacebook />
            </span>
            <h5>Join our exclusive facebook group</h5>

            <p>
              Become part of our substantial & vibrant "Hosting Community"
              <br /> Get inside access
            </p>
            <a
              href="https://www.facebook.com/groups/203282164142189/"
              target="_new"
              className="btn btn-primary"
            >
              Join Now
            </a>
          </div>
        </div>

        <h6 className="copyright">©2020 Balay Agila - All Rights Reserved</h6>
      </section>
    );
  }
}
