import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import PropertysContainer from '../components/PropertysContainer';
import Futer from '../components/Futer';

const Propertys = () => {
   
  return (
      <>
    <Hero hero="propertysHero">
   <Banner title='Rentals'>
     <Link to='/' className='btn-primary'>
       return home
     </Link>
   </Banner>
    </Hero>
    
    <PropertysContainer />
    <Futer />
    </>
    );
}

export default Propertys