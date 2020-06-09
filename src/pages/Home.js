import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import Hosts from '../components/Hosts'
import FeaturedPropertys from '../components/FeaturedPropertys'
import Futer from '../components/Futer'
import Guests from '../components/Guests'

export default function Home() {
    return (
     <>
        <Hero>
            <Banner title="Balay Agila" subtitle="We check Rental Properties so you don't have to">
             <Link to="/properties" className="btn-primary">search rentals</Link>
            </Banner>
        </Hero>

        
        <Guests />

        <Hosts />
   

         <FeaturedPropertys />
            
        <Futer />    
    </>
    );
};

