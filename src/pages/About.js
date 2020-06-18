import React from 'react'
import Title from '../components/Title'
import Futer from '../components/Futer'

import { BsFillPeopleFill } from "react-icons/bs";

export default function About() {
   return ( 
       <>
    <div className="about">
        <Title title="About Us"/>
        <div>
       <span className="icon"> <BsFillPeopleFill/> </span>
       <p>We play a pivotal role in reducing face-to-face communication between landlords and tenants by offering exemplary customer support.</p>
        </div>
       

        <p>Renting a home should be as easy as buying your shopping online.<br /> And so, <span className="gold-text">Balay Agila</span> was born.</p>

       

        <p>Our dream is to make renting as simple and fast as getting a coffee. <br />We work to teleport people into homes anywhere, so they can live the experience without being there.<br /> We connect with them. We bring reality to them.</p>
      
    </div>
       
   <Futer />
        </>
    )
}