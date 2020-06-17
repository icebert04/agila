import React from 'react'
import Futer from '../components/Futer'

export default function Apply() {
    return (
        <>
        <section className="first">
            <div  className="apply">
            <h2>How Hosting Works</h2>
            <ul className="apply-grid">

            
                <li>
               <h3>Step 1</h3>  <div><h4> Contact us and get an offer within hours</h4><p>
                Fill out our interest form to let us know about your property and your expected rate. We will do our homework and get back to you with an offer. </p></div>
                </li>

            <li> 
               <h3>Step 2</h3> <div><h4>Arrange an on-site visit</h4><p>  Our professional architect and design team will visit your property to perform measurements, and answer any questions you may have.</p></div>
               </li>

                <li>
                <h3>Step 3</h3>  <div><h4>Sign a lease</h4><p>  Sign a master lease with us and that’s it. We take care of furnishing and renting for you</p></div>
                </li>

            </ul>
            </div>
            </section>
            <section className="second">
            <div className="apply">
                <h2> What we do for you </h2>
            </div>
        </section>

        <Futer/>
        </>
    );
}