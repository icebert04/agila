import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedPropertys from '../components/FeaturedPropertys'


export default function Home() {
    return (
     <>   
    <Hero>
        <Banner title="Philippine properties" subtitle="properties starting at $299">
        <Link to="/properties" className="btn-primary">our properies</Link>
        </Banner>
        </Hero>

        <Services />

         <FeaturedPropertys />
            
    </>
    );
};

